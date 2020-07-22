<template>
    <div class="cells" style="margin-right: 2%;position: relative">
        <p class="p-title" style="position: absolute">培训课程</p>
        <div id="class" style="width: 100%;height:100% ;position:absolute"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "TrainingCourses",

        methods:{

            drawPie(id){
                let cla = this.charts = echarts.init(document.getElementById(id))
                window.addEventListener("resize", () => {
                    cla.resize();
                })
                this.charts.setOption({
                    textStyle: {
                        color: '#fff'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        icon: 'rect',
                        // orient: 'horizontal', //设置为横向排列
                        itemWidth: 10,
                        itemHeight: 10,
                        top: 5,
                        // show:false,
                        data: ['课程数量', '课程点击量'],
                        textStyle:{
                            color: '#fff'
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            data: ['儿童教育', '农业技术', '电商上网', '专业技能', '综合知识', 'PS教程', '彩铅基础', 'JAVA培训'],

                        },
                    ],
                    yAxis: [{
                        type: "value",
                        name: "次（万）",
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: 12
                        },

                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false,
                            // lineStyle: {
                            //     type: "dotted",
                            //     color: '#fff'
                            // }
                        },

                    },
                        {
                            type: "value",
                            name: "%",
                            nameTextStyle: {
                                color: '#fff',
                                fontSize: 12
                            },
                            min: 0,
                            max: 100,
                            axisLabel: {
                                formatter: "{value}",
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12
                                }
                            },
                            // axisLine: {
                            //     lineStyle: {
                            //         color: '#fff'
                            //     }
                            // },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false,
                            }
                        }
                    ],
                    series: [
                        {
                            name: '课程数量',
                            type: 'bar',
                            barMaxWidth:5,
                            data: [6, 3, 9, 3, 6, 2, 8, 3,
                                {
                                    value: 6,
                                    name: '儿童教育'
                                },{
                                    value: 3,
                                    name: '农业技术'
                                },{
                                    value: 9,
                                    name: '电商上网'
                                },{
                                    value: 3,
                                    name: '专业技能'
                                },{
                                    value: 6,
                                    name: '综合知识'
                                },{
                                    value: 2,
                                    name: 'PS教程'
                                },{
                                    value: 8,
                                    name: '彩铅基础'
                                },{
                                    value: 3,
                                    name: 'JAVA培训'
                                },
                            ],
                        },
                        {
                            name: '课程点击量',
                            type: 'bar',
                            barMaxWidth:5,
                            data: [10, 5.5, 5, 2, 2.3, 1.9, 6, 4],
                        }
                    ],
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('class')
            })
        }
    }
</script>

<style scoped>

</style>