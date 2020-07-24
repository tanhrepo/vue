<template>
    <div class="" style="position: relative">
        <p class="p-title" style="position: absolute">培训对象年龄分布</p>
        <div id="age" style="width: 100%;height:100% ;position:absolute"></div>
    </div>
</template>

<script>

    import echarts from "echarts";

    export default {
        name: "AgeDistribution",
        methods:{
            drawPie(id){
                let age = this.charts = echarts.init(document.getElementById(id))
                let data = [
                    {
                        name: '51岁以上',
                        value: 30
                    },{
                        name: '41-50岁',
                        value: 22
                    },{
                        name: '31-40岁',
                        value: 60
                    },{
                        name: '21-30岁',
                        value: 10
                    },{
                        name: '20岁以下',
                        value: 0
                    }]
                let seriesArr=[];
                let colors=[['#1e976c','#28352c'],['#ff8c37', '#28352c'],['#ffc257', '#28352c'], ['#fd6f97', '#28352c'],['#a181fc', '#28352c']]
                window.addEventListener("resize", () => {
                    age.resize();
                })
                data.forEach(function(item, index){
                    seriesArr.push(
                        {
                            name: item.name,
                            value: item.value,
                            type: 'pie',
                            clockWise: false,
                            radius: ['28%', '34%'],
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
                            center: [index * 25 + 13 +'%', '50%'],
                            data: [{
                                name: item.name,
                                value: item.value,
                                label: {
                                    normal: {
                                        formatter: function(params){
                                            return params.value+'%' + '\n' + params.name;
                                        },
                                        position: 'center',
                                        show: true,
                                        textStyle: {
                                            fontSize: '10',
                                            lineHeight: 14,
                                            // fontWeight: 'bold',
                                            color: '#afb8b3'
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
                age.setOption({
                    series: seriesArr,
                    textStyle: {
                        color: '#fff'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    legend: {
                        icon: 'rect',
                        orient: 'horizontal',
                        // width:350,      //图行例组件的宽度,默认自适应
                        // x: 'right',  //图例显示在右边  设置数字就是离左边多远
                        bottom: 10,   //图例在垂直方向上面显示居中
                        itemWidth:8,  //图例标记的图形宽度
                        itemHeight:8, //图例标记的图形高度
                        itemGap:20,
                        fontcolor:'#afb8b3',
                        inactiveColor:'#afb8b3',
                        textStyle:{
                            color:"#afb8b3",
                        },
                        data: ['51岁以上','41-50岁','31-40岁','21-30岁','20以下'],
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                })
            }
        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('age')
            })
        }
    }
</script>

<style scoped>

</style>