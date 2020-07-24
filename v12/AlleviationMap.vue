<template>
    <div class="titleMap" style="position: relative">
        <p class="p-title" style="position: absolute">培训课程时长</p>
        <div style="width: 100%;height:100% ;position:absolute" >
            <div :id="id" class="o-echarts"></div>
        </div>

    </div>
</template>
<script>
    import echarts from "echarts";
    import JSON from './json/chongqing.json';
    export default {
        name: "AlleviationMap",
        data() {
            return {
                id: 'echarts_' + new Date().getTime() + Math.floor(Math.random() * 1000),
                echartObj: null,
                radioList: {
                    A: '年度总项目数据查询',
                },
                radioActive: 'A',
                option: {

                    tooltip: {
                        padding: 0,
                        backgroundColor: 'transparent',
                    },
                    legend: {
                        orient: 'vertical',
                        top: '9%',
                        left: '5%',
                        icon: 'circle',
                        data: [],
                        selectedMode: 'single',
                        selected: {},
                        itemWidth: 12,
                        itemHeight: 12,
                        itemGap: 30,
                        inactiveColor: '#b6d7ff',
                        textStyle: {
                            color: '#ec808d',
                            fontSize: 14,
                            fontWeight: 300,
                            padding: [0, 0, 0, 15]
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 500,
                        show: false,
                        splitNumber: 5,
                        inRange: {
                            color: ['#FACD91', '#74DFB2', '#81D3F8', '#768FDE', '#e9969f'].reverse()
                        },
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    geo: {
                        map: '重庆',
                        label: {
                            normal: {
                                show: true,
                                color: '#000'
                            },
                            emphasis: {
                                show: true,
                                color: '#fff'
                            }
                        },
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#8db200',
                                borderColor: '#6367ad',
                                borderWidth: 1
                            },
                            emphasis: {
                                areaColor: '#feb6aa' // hover效果
                            }
                        },
                        left: '5%',
                        right: '5%',
                        top: '5%',
                        bottom: '5%'
                    },
                }
            };
        },
        mounted() {
            this.echartObj = echarts.init(document.getElementById(this.id));
            echarts.registerMap('重庆', JSON);
            this.echartObj.setOption(this.getOptions(), true);
            // this.echartObj.on('legendselectchanged', params => {
            //     this.radioActive = Object.keys(this.radioList).filter(item => this.radioList[item] === params.name)[0];
            //     this.echartObj.clear();
            //     this.echartObj.setOption(this.getOptions());
            // });
            window.addEventListener('resize', () => {
                if (this.echartObj && this.echartObj.resize) {
                    this.echartObj.resize();
                }
            });
        },
        beforeDestroy() {
            if (!this.chart) {
                return;
            }
            this.chart.dispose();
            this.chart = null;
        },
        methods: {
            getOptions() {
                this.setOptions('legend', {
                    data: Object.values(this.radioList),
                    selected: (list => {
                        const obj = {};
                        Object.keys(list).map((item, index) => {
                            obj[list[item]] = item === this.radioActive;
                        });
                        return obj;
                    })(this.radioList)
                });
                this.setOptions('series', (() => {
                    const arr = [];
                    Object.values(this.radioList)
                        .map((item, index) => {
                            arr[this.radioList[this.radioActive] === item ? 'unshift' : 'push']({
                                name: item,
                                type: 'map',
                                geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                                data: this.getSeriesData(item)
                            });
                        });
                    return arr;
                })());
                return this.option;
            },
            getSeriesData(item) {
                return this.radioList[this.radioActive] === item ? JSON.features.map(item => {
                    return {
                        name: item.properties.name,
                        value: Math.ceil(Math.random() * 500),
                        obj: {
                            a: Math.ceil(Math.random() * 500),

                        }
                    };
                }) : [];
            },
            setOptions(objKey, objVal) {
                if (this.option[objKey] && typeof this.option[objKey] === 'object' && !Array.isArray(this.option[objKey])) {
                    this.option[objKey] = Object.assign(this.option[objKey], objVal);
                } else {
                    this.option[objKey] = objVal;
                }
                this.$set(this.option, objKey, this.option[objKey]);
            }
        }
        //调用

    }
</script>

<style scoped>
    .titleMap{
        height: 100%;
    }
    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 80%;
        height: 100%;
        text-align: center;
    }
</style>