<template>
    <div class="content rows">
        <div class="content-left cells" style="width: 34%">
            <div class="left-box">
                <div class="cont-top">
                    <div class="fx-cont cont-l" >
                       <img src="../../assets/img/bracket-left.png">
                    </div>
                    <div class="fx-cont cont-m">
                        <p class="p-number">8596</p>
                        <p class="p-cont">累计活动总场次</p>
                    </div>
                    <div class="fx-cont cont-r" >
                        <img src="../../assets/img/bracket-right.png">
                    </div>
                </div>
                <div class="cont-bt">
                    <table>
						
                        <tr>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-gyfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">公益服务</p>
                                    </dd>
                                </dl>
                            </td>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-dsfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">电商服务</p>
                                    </dd>
                                </dl>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-bmfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">便民服务</p>
                                    </dd>
                                </dl>

                            </td>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-pxfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">培训服务</p>
                                    </dd>
                                </dl>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="left-box">
                <div class="cont-top">
                    <div class="fx-cont cont-l" >
                        <img src="../../assets/img/bracket-left.png">
                    </div>
                    <div class="fx-cont cont-m">
                        <p class="p-number">8596</p>
                        <p class="p-cont">累计活动总人数</p>
                    </div>
                    <div class="fx-cont cont-r" >
                        <img src="../../assets/img/bracket-right.png">
                    </div>
                </div>
                <div class="cont-bt">
                    <table>
                        <tr>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-gyfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">公益服务</p>
                                    </dd>
                                </dl>
                            </td>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-dsfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">电商服务</p>
                                    </dd>
                                </dl>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-bmfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">便民服务</p>
                                    </dd>
                                </dl>

                            </td>
                            <td>
                                <dl>
                                    <dt><img src="../../assets/img/icon-pxfw.png"/></dt>
                                    <dd>
                                        <p class="p-number">4234</p>
                                        <p class="p-cont">培训服务</p>
                                    </dd>
                                </dl>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="content-right cells" style="width: 66%">
            <div class="right-box">
                <div id="fx-tab">
                    <div id="tab-list">
                        <h3 @click="changeTab(1)" :class="[list == 1?'active':null]">公益服务<span></span></h3>
                        <h3 @click="changeTab(2)" :class="[list == 2?'active':null]">便民服务<span></span></h3>
                        <h3 @click="changeTab(3)" :class="[list == 3?'active':null]">培训服务<span></span></h3>
                        <h3 @click="changeTab(4)" :class="[list == 4?'active':null]">电商服务<span></span></h3>
                    </div>
                    <div id="tab-cont">
                        <div class="cont-box content ">
                            <ul>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                                <li>
                                    <img src="../../assets/img/activity1.png"/>
                                    <p>XX活动现场</p>
                                </li>
                            </ul>
                        </div>
                        <!--<template v-if="aa == 1">
                            <div class="cont-box content ">
                                <ul>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <template v-else-if="aa == 2">
                            <div class="cont-box  ">
                                <ul>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>1111活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <template v-else-if="aa == 3">
                            <div class="cont-box  ">
                                <ul>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <template v-else-if="aa == 4">
                            <div class="cont-box  ">
                                <ul>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                    <li>
                                        <img src="../../assets/img/activity1.png"/>
                                        <p>XX活动现场</p>
                                    </li>
                                </ul>
                            </div>
                        </template>-->

                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Activity",
        data() {
            return {
                list: 1
            }
        },
        methods: {
            changeTab(num) {
                this.list = num;
            }
        }
    }


</script>

<style scoped>
    .rows > .cells {
        flex: 0 0 auto;
        float: left;
    }

    .content .content-left {
        padding: 1rem 1rem;
        box-sizing: border-box;
    }

    .content .content-right {
        padding: 1rem 1rem;
        box-sizing: border-box;
    }

    .content .content-left > div {
        width: 100%;
        height: 38vh;
        background: #1f2c25;
        margin: 1rem 0;
        border-radius: .4rem;
    }

    .content-right .right-box {
        width: 100%;
        height: 76vh;
        background: #1f2c25;
        margin: 1rem 0;
        border-radius: .4rem;
    }

    .cont-top {
        margin: 0 auto;
        text-align: center;
        padding-top: 1rem;
        /*width: 12vw;*/


    }
    .cont-top .cont-m{
        padding: 0rem 0.1rem 0rem 0.4rem;
    }
        .cont-top .fx-cont{
            display: inline-block;
            vertical-align: middle;
        }
    .cont-top .fx-cont img{
        width: 3vw;


    }

    .cont-top .p-number {
        color: #f4b58a;
        font-size: 2.4rem;
        font-weight: bolder;
    }

    .cont-top .p-cont {
        color: #afb8b3;
        font-size: 1.2rem;
    }

    .cont-bt .p-number {
        color: #f4b58a;
        font-size: 1.2rem;
        font-weight: normal;
    }

    .cont-bt .p-cont {
        color: #afb8b3;
        font-size: 0.6rem;
    }

    .cont-bt table {
        width: 100%;
        padding: 0rem 2rem
    }

    .cont-bt table tr td {
        width: 50%;
        text-align: center;
    }

    .cont-bt table tr td dl {
        background: #1e3228;
        margin: 0.5rem;
        padding: 0.5rem;
    }

    .cont-bt table tr td dl dt {
        display: inline-block;
        padding-right: 2.5rem;
        vertical-align: middle;
    }

    .cont-bt table tr td dl dt img {
        height: 3vh;
        vertical-align: middle;
    }

    .cont-bt table tr td dl dd {
        display: inline-block;
        vertical-align: middle;
    }

    .right-box {
        padding: 0.5rem 1.5rem;
    }

    .right-box #fx-tab #tab-list h3 {
        font-size: 0.8rem;
        color: #afb8b3;
        display: inline-block;
        margin-right: 5rem;
        cursor: pointer;


    }

    .right-box #fx-tab #tab-list h3:hover {
        color: #f4b58a;
    }

    .right-box #fx-tab #tab-list h3:hover span {
        width: 2.4vw;
        display: block;
        margin: 0 0.5vw;


        border-bottom: 2px solid #f4b58a;
    }

    .right-box #fx-tab #tab-list .active {
        color: #f4b58a;

    }

    .right-box #fx-tab #tab-list .active span {
        width: 2.4vw;
        display: block;
        margin: 0 0.5vw;

        border-bottom: 2px solid #f4b58a;
    }

    #tab-cont ul li {
        list-style: none;
        text-decoration: none;
        width: 11vw;
        margin-right: 1rem;
        display: inline-block;
        margin-bottom: 2rem;
    }

    #tab-cont ul li img {
        height: 11vh;
        width: 11vw;
    }

    #tab-cont {
        margin-top: 1rem;
    }

    #tab-cont ul li p {
        color: #afb8b3;
        font-size: 0.8rem;
        margin: 0 auto;
        padding: 0;
        text-align: center;
    }
</style>