<template>
    <div class="cell" style="position: relative">
        <p class="p-title" style="position: relative">培训人数统计</p>
        <div class="content-left" style="width: 100%;height:80% ;position:relative">
            <div class="div1" style="width: 50%">
                <p class="p-number">168900</p>
                <p class="p-name">累计培训人次</p>
            </div>
            <div class="div2" style="width: 50%">
                <div class="div3">
                    <p class="p-number">2345</p>
                    <p class="p-name">当月培训总人次</p>
                </div>
                <div class="div3">
                    <p class="p-number">3456</p>
                    <p class="p-name">上月培训总人次</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TrainingNum",

    }
</script>

<style scoped>
#people{
    /*background-color: #00ec99;*/
}
.content-left{
    display:flex;
    /*padding: 0 1rem;*/
    box-sizing: border-box;
}
.div1{
    height: 19vh;
    background:#1f2c25;
    margin: 0 1vw 0 3vw;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.div2{
    height: 19vh;
}
.div3{
    height: 8.5vh;
    background:#1f2c25;
    margin: 0 3vw 2vh 0;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.div1>.p-number {
    color: #f4b58a;
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
}
.div1>.p-name{
    color: #afb8b3;
    font-size: 1rem;
    text-align: center;
}
.div3>.p-number {
    color: #f4b58a;
    font-size: 1.2rem;
    font-weight: bolder;
    text-align: center;
}
.div3>.p-name{
    color: #afb8b3;
    font-size: .9rem;
    text-align: center;
}
</style>