<template>
    <MasterLayout>
        
            <div class="container mt-3">
                <div class="items">

                    <div class="item" v-for="(item,index) in products" :key="index" >
                        <img :src="item.images[0]" alt="" class="itemImage">
                       <div class="cardInfo">
                        <h5 class="itemName">
                            {{item.title }}
                        </h5>

                        <div class="des">
                            <p>{{item.description.substr(0,40) }}......</p>
                        </div>
                        <div class="PriceAndAdd">
                            <div class="price">
                                $ {{item.price}}
                            </div>
                            <div class="addToCard">
                                <button @click="addToCart(item)">Add To Cart</button>
                            </div>
                        </div>
                       </div>
                    </div>

                     

                </div>
            </div>
      
    </MasterLayout>
</template>
    
<script>
import MasterLayout from "../Layout/MasterLayout.vue";
import axios from "axios";
export default {
    components: { MasterLayout },
    data() {
        return {
            products: [],
        }
    },
    created() {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                this.products = res.data.products;
                console.log(this.products);

            })

    },
    methods : {
        addToCart(item){
            
            var cart = this.$root.cart;
            var isInCart = cart.find(res =>{
                return res.id == item.id;
            });
            if(isInCart){
                isInCart.qty++;
            }else{
                cart.push({...item,qty:1});
                console.log(cart);
            }
        }
    }

}
</script>
    
<style>
.itemImage {
    width: 100%;
    height: 120px;

}
.cardInfo{
    text-align: center;
    padding: 10px;
}

.item {
    width: 170px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all .3s ease;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.item:hover{
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.des p {
    font-size: 11px;
    opacity: .8;
    text-align: center;
    
}

.item .itemName {
    font-size: 13px;
    font-weight: 600;
    margin: 10px 0px;
}

.PriceAndAdd {
    margin-top: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.addToCard button {
    font-size: 10px;
    padding: 5px 8px;
    outline: 0px;
    border: 1px solid #333;
    border-radius: 20px;
    text-transform: uppercase;
    transition: all .3s ease;
}
.addToCard button:hover
{
    background-color: #333;
    color: white;
}

.price {
    font-size: 12px;
}

.items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 10px;
    
}
.item{
    margin: 10px 5px;
}


@media only screen and (max-width: 600px) {
    .items {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 10px;
    
}
.item{
    margin: 10px 3px;
}
}
</style>