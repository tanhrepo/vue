<template>
    <div class="l-model-t">
        <p class="p-title">就业扶贫情况</p>
        <div class="p-table">
            <table cellspacing="10" class="" >
                <tbody>
                <tr>
                    <td>岗位推荐数 {{num1}}</td>
                    <td>意见就业数 {{num2}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EmploymentSituation",
        data(){
             return{
                 num1:"1000",
                 num2:"2222",
             }
        },
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
    }

</style>