<template>
    <div class="cells" style="margin-right: 2%;position: relative">
        <p class="p-title" style="position: relative">扶贫攻坚 益农社在行动</p>
        <div id="" style="width: 100%;height:80% ;position:absolute">
            <swiper  :options="swiperOption" ref="mySwiper" class="swiper ">
                <!-- slides -->
                <swiper-slide class="swiper-slide"><img src="../../assets/img/bgbggb1.png" alt=""><p class="cname">xx活动现场</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/bgbggb1.png" alt=""><p class="cname">xx活动现场</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/bgbggb1.png" alt=""><p class="cname">xx活动现场</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/bgbggb1.png" alt=""><p class="cname">xx活动现场</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/bgbggb1.png" alt=""><p class="cname">xx活动现场</p></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/bgbggb1.png" alt=""><p class="cname">xx活动现场</p></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    export default {
        name: "UserVisit",
        data() {
            return {
                slideCont: [1, 2, 3,4,5,6],
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
    .swiper-slide{
        height:11vh;
        margin-right: 1rem;
    } /* 随意指定一个height值即可 */
    .swiper-slide-active { height:auto}
</style>