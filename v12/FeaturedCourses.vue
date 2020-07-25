<template>
    <div class="l-model-b" style="position: relative">
        <p class="p-title" style="position: relative">精选课程</p>
        <div id="" style="width: 100%;height:80% ;position:absolute">
            <swiper  :options="swiperOption" ref="mySwiper" class="swiper ">
                <!-- slides -->
                <swiper-slide class="swiper-slide"><img src="../../assets/img/img841.png" alt=""><p class="cname">果树与果树识别-桃</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/img842.png" alt=""><p class="cname">果树与果树识别-桃</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/img843.png" alt=""><p class="cname">果树与果树识别-桃</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/img844.png" alt=""><p class="cname">果树与果树识别-桃</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/img845.png" alt=""><p class="cname">果树与果树识别-桃</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/img846.png" alt=""><p class="cname">果树与果树识别-桃</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/img847.png" alt=""><p class="cname">果树与果树识别-桃</p></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    export default {
        name: 'FeaturedCourses',
        data() {
            return {
                slideCont: [1, 2, 3,4,5,6,7],
                swiperOption: {
                    // autoplay:true ,
                    autoplay: {
                            delay: 0,
                            stopOnLastSlide: false,
                            disableOnInteraction: true,
                            },
                    speed:3000,
                    loop:true,
                    freeMode:true,
                    slidesPerView:5,
                    slidesPerGroup:1,

                }
            };
        },
        components: {
            swiper,
            swiperSlide,
        },

    }
</script>

<style scoped>
    >>>.swiper-container-free-mode>.swiper-wrapper {
    -webkit-transition-timing-function: linear; /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    margin: 0 auto;
}
.cname{
    color: #afb8b3;
    font-size: .9rem;
    text-align: center;
}
.swiper-slide{height:11vh} /* 随意指定一个height值即可 */
.swiper-slide-active { height:auto}
</style>