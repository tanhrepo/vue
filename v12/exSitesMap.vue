<template>
    <div style="position: relative;">
        <div class="echarts-controller">
            <span class="enlarge shrink" @click="reduce"></span>
            <div class="controller-box">
                <div class="controller" :style="'height:'+(multiple-100)+'%' "></div>
                <div class="controller-btn" :style="'top:'+(multiple-100)+'%' "></div>
            </div>
            <span class="enlarge" @click="add"></span>
            <div>{{multiple.toFixed(0)+'%'}}</div>
            <div class="side"></div>
        </div>
        <div class="echarts-map" id="horizontalChart" ref="horizontalChart"></div>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import JSON from './json/chongqing.json';
    import symbolJson from './json/symbol.json';
    export default {
        name: "exSitesMap",
        data() {
            return {
                multiple:100,
                echartObj: null,
                radioList: {
                    A: '',
                    B: '',
                    C: '',
                    D: '',
                    E: ''
                },
                radioActive: 'A',
                option: {
                    tooltip: {
                        borderColor:'#2b3625',
                        borderWidth:1,
                        backgroundColor:'#1e2b24',
                        formatter: function (params, ticket, callback) {
                            var _html = '<div style="color:#a6f7e1;padding:.5rem"><p style="text-align: center;font-size: 1rem;">'+params.name+'</p>'
                            _html += '<p>标准站：'+params.data.sites.value1+'</p>';
                            _html +='<p>简易站：'+params.data.sites.value2+'</p>';
                            _html +='<p>专业站：'+params.data.sites.value3+'</p>';
                            _html +='<p>中心站：'+params.data.sites.value4+'</p></div>';
                            return _html
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 451,
                        type:'piecewise',
                        showLabel:true,
                        realtime: false,
                        calculable: true,
                        right:'5%',
                        bottom:0,
                        itemWidth:'15',
                        textStyle:{
                            color:'#fff'
                        },
                        splitNumber:4,
                        inRange: {
                            color: ['#7bd183','#aa9e42','#51abce','#90466b'],
                            colorAlpha:.4,
                        },
                        pieces: [
                            {min: 450,},
                            {min: 0, max: 450,},
                            {min: 0, max: 300,},
                            {min: 0, max: 150,},
                        ],
                        formatter: function (value, value2) {
                            if(value === 450){
                                return '450以上'
                            }else{
                                return  value.toFixed(0) + '-' + value2.toFixed(0); // 范围标签显示内容。
                            }

                        }
                    },
                    geo: {
                        map: '重庆',
                        label: {
                            normal: {
                                show: true,
                                color: '#fff',
                                borderRadius:6
                            },
                            emphasis: {
                                show: true,
                                color: '#58b8e0'
                            }
                        },
                        scaleLimit:{
                            min:1,
                            max:2
                        },
                        roam: true,
                        zoom:(this.multiple/100),
                        itemStyle: {
                            normal: {
                                areaColor: '#58b8e020',
                                borderColor: '#58b8e0',
                                borderWidth: 1,
                            },
                            emphasis: {
                                areaColor: '#58b8e080' // hover效果
                            }
                        },
                        left: '10%',
                        right: '10%',
                        top: '15%',
                        bottom: '5%'
                    },
                    series: [{
                        name: '进村入户大数据',
                        type: 'map',
                        symbolSize: 3,
                        markPoint:{
                            symbol:'circle',
                            symbolSize:'4',
                            itemStyle:{
                                color:'#fff600'
                            },
                            data:symbolJson
                        },
                        geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                        data: [
                            {
                                name: '万州',
                                value: 21,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '渝中',
                                value: 343,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '市区',
                                value: 324,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '北碚',
                                value: 432,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '綦江',
                                value: 423,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '大足',
                                value:123,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '渝北',
                                value: 452,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '巴南',
                                value: 234,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '黔江',
                                value: 422,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '长寿',
                                value: 234,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '江津',
                                value: 234,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '合川',
                                value: 23,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '永川',
                                value:534,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '南川',
                                value: 321,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '潼南',
                                value: 234,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '铜梁',
                                value: 323,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            },
                            {
                                name: '荣昌',
                                value: 167,
                                sites:{
                                    value1:'25',
                                    value2:'114',
                                    value3:'25',
                                    value4:'8',
                                }
                            }
                        ]
                    }]

                }
            }
        },
        mounted() {
            this.initCharts();
            var _this = this;
            this.echartObj.on("georoam", function (param) {
                _this.multiple = (param.zoom * 100 >100)?(param.zoom * 180):100
                console.log(param.zoom)
            });
            window.addEventListener('resize', () => {
                if (this.echartObj && this.echartObj.resize) {
                    this.echartObj.resize();
                }
            });
        },
        methods: {
            initCharts(){
                this.echartObj = echarts.init(this.$refs.horizontalChart);
                echarts.registerMap('重庆', JSON);
                this.option.geo.zoom = this.multiple/100
                this.echartObj.setOption(this.option);

            },
            reduce(){
                if(this.multiple > 100){
                    this.multiple -= 10
                    if (this.echartObj) {
                        this.initCharts();
                    }
                }else{
                    this.multiple = 100
                }
            },
            add(){
                if(this.multiple<200){
                    this.multiple += 10
                    if (this.echartObj) {
                        this.initCharts();
                    }
                }else{
                    this.multiple = 200
                }
            }
        }
    }
</script>

<style scoped>
    .echarts-map{
        width: 100%;
        margin: 0 auto;
        height: 52.6vh;
    }
    .echarts-controller{
        width: 2rem;
        height: 12rem;
        border: 1px solid #386740;
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: .6rem;
        text-align: center;
        color: #63e9bc;
        background: #1c372560;
        z-index: 1000;
    }
    .echarts-controller:before{
        width: 4px;
        height: 4px;
        border-top: 1px solid #dec466;
        border-left: 1px solid #dec466;
        content: '';
        position: absolute;
        left: -1px;
        top:-1px;
    }
    .echarts-controller:after{
        width: 4px;
        height: 4px;
        border-top: 1px solid #dec466;
        border-right: 1px solid #dec466;
        content: '';
        position: absolute;
        top: -1px;
        right:-1px;
    }
    .side{
        position: relative;
    }
    .side:before{
        width: 4px;
        height: 4px;
        border-bottom: 1px solid #dec466;
        border-left: 1px solid #dec466;
        content: '';
        position: absolute;
        left: -1px;
        bottom:-2px;
    }
    .side:after{
        width: 4px;
        height: 4px;
        border-bottom: 1px solid #dec466;
        border-right: 1px solid #dec466;
        content: '';
        position: absolute;
        bottom: -2px;
        right:-1px;
    }
    .controller-box{
        width: 4px;
        height: 8rem;
        background: #314537;
        border-radius: 4px;
        margin: .3rem auto;
        margin-top: .1rem;
        position: relative;
    }
    .controller-box .controller{
        width: 4px;
        height: 80%;
        background: #57e0b5;
        border-radius: 4px;
        margin: .5rem auto;

    }
    .controller-box .controller-btn{
        width: 8px;
        height: 8px;
        background: #57e0b5;
        border-radius: 50%;
        position: absolute;
        margin-top: -4px;
        margin-left: -2px;
        top: 80%;
        left:0;
        box-shadow: 0 0 0 #999;
    }
    .enlarge{
        width: 14px;
        height: 14px;
        display: block;
        background: url("../../assets/fangda.png") no-repeat;
        background-size: 12px 12px;
        margin: .2rem auto;
        cursor: pointer;
    }
    .shrink{
        background: url("../../assets/suoxiao.png") no-repeat;
        background-size: 13px 13px;
    }


</style>