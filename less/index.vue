<template>
	<div class="ContentMenu">
		<div style="width: 1200px;height: 62px;margin: 0 auto;overflow: hidden">
			<div style="width: 1100px;height: 62px;display: flex;float: left">
				<!--                <router-link class="menu" :to="{ path: item.url }" :class="{ active:index==isActive }"  @click="changeValue(index)"-->
				<!--                    v-for="( item , index ) in dataShow" :key="item.id">{{item.name}}</router-link>-->
				<li class="menu" :class="{ active:index==isActive }" @click="changeValue(index)" v-for="( item , index ) in dataShow"
				 :key="item.id">{{item.name}}</li>
			</div>

			<div class="btn" style="">
				<img src="../assets/img/arrow-right.png" alt="" width="18px" height="18px" @click="nextPage" style="position: absolute;top: 50%;left:50%;transform: translate(-50%,-50%) ">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ContentMenu",
		data() {
			return {
				isActive: false,
				// 假设这是后台传来的数据来源
				data: [{
						name: "弹性计算服务",
						url: '/',
					},
					{
						name: "统一认证服务",
						url: '/',
					},
					{
						name: "统一日志服务",
						url: '/',
					},
					{
						name: "微服务平台",
						url: '/',
					},
					{
						name: "统一运维管理服务",
						url: '/',
					},
					{
						name: "能力开放平台",
						url: '/',
					},
					{
						name: "1",
						url: '/index',
					},
					{
						name: "22",
						url: '/index',
					},
					{
						name: "333",
						url: '/index',
					},
				],
				// 所有页面的数据
				totalPage: [],
				// 每页显示数量
				pageSize: 6,
				// 共几页
				pageNum: 1,
				// 当前显示的数据
				dataShow: [],
				// 默认当前显示第一页
				currentPage: 0
			}
		},
		methods: {
			page() {
				// 有后台数据时：
				// console.log('分页')
				// for (let i = 0 ,j = Result.data.length; i < j; i++) {
				//   this.data.push({ name: "liu" ,look:"very handsome"});
				// }
				// 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
				this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;

				for (let i = 0; i < this.pageNum; i++) {
					// 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
					// 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5条，即slice(0,5)，第二页是6-10，条即slice(0,5)...
					this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
				}

				this.dataShow = this.totalPage[this.currentPage];
			},

			// 上一页和下一页
			// 下一页
			nextPage() {
				if (this.currentPage === this.pageNum - 1) {
					this.currentPage = -1;
				}
				this.dataShow = this.totalPage[++this.currentPage];

			},
			changeValue(index) {
				this.isActive = index;
			},
		},
		mounted() {
			this.page()
		}
	}
</script>

<style scoped>
	li {
		list-style-type: none;
	}

	.ContentMenu {
		overflow: hidden;
	}

	.menu {
		width: 200px;
		height: 62px;
		line-height: 62px;
		text-align: center;
		overflow: hidden;
		position: relative;
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
	}

	.btn {
		width: 100px;
		height: 62px;
		line-height: 62px;
		overflow: hidden;
		position: relative;
	}

	.btn>img:hover {
		cursor: pointer;
	}

	.active {
		color: #222222;
	}

	.active::after {
		width: 120px !important;
	}

	.menu:after {
		content: " ";
		width: 0px;
		height: 3px;
		background: #09BA51;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		display: inline-block;
		position: absolute;
		transition-property: all;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		transition-delay: 0s;
	}

	.menu:hover:after {
		content: " ";
		width: 120px;
		height: 3px;
		background: #09BA51;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		display: inline-block;
		position: absolute;
	}
</style>
