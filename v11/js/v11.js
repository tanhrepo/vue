// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据

var data = [
	{
		name: '看电视',
		value: 52
	},{
		name: '听音乐',
		value: 48
	}]
	var title = {
		text: '文化娱乐服务',
		textStyle: {
			color: '#0b8f5d',
			fontSize: 20
		}
	}
	var seriesArr=[];
	colors=[['#28352c', '#1e976c'],['#28352c', '#1e976c']]
	data.forEach(function(item, index){
		seriesArr.push(
			{
				name: item.name,
				type: 'pie',
				clockWise: false,
				radius: [60, 75],
				itemStyle:  {
					normal: {
						color: colors[index][0],
						shadowColor: colors[index][0],
						shadowBlur: 0,
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
					}
				},
				hoverAnimation: false,
				center: [index * 20 + 10 +'%', '50%'],
				data: [{
					name: item.name,
					value: item.value,
					label: {
						normal: {
							formatter: function(params){
								return params.name+ '\n' + params.value + '%';
							},
							position: 'center',
							show: true,
							textStyle: {
								fontSize: '20',
								fontWeight: 'bold',
								lineHeight: 25,
								color: '#fff'
							}
						}
					},
				}, {
					value: 100-item.value,
					name: 'invisible',
					itemStyle: {
						normal: {
							color: colors[index][1]
						},
						emphasis: {
							color: colors[index][1]
						}
					}
				}]
			}    
		)
	});
   
	
option = {
	title: title,
	backgroundColor: "#15251b",
	series: seriesArr
}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);