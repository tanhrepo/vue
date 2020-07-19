// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('pei'));
// 指定图表的配置项和数据
option = {
	backgroundColor: "#15251b",
	title: {
		text: '培训对象区域分布',
		textStyle: {
			color: '#0b8f5d',
			fontSize: 20
		}
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c} ({d}%)'
	},
	legend: {
		icon: 'rect',
		orient: 'horizontal', //设置为横向排列
		itemWidth: 10,
		itemHeight: 10,
		borderRadius: 0, //设置了没有效果
		bottom: 10,
		data: ['涪陵', '南川', '丰都', '酉阳', '其它'],
		textStyle:{
			color: '#fff'
		},
	},
	series: [{
		name: '培训对象区域分布',
		type: 'pie',
		radius: ['50%', '70%'],
		avoidLabelOverlap: false,
		hoverAnimation: false,
		startAngle: -70,
		label: {
			normal: {
				formatter: '{c}%',
				textStyle:{
					color: '#fff'
				},
				rich: {
					value: {
						fontSize: 18,
						fontWeight: 'bold',
						color: '#fff'
					}
				},
			}
		},
		emphasis: {
			label: {
				show: true,
				// fontSize: '30',
				// fontWeight: 'bold'
			}
		},
		labelLine: {
			show: false
		},
		data: [{
				value: 27,
				name: '涪陵',
				itemStyle: {
					color:"#f4b58a"
				}
			},
			{
				value: 16,
				name: '南川',
				itemStyle: {
					color:"#ff6a6c"
				}
			},
			{
				value: 33,
				name: '丰都',
				itemStyle: {
					color:"#00875d"
				}
			},
			{
				value: 24,
				name: '酉阳',
				itemStyle: {
					color:"#52b1d3"
				}
			},
			{
				value: 0,
				name: '其它',
				itemStyle: {
					color: '#5c5cd6'
				}
			}
			]
	}]

};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);