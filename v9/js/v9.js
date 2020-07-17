const app1 = new Vue({
    el:'#app1',
    data:{
        books:[
            {
                id:1,
                name:'算法',
                data: '2016.01',
                price:85,
                count:1,
            },
            {
                id:2,
                name:'数据结构',
                data: '2017.03',
                price:45,
                count:1,
            },
            {
                id:3,
                name:'天下',
                data: '2017.08',
                price:92,
                count:1,
            },
            {
                id:4,
                name:'烽烟起',
                data: '2016.01',
                price:95,
                count:1,
            },
            {
                id:5,
                name:'花火',
                data: '2019.01',
                price:66,
                count:1,
            },
        ],
    },
    filters:{
        showPrice(price){
            return '¥' + price.toFixed(2)
        }
    },
    methods:{
        increment(index){
            console.log('increment',index);
            this.books[index].count++;

        },
        decrement(index){
            console.log('decrement',index);
            this.books[index].count--;
        },
        removeHandle(index){
            console.log('移除',index);
            this.books.splice(index,1);
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0
            for (let i = 0;i<this.books.length;i++){
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice
        }
    }
})
