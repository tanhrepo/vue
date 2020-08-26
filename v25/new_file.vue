<template>
    <div class="l-model-t" style="position: relative">
        <p class="p-title" style="position: relative">{{temp_title}}</p>
        <div id="hot" style="width: 100%;height:19vh ;position:absolute">
            <p class="err2" v-if="!Hot.length">暂时没有数据</p>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts";
    import ranking1 from '../../assets/img/ranking1.png'
    import ranking2 from '../../assets/img/ranking2.png'
    import ranking3 from '../../assets/img/ranking3.png'
    import {getData} from "../../api";
    export default {
        name: "HotProduct",
        props: ['title'],
        data(){
            return{
                Hot:[],
                goodsName:[],
                saleCount:[],
                temp_title : this.title,
                option:({
                    grid: {
                        top: 0,
                        bottom: 0,
                        right:11,
                        left: 110
                    },
                    tooltip: {
                        show: true,
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        textStyle: {
                            color: '#333',
                        },
                    },

                    yAxis: [{
                        axisLabel: {
                            color: "#afb8b3",
                            interval: 'auto',
                            align: 'left',
                            formatter: function(value, index) {
                                if (index < 3) {
                                    return '{idx' + index + '|' + '} {title|' + value + '}'
                                } else {
                                    return '{idx3|' + (1 + index) + '}' + value + ''
                                }
                            },
                            rich: {
                                idx0: {
                                    color: '#fff',
                                    // backgroundColor: "#e60000",
                                    backgroundColor: {
                                        image:ranking1
                                    },
                                    barBorderRadius:50,
                                    align: 'left',
                                    width: 20,
                                    height: 20,
                                },
                                idx1: {
                                    color: '#afb8b3',
                                    backgroundColor: {
                                        image:ranking2
                                    },
                                    fontSize: 9,
                                    align: 'left',
                                    width: 20,
                                    height: 20,
                                },
                                idx2: {
                                    color: '#afb8b3',
                                    backgroundColor: {
                                        image:ranking3
                                    },
                                    fontSize: 9,
                                    align: 'left',
                                    width: 20,
                                    height: 20,
                                },
                                idx3: {
                                    color: '#afb8b3',
                                    fontSize: 12,
                                    align: 'center',
                                    // value.align:'left',
                                    width: 25,
                                    height: 24,
                                },
                                title: {
                                    align: 'left',
                                    width:90,
                                },
                            }
                        },
                        axisTick: {
                            show: false//坐标刻度
                        },
                        splitLine: {
                            show: false//坐标网格线
                        },
                        axisLine: {
                            show: false//坐标轴线
                        },
                        type: "category",
                        // data: ["高山小土豆", "石柱红辣椒", "梁平地山鸡", "菜籽油", "蜂蜜"],
                        data:[],
                        inverse: true,//坐标反转
                        offset: 87//偏移
                    },
                    ],
                    xAxis: {
                        nameTextStyle: {
                            color: "#BBC5D9",
                            // padding: [0, 20, 10, 0],
                        },
                        axisLabel: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        // min:10000
                    },
                    series: [{
                        type: "bar",
                        barWidth: 15,
                        barMinHeight:50,
                        // data: ["312147", "252258", "192211", "175925", "155920", ],
                        data: [],
                        // formatter: '{data}件',
                        itemStyle: {
                            normal: {
                                color: {
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    // type: "linear",
                                    // global: false,
                                    colorStops: [{
                                        offset: 0,
                                        color: "#1d5737"
                                    }, {
                                        offset: 1,
                                        color: "rgba(29,87,55,0)"
                                    }]
                                },
                                label: {
                                    show: true,
                                    position: ['75%', '0%'],
                                    color: "#c9a2a2",
                                    formatter: '{d|{c}} {a|万元}',
                                    rich:{
                                        d:{
                                            color:"#d5a17a",
                                            fontWeight:'bold',
                                            fontSize:14,
                                            letterSpacing:10,
                                            fontStyle:'italic'
                                        },
                                        a:{
                                            color:"#d5a17a",
                                            fontStyle:'italic',
                                            fontSize:11,
                                        }
                                    },
                                },
                            }
                        }
                    }]
                })
            }
        },
        methods:{
            loadData(url) {
                let that = this;
                getData('/jcrh/bs/poor/queryAllGoodsRank', {}).then(result => {
                    // window.console.info(result);

                    for (let i = 0; i < result.data.length; i++) {
                        let obj = {
                            goodsName: result.data[i].goodsName,
                            saleCount: (result.data[i].saleMoney/10000).toFixed(1),
                        };
                        that.Hot.push(obj);
                    }
                    // console.log(that.Hot)
                    function obj(a,b){
                        return b.saleCount-a.saleCount;
                    }
                    that.Hot.sort(obj);
                    for(let i = 0;i < that.Hot.length;i++){
                        that.goodsName.push(that.Hot[i].goodsName)
                        that.saleCount.push(that.Hot[i].saleCount)
                    }
                    that.drawPie('hot');
                }).catch(err => {
                    this.$notify.error({title: '错误', message: err});
                });
            },
            drawPie(id){
                this.option.series[0].data=this.saleCount;
                this.option.yAxis[0].data=this.goodsName;
                let main = this.charts = echarts.init(document.getElementById(id))
                window.addEventListener("resize", () => {
                    main.resize();
                })
                this.charts.setOption(this.option)
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.loadData();
            })
        }
    }
</script>

<style scoped>
    .err2{
        font-size: .8rem;
        text-align: center;
        color: #afb8b3;
        margin-top: 10vh;
    }
</style>