<template>
    <div class="cells" style="position: relative">
        <p class="p-title" style="position: absolute">培训课程时长</p>
        <div id="time" style="width: 100%;height:100% ;position:absolute"></div>

    </div>
</template>
<script>
    import echarts from "echarts";

    export default {
        name: "CoursesDuration",
        methods:{

            drawPie(id){
                let time = this.charts = echarts.init(document.getElementById(id))
                window.addEventListener("resize", () => {
                    time.resize();
                })
                this.charts.setOption({
                    textStyle: {
                        color: '#fff'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
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
                        name: "小时        ",
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                        "min": 0,
                        "max": 100,

                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false,

                        },

                    },
                        {
                            type: "value",
                            name: "",
                            nameTextStyle: {
                                color: '#fff',
                                fontSize: 12
                            },
                            // min: 0,
                            // max: 100,
                            axisLabel: {
                                formatter: "{value}",
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    type: "dashed",
                                    color: "rgba(255,255,255,0.2)"
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '时长',
                            type: 'bar',
                            barMaxWidth:5,
                            showBackground: true,
                            data: [
                                {
                                    value: 86,
                                    name: '儿童教育'
                                },{
                                    value: 81,
                                    name: '农业技术'
                                },{
                                    value: 72,
                                    name: '电商上网'
                                },{
                                    value: 53,
                                    name: '专业技能'
                                },{
                                    value: 40,
                                    name: '综合知识'
                                },{
                                    value: 35,
                                    name: 'PS教程'
                                },{
                                    value: 25,
                                    name: '彩铅基础'
                                },{
                                    value: 23,
                                    name: 'JAVA培训'
                                },
                            ],
                        },
                        // {
                        //     name: '课程点击量',
                        //     type: 'bar',
                        //     barMaxWidth:5,
                        //     data: [10, 5.5, 5, 2, 2.3, 1.9, 6, 4],
                        // }
                    ],
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('time')
            })
        }
    }
</script>

<style scoped>

</style>