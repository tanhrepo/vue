<template>
    <div class="">
        <p class="p-title">活动详情</p>
        <div class="c-tab">
            <div class="rows">
                <div class="cells on">活动场次</div>
                <div class="cells">活动类型</div>
            </div>
        </div>
        <div style="text-align: center;height: 29vh;" id="horizontalChart" ref="horizontalChart">
        </div>
    </div>
</template>

<script>

    export default {
        name: "ActivityDetaile",

        mounted() {
            this.initEcharts();
        },
        methods:{
            initEcharts() {
                var myColor1 = ['#e3ab4e']
                var option ={
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        show:false,
                        left: 'center',
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
                        axisLabel:{
                            color:'#afb8b3'
                        },
                        axisLine :{
                            lineStyle:{
                                color:'#38463e'
                            },
                        },
                        axisTick:{
                            show: false,
                        },
                    },
                    yAxis: {

                        type: 'value',
                        axisLabel:{
                            color:'#afb8b3'
                        },
                        axisLine :{
                            lineStyle:{
                                color:'#38463e'
                            },
                        },
                        axisTick:{
                            show: false,
                        },
                        splitLine:{
                            show:false,
                        },
                    },

                    series: [{
                        type: 'line',
                        symbol:'circle',
                        areaStyle:{
                            color: '#e3ab4e',
                            opacity:'.1'
                        },
                        itemStyle:{
                            normal:{
                                color:'#e3ab4e', //折点颜色
                                lineStyle:{
                                    color:'#e3ab4e',
                                    width:1,
                                },
                            }
                        },

                        data: [3, 4, 7, 3, 5, 6, 3,5,6,1,3,6],
                    }]
                }
                this.horizontalBar = this.$echarts.init(this.$refs.horizontalChart)
                this.horizontalBar.setOption(option)
            },
        }
    }
</script>

<style scoped>
    .c-tab .rows{
        width: 50%;
        margin: 0 auto;
    }
    .c-tab .cells{
        width: 50%;
        text-align: center;
        font-size: .9rem;
        margin-top: -10px;
        margin-bottom: 10px;
        color: #afb8b3;
    }
    .c-tab .cells.on{
        color: #f4b58a;
        position: relative;
    }
    .c-tab .cells.on:before{
        position: absolute;
        background: #f4b58a;
        width: .8rem;
        height: 3px;
        content: '';
        bottom: -3px;
        left: 50%;
        margin-left: -.5rem;
        border-radius: 1px;
    }

    #horizontalChart{
        margin-top: -7.5vh;
    }
</style>