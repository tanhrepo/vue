<template>
</template>

<script>
	data() {
		return {
			data() {
				return {
					option: {
						title: {
							text: '模型指标情况总览'
						},
						tooltip: {
							trigger: 'axis'
						},
						color: ['#FFC44B', '#1DCFAB', '#1A9DF5'],
						legend: {
							top: '2%',
							show: true,
							data: ['模型变更次数', '模型授权次数', '模型调用次数'],
							icon: "circle",
						},
						grid: {
							left: '0',
							right: '4%',
							bottom: '3%',
							top: '13%',
							containLabel: true
						},
						toolbox: {
							feature: {
								saveAsImage: {}
							}
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							axisTick: {
								show: false
							},
							axisLine: {
								show: false
							},
							data: ['9-01', '9-02', '9-03', '9-04', '9-05', '9-06', '9-07', '9-08', '9-09', '9-10', '9-11', '9-12']
						},
						yAxis: {
							type: 'value',
							name: '单位：万元',
							nameTextStyle: {
								align: 'left',
							},
						},
						series: [{
								name: '模型变更次数',
								type: 'line',
								symbol: 'none',
								smooth: true,
								lineStyle: {
									width: 2,
									shadowColor: 'rgba(0,0,0,0.2)',
									shadowBlur: 4,
									shadowOffsetY: 5,
									//line的阴影
								},
								data: [6, 22, 12, 21, 33, 24, 33, 21, 34, 13, 21, 28]
							},
							{
								name: '模型授权次数',
								type: 'line',
								symbol: 'none',
								smooth: true,
								lineStyle: {
									width: 2,
									shadowColor: 'rgba(0,0,0,0.2)',
									shadowBlur: 4,
									shadowOffsetY: 5
								},
								data: [30, 22, 14, 33, 18, 28, 24, 16, 18, 12, 22, 8]
							},
							{
								name: '模型调用次数',
								type: 'line',
								symbol: 'none',
								smooth: true,
								lineStyle: {
									width: 2,
									shadowColor: 'rgba(0,0,0,0.2)',
									shadowBlur: 4,
									shadowOffsetY: 5
								},
								data: [27, 40, 30, 43, 24, 41, 31, 34, 42, 27, 42, 18]
							},

						]
					}
				}
			},
		}
	}
</script>

<style>
</style>
