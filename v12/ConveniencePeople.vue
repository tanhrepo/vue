<template>
    <div class="content rows">
<!--        左侧-->
        <div class="content-left cells" style="width: 25%">
<!--            服务数据-->
            <div class="sevice-data">
                <p class="p-title">服务数据</p>
                <table>
                    <tr>
                        <td>
                            <dl>
                                <dt><img src="../../assets/img/icon-servicetime.png" /></dt>
                                <dd>
                                    <p class="sevice-title"><span>1960</span>万</p>
                                    <p>服务总人次</p>
                                </dd>

                            </dl>
                        </td>
                        <td>
                            <dl>
                                <dt><img src="../../assets/img/icon-pahztime.png" /></dt>
                                <dd>
                                    <p class="sevice-title"><span>5263</span>次</p>
                                    <p>便民活动场次</p>
                                </dd>

                            </dl>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <dl>
                                <dt><img src="../../assets/img/icon-manufacturertime.png" /></dt>
                                <dd>
                                    <p class="sevice-title"><span>50</span>家</p>
                                    <p>服务商数</p>
                                </dd>

                            </dl>
                        </td>
                        <td>
                            <dl>
                                <dt>
<!--                                    <img src="../../assets/img/icon-culentservices.png" />-->
                                </dt>
                                <dd>
                                    <p class="sevice-title"><span>1052</span>人</p>
                                    <p>文化娱乐服务量</p>
                                </dd>

                            </dl>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <dl>
                                <dt><img src="../../assets/img/icon-projecttime.png" /></dt>
                                <dd>
                                    <p class="sevice-title"><span>50</span>个</p>
                                    <p>服务项目数</p>
                                </dd>

                            </dl>
                        </td>
                    </tr>
                </table>
            </div>
<!--            便民服务各栏目点击情况-->
            <div class="sevice-click">
                <p class="p-title">便民服务各栏目点击情况</p>
                <div id="s-click" style="width: 100%; height: 80%;"></div>
            </div>
<!--            文化娱乐服务-->
            <div class="sevice-culenter">
                <p class="p-title">文化娱乐服务</p>
                <div id="s-culenter" style="width: 100%; height: 60%;"></div>
            </div>
        </div>
<!--        中间-->
        <div class="content-middle cells" style="width: 50%">
            <div class="rows m-menus">
                <div class="cells">首屏</div>
                <div class="cells">示范点</div>
                <div class="cells">站点分布</div>
                <div class="cells">站点清单</div>
            </div>
            <div class="cp-content">

            </div>
        </div>
<!--        右侧-->
        <div class="content-right cells" style="width: 25%">
<!--            生活缴费-->
            <div class="life-cost">
                <p class="p-title">生活缴费</p>
                <div id="l-cost" style="width: 100%; height: 80%;"></div>
            </div>
<!--            保险金融及彩票服务-->
            <div class="sevice-lottery">
                <p class="p-title">保险金融及彩票服务</p>
               <div class="ins-financial" id="tab_bar">
                   <ul style="float: left;">
                       <li class="tab_li" id="tab1" @click="tabChange(1,1,'tab1_content')" style="color: #f4b58a;">保险<p class="tab_p" id="tab1_p" style="display: block;"></p></li>
                       <li class="tab_li" id="tab2" @click="tabChange(2,2,'tab1_content')">金融<p class="tab_p" id="tab2_p"></p></li>
                   </ul>
               </div>
                <div class="tab_css" id="tab1_content" style=" display: block"></div>
<!--                <div class="tab_css" id="tab2_content"></div>-->
                <a style="font-size: 0.8rem; color: #f4b58a; text-align: center; display: block; margin-bottom: 0.8rem; margin-top: 0.2rem;">彩票</a>
                <div id="s-lottery" style="width: 100%; height: 47%; box-sizing: border-box;"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: "ConveniencePeople",
        methods: {

            drawPie(idclick,idculenter,idcost,idins,idlottery) {
                // 便民服务各栏目点击情况图
                let sclick = echarts.init(document.getElementById(idclick));
                // 指定图表的配置项和数据
                sclick.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        icon: 'rect',
                        orient: 'horizontal', //设置为横向排列
                        itemWidth: 8,
                        itemHeight: 8,
                        bottom: 10,
                        data: ['求职招工', '移动充值', '快速查询', '预约挂号', '生活缴费'],
                        textStyle: {
                            color: '#afb8b3',
                            fontSize: 10
                        },
                    },
                    series: [{
                        name: '便民服务各栏目点击情况',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        startAngle: -40,
                        bottom: 30,
                        label: {
                            normal: {
                                formatter: '{c}%',
                                textStyle: {
                                    color: '#afb8b3'
                                },
                                rich: {
                                    value: {
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: '#afb8b3',
                                    }
                                },
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 10
                            }
                        },
                        labelLine: {
                            show: false,
                            length: 0
                        },
                        data: [{
                            value: 35,
                            name: '求职招工',
                            itemStyle: {
                                color: '#00875e'
                            }
                        },
                            {
                                value: 25,
                                name: '移动充值',
                                itemStyle: {
                                    color: '#53b1d3'
                                }
                            },
                            {
                                value: 20,
                                name: '快速查询',
                                itemStyle: {
                                    color: '#0073b6'
                                }
                            },
                            {
                                value: 10,
                                name: '预约挂号',
                                itemStyle: {
                                    color: '#7ad2a0'
                                }
                            },
                            {
                                value: 10,
                                name: '生活缴费',
                                itemStyle: {
                                    color: '#5c5cd6'
                                }
                            }]
                    }]

                });

                // 文化娱乐服务图
                let sculenter = echarts.init(document.getElementById(idculenter));
                let data = [
                    {
                        name: '看电视',
                        value: 52
                    },{
                        name: '听音乐',
                        value: 48
                    }]
                let seriesArr=[];
                let colors=[['#28352c', '#1e976c'],['#28352c', '#1e976c']]
                data.forEach(function(item, index){
                    seriesArr.push(
                        {
                            name: item.name,
                            type: 'pie',
                            clockWise: false,
                            radius: ['75%', '95%'],
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
                            center: [index * 40 + 30 +'%', '50%'],
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
                                            fontSize: '10',
                                            lineHeight: 14,
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
                sculenter.setOption({
                    series: seriesArr
                });

                //生活缴费图
                let lcost = echarts.init(document.getElementById(idcost));
                let option = {
                    title: {
                        text: '服务总项\n100',
                        x: 'center',
                        y: '28%',
                        textStyle: {
                            color: '#afb8b3',
                            lineHeight: 12,
                            fontSize: 10
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'horizontal', //设置为横向排列
                        icon: 'rect',
                        itemWidth: 10,
                        itemHeight: 10,
                        bottom: 10,
                        data: ['水费', '电费', '燃气费', '手机充值', '有限电视'],
                        textStyle:{
                            color: '#afb8b3'
                        },
                    },
                    series: [{
                        name: '生活缴费',
                        type: 'pie',
                        radius: ['50%', '75%'],
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        startAngle: -40,
                        bottom: 40,
                        label: {
                            normal: {
                                formatter: '{c}%',
                                textStyle:{
                                    color: '#afb8b3'
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
                            show: false,
                            length: 0
                        },
                        data: [{
                            value: 33,
                            name: '水费',
                            itemStyle: {
                                color: '#00875e'
                            }
                        },
                            {
                                value: 27,
                                name: '电费',
                                itemStyle: {
                                    color: '#f4b58a'
                                }
                            },
                            {
                                value: 4,
                                name: '燃气费',
                                itemStyle: {
                                    color: '#e16857'
                                }
                            },
                            {
                                value: 9,
                                name: '手机充值',
                                itemStyle: {
                                    color: '#a652aa'
                                }
                            },
                            {
                                value: 16,
                                name: '有限电视',
                                itemStyle: {
                                    color: '#53b1d3'
                                }
                            }]
                    }]

                };
                lcost.setOption(option);

                //保险图
                let ins = echarts.init(document.getElementById(idins));
                let option2 = {
                    textStyle: {
                        color: '#afb8b3'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['人寿险', '意外险', '重疾险', '医疗险', '养老保险'],
                        axisLabel: {
                            fontSize: 10
                        },
                        axisLine: {
                            lineStyle:{
                                color:'#3c4b43'
                            }
                        },
                        axisTick:{
                            show: false
                        }
                    },
                    grid:{
                        top:'20%',
                        bottom:'20%',
                        left:'12%',
                        right: '4%'
                    },
                    yAxis: {
                        type: 'value',
                        name: '单位（万）',
                        splitLine:{
                            show: false,
                        },
                        axisLine: {
                            lineStyle:{
                                color:'#3c4b43'
                            }
                        },
                        axisTick:{
                            show: false
                        }
                    },
                    series: [{
                        data: [{
                            value: 38,
                            name: '人寿险'
                            },
                            {
                                value: 22,
                                name: '意外险'
                            },
                            {
                                value: 32,
                                name: '重疾险'
                            },
                            {
                                value: 24,
                                name: '医疗险'
                            },
                            {
                                value: 38,
                                name: '养老保险'
                            }
                        ],
                        type: 'bar',
                        barWidth: '18%',
                        barCategoryGap: '0%',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'transparent'
                        },
                        itemStyle: {
                            color: '#409868'
                        }
                    }]
                };
                ins.setOption(option2);


                //彩票服务图
                let slottery = echarts.init(document.getElementById(idlottery));
                let legendData = ['服务人次', '服务量']; //图例
                let indicator = [{
                    text: '双色球',
                    max: 20,
                },
                    {
                        text: '超级\n大乐透',
                        max: 20
                    },
                    {
                        text: '福彩3D',
                        max: 20
                    },
                    {
                        text: '七星彩',
                        max: 20,
                        //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
                    },
                    {
                        text: '七乐彩',
                        max: 20
                    }
                ];
                let dataArr = [{
                    //服务量
                    value: [16, 17, 12, 11, 17],
                    name: legendData[1],
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#fff',
                            },
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    areaStyle: {
                        normal: { // 单项区域填充样式
                            color: {
                                type: 'linear',
                                x: 0, //右
                                y: 0, //下
                                x2: 1, //左
                                y2: 1, //上
                                colorStops: [{
                                    offset: 0,
                                    color: '#98846b'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(82,77,58,0.5)'
                                }, {
                                    offset: 1,
                                    color: '#98846b'
                                }],
                                globalCoord: false
                            },
                            opacity: 1 // 区域透明度
                        }
                    }
                },
                    {
                        //服务人次
                        value: [10, 13, 11, 8, 13],
                        name: legendData[0],
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#74dbae',
                                    // shadowColor: '#4BFFFC',
                                    // shadowBlur: 10,
                                },
                                shadowColor: '#74dbae',
                                shadowBlur: 10,
                            },
                        },
                        areaStyle: {
                            normal: { // 单项区域填充样式
                                color: {
                                    type: 'linear',
                                    x: 0, //右
                                    y: 0, //下
                                    x2: 1, //左
                                    y2: 1, //上
                                    colorStops: [{
                                        offset: 0,
                                        color: '#74dbae'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(80,135,106,0.5)'
                                    }, {
                                        offset: 1,
                                        color: '#74dbae'
                                    }],
                                    globalCoord: false
                                },
                                opacity: 1 // 区域透明度
                            }
                        }
                    }
                ];
                let colorArr = ['#98846b', '#74dbae']; //颜色
                let colorBack = ['#2f6064', '#534b3e'];
                let option3 = {
                    color: colorArr,
                    legend: {
                        orient:'vertical',
                        icon: 'rect', //图例形状
                        data: legendData,
                        bottom:'15%',
                        right:'6%',
                        itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
                        itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
                        itemGap: 8, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
                        textStyle: {
                            fontSize: 10,
                            color: '#999',
                        },
                    },
                    radar: {
                        nameGap: 5,
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#999',
                                fontSize: 10
                            },
                        },
                        center: ['50%', '45%'],
                        // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
                        radius: '70%',
                        // 圆的半径，数组的第一项是内半径，第二项是外半径。
                        indicator: indicator,

                        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                            show: true,
                            areaStyle: { // 分隔区域的样式设置。
                                color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                            }
                        },
                        axisLine: { //指向外圈文本的分隔线样式
                            show: true,
                            lineStyle: {
                                color: '#666'
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#666', // 分隔线颜色
                                width: 1, // 分隔线线宽
                            }
                        },
                        // axisLabel: {
                        // 	//怎么只显示一个坐标轴上的数据
                        // 	show: true
                        // }
                    },

                    series: [{
                        type: 'radar',
                        symbolSize: 3, //标记的大小
                        // symbol: 'angle',
                        data: dataArr
                    }]
                };
                slottery.setOption(option3);
                //自适应大小
                window.onresize = function () {
                    sclick.resize();
                    sculenter.resize();
                    lcost.resize();
                    ins.resize();
                    slottery.resize();
                }

            },

            tabChange (v,idfinancial,tab_content) {


                // let myclick = function(v) {
                let llis = document.getElementsByClassName('tab_li');
                for(let i = 0; i < llis.length; i++) {
                    let lli = llis[i];
                    if(lli == document.getElementById("tab" + v)) {
                        lli.style.color = "#f4b58a";
                    } else {
                        lli.style.color = "#afb8b3";
                    }
                }
                let pps = document.getElementsByClassName('tab_p');
                for(let i = 0; i < pps.length; i++){
                    let pp = pps[i];
                    if(pp == document.getElementById("tab" + v + "_p")){
                        pp.style.display = "block";
                    }
                    else{
                        pp.style.display = "none";
                    }
                }
                    if(idfinancial == 1) {
                        //保险图
                        let ins = echarts.init(document.getElementById(tab_content));
                        let option2 = {
                            textStyle: {
                                color: '#afb8b3'
                            },
                            xAxis: {
                                type: 'category',
                                data: ['人寿险', '意外险', '重疾险', '医疗险', '养老保险'],
                                axisLabel: {
                                    fontSize: 10
                                },
                                axisLine: {
                                    lineStyle:{
                                        color:'#3c4b43'
                                    }
                                },
                                axisTick:{
                                    show: false
                                }
                            },
                            grid:{
                                top:'20%',
                                bottom:'20%',
                                left:'12%',
                                right: '4%'
                            },
                            yAxis: {
                                type: 'value',
                                name: '单位（万）',
                                splitLine:{
                                    show: false,
                                },
                                axisLine: {
                                    lineStyle:{
                                        color:'#3c4b43'
                                    }
                                },
                                axisTick:{
                                    show: false
                                }
                            },
                            series: [{
                                data: [{
                                    value: 38,
                                    name: '人寿险'
                                },
                                    {
                                        value: 22,
                                        name: '意外险'
                                    },
                                    {
                                        value: 32,
                                        name: '重疾险'
                                    },
                                    {
                                        value: 24,
                                        name: '医疗险'
                                    },
                                    {
                                        value: 38,
                                        name: '养老保险'
                                    }
                                ],
                                type: 'bar',
                                barWidth: '18%',
                                barCategoryGap: '0%',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'transparent'
                                },
                                itemStyle: {
                                    color: '#409868'
                                }
                            }]
                        };
                        ins.setOption(option2);
                    } else {
                        //金融图
                        let financial = echarts.init(document.getElementById(tab_content));
                        let option4 = {
                            textStyle: {
                                color: '#afb8b3'
                            },
                            xAxis: {
                                type: 'category',
                                data: ['银行存款', '理财产品', '基金', '信托', '股票'],
                                axisLabel: {
                                    fontSize: 10
                                },
                                axisLine: {
                                    lineStyle:{
                                        color:'#3c4b43'
                                    }
                                },
                                axisTick:{
                                    show: false
                                }
                            },
                            grid:{
                                top:'20%',
                                bottom:'20%',
                                left:'12%',
                                right: '4%'
                            },
                            yAxis: {
                                type: 'value',
                                name: '单位（万）',
                                splitLine:{
                                    show: false,
                                },
                                axisLine: {
                                    lineStyle:{
                                        color:'#3c4b43'
                                    }
                                },
                                axisTick:{
                                    show: false
                                }
                            },
                            series: [{
                                data: [{
                                    value: 38,
                                    name: '银行存款'
                                },
                                    {
                                        value: 22,
                                        name: '理财产品'
                                    },
                                    {
                                        value: 32,
                                        name: '基金'
                                    },
                                    {
                                        value: 24,
                                        name: '信托'
                                    },
                                    {
                                        value: 38,
                                        name: '股票'
                                    }
                                ],
                                type: 'bar',
                                barWidth: '18%',
                                barCategoryGap: '0%',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'transparent'
                                },
                                itemStyle: {
                                    color: '#409868'
                                }
                            }]
                        };
                        financial.setOption(option4);
                }
                // }
            },


        },
        //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('s-click','s-culenter','l-cost','tab1_content','s-lottery');
                // this.tabChange()
            });
        }
    }



</script>

<style scoped>
    /*左侧*/
    .content .content-left,.home-body .content .content-right{
        padding: 0 1rem;
        box-sizing: border-box;
        color: #afb8b3;
    }
    .content-left>div, .content-right>div{
        width:100%;
        background:#1f2c25 ;
        margin: 1rem 0;
        border-radius: .4rem;
    }
    .sevice-data{
        height: 28vh;
        letter-spacing: 0.1rem;
    }
    .sevice-data table{
        width: 100%;
        height: 85%;
        font-size: 0.8rem;
        padding: 0.6rem 1.8rem;
    }
    .sevice-data table tr{
        height: 33.3%;
    }
    .sevice-data table td{
        width: 50%;
    }
    .sevice-data table dt{
        float: left;
        margin-right: 1vw;
    }
    .sevice-data table dt img{
        width: 2.5vw;
    }
    .sevice-title{
        color: #f4b58a;
        font-size: 0.7rem;
    }
    .sevice-title span{
        font-size: 1rem;
    }
    .sevice-click{
        height: 27vh;
    }
    .sevice-culenter{
        height: 21vh;
    }
    /*中间*/
    .m-menus{
        color: #fff;
        font-size: .9rem;
        margin: -1.2vh auto;
        width: 40%;
        text-align: center;
    }
    .m-menus .cells{
        width: 25%;
    }
    .cp-content{
        width:100%;
        background:#1f2c25 ;
        margin: 1rem 0;
        border-radius: .4rem;
        height: 80vh;
    }
    /*右侧*/
    .life-cost{
        height: 26vh;
    }
    .sevice-lottery{
        height: 52vh;
    }
    .ins-financial{
        position: absolute;
        z-index: 2;
        cursor: pointer;
    }
    #tab_bar {
        width: 100%;
        height: 2rem;
        padding: 0rem 8rem;
    }
    #tab_bar ul {
        padding: 0rem;
        margin: 0rem;
        height: 2rem;
        text-align: center;
    }
    #tab_bar li {
        font-size: 0.8rem;
        color: #afb8b3;
        list-style-type: none;
        float: left;
        width: 3.5rem;
        height: 2rem;
    }
    #tab_bar p{
        width: 1.2rem;
        border-top: 0.1rem solid #f4b58a;
        margin: 0.1rem auto;
        display: none;
    }
    .tab_css{
        margin-top: 0.5rem;
        width: 100%;
        height: 40%;
        display: none;
    }
</style>