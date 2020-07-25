<template>
    <div class="l-model-t">
        <p class="p-title">热卖区县排行</p>
        <div class="p-table">
            <table cellspacing="10" class="" >
                <tbody>
                <tr>
                    <td class="top1">1 渝北区</td>
                    <td class="top2">2 南岸区</td>
                    <td class="top3">3 梁平区</td>
                    <td>4 奉节县</td>
                </tr>
                <tr>
                    <td>5 涪陵区</td>
                    <td>6 渝北区</td>
                    <td>7 渝北区</td>
                    <td>8 渝北区</td>
                </tr>
                <tr>
                    <td>9 渝北区</td>
                    <td>10 渝北区</td>
                    <td>11 渝北区</td>
                    <td>12 渝北区</td>
                </tr>
                <tr>
                    <td>13 渝北区</td>
                    <td>14 渝北区</td>
                    <td>15 渝北区</td>
                    <td>16 渝北区</td>
                </tr>
                <tr>
                    <td>17 渝北区</td>
                    <td>18 渝北区</td>
                    <td>19 渝北区</td>
                    <td>20 渝北区</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "District"
    }
</script>

<style scoped>
    .p-table{
        width: 100%;
        height: 19vh;
        overflow: auto;
        font-size: .8rem;
        color: #afb8b3;
        line-height: 2rem;
        display: block;
        /*margin-left: .7rem;*/
        text-align: center;
    }
    .p-table table{
        width: 100%;
        border-collapse:separate;
    }
    .p-table tr{
        overflow:hidden;
        white-space:nowrap;
    }
    .p-table table tr td{
        padding: .3rem;
        background: #273a2f;
        border-radius:.5rem;
    }
    .top1{
        color: #f8da15;
    }
    .top2{
        color: #269fce;
    }
    .top3{
        color: #6755a8;
    }
</style>