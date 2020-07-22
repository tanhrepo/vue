<template>
    <div>
        <div class="content rows">
            <!--        左边-->
            <div class="content-left cells" style="width: 33.3%">
                <!--            培训人数统计-->
                <training-num></training-num>
                <!--            培训对象区域分布-->
                <regional-distribution></regional-distribution>
            </div>
            <!--        中间-->
            <div class="content-middle cells" style="width: 33.4%">
                <div class="m-comtent">
                    <!--                    培训课程-->
                    <training-courses></training-courses>
                    <!--                    培训课程时长-->
                    <courses-duration></courses-duration>
                </div>
            </div>
            <!--        右边-->
            <div class="content-right cells" style="width: 33.3%">
                <!--            培训对象类型-->
                <object-type></object-type>
                <!--            培训对象年龄分布-->
                <age-distribution></age-distribution>
                <!--            平台服务-->
                <!--            <platform-services></platform-services>-->
            </div>
        </div>
        <div class="content rows">
            <!--        下面-->
            <div class="content-bottom" style="width: 100%">
                <!--            精选课程-->
                <featured-courses></featured-courses>
            </div>
        </div>
    </div>
</template>

<script>
    import TrainingNum from  './TrainingNum'
    import AgeDistribution from  './AgeDistribution'
    import RegionalDistribution from './RegionalDistribution'
    import TrainingCourses from './TrainingCourses'
    import CoursesDuration from './CoursesDuration'
    import ObjectType from './ObjectType'
    import FeaturedCourses from "./FeaturedCourses";
    export default {

        name: "TrainingServices",

        components: {
            FeaturedCourses,
            ObjectType,
            CoursesDuration,
            TrainingCourses,
            RegionalDistribution,
            TrainingNum,
            AgeDistribution,
        },
    }

</script>
<style>
    .p-title{
        color: #00ec99;
        font-size: .9rem;
        padding: .5rem .8rem;
    }
</style>
<style scoped>
    .home-body .menus{
        padding: 0 1rem;
    }
    .home-body .content .content-left,.home-body .content .content-right{
        margin-top: 1.5vh;
        padding: 0 1rem;
        box-sizing: border-box;
        /*opacity:0.5;*/
    }
    .home-body .content .content-left>div,.home-body .content .content-right>div{
        width:100%;
        height: 25.5vh;
        /*background:#1f2c25;*/
        background:rgba(31,44,37,0.5);
        margin: 1rem 0;
        border-radius: .4rem;
    }
    .home-body .content .content-middle{
        margin-top: 1.5vh;
        padding: 0 1rem;
        box-sizing: border-box;
    }
    .home-body .content .content-middle>div{
        width:100%;
        height: 25.5vh;
        /*background:#1f2c25 ;*/
        background:rgba(31,44,37,0.5);
        margin: 1rem 0;
        border-radius: .4rem;
    }
    .home-body .content .content-bottom{
        margin-top: -2vh;
        padding: 0 1rem;
        box-sizing: border-box;
    }
    .home-body .content .content-bottom>div{
        width:100%;
        height: 25.5vh;
        /*background:#1f2c25 ;*/
        background:rgba(31,44,37,0.5);
        margin: 1rem 0;
        border-radius: .4rem;
    }
    .m-menus{
        color: #fff;
        font-size: .9rem;
        margin: 0 auto;
        width: 40%;
        text-align: center;
    }
    .m-menus .cells{
        width: 25%;
    }


    .m-comtent .cells{
        width:100% ;
        height: 25.5vh;
        /*background: #1f2c25;*/
        background:rgba(31,44,37,0.5);
        margin: 1rem 0;
        border-radius: .4rem;
    }
</style>