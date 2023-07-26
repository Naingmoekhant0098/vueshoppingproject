<template>
<MasterLayout>
    <div class="container-fluid main-contain">
       <div class="container">
        <div class="row">
            <div class="col-md-5" style="display: flex;flex-direction: column; align-items: center;justify-content: center;">
                    <div class="content">
                        <h1>Every Purchase will be made with pleasure</h1>
                        <p>Buying and Selling of goods or services using the internet</p>
                        <button class="button" @click="pPage()">Start Shopping  ></button>
                    </div>
            </div>
            <div class="col-md-7 text-center header-img">
                  <img src="../assets/Internet.jpg" alt="">
            </div>
        </div>
       </div>
    </div>
     
</MasterLayout>
</template>

<script>
import MasterLayout from "../Layout/MasterLayout.vue";
export default {
    components : {MasterLayout},
    methods :{
        pPage(){
           this.$router.push({path : "/page2"})

        }
        
    }

}
</script>

<style>
.main-contain{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.content{
    width: 70%;
    margin: 0 auto;
    text-transform: capitalize;
}
.content h1{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
}
.content p{
    font-size: 13px;
    font-weight: 500;
}
.button{
    outline: none;
    border: 0;
    background-color: rgb(210, 98, 23);
    padding: 10px 15px;
    margin-top: 20px;
    color: white;
    font-size: 11px;
    font-weight: 500;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.header-img img{
    width: 450px;
    height: 300px;
}

@media only screen and (max-width: 600px) {
    .main-contain{
    width: 100%;
    height: 100vh;
    
}
.content h1{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
}
.header-img img{
    width: 300px;
    height: 200px;
    margin-top: 20px;
}
.button{
    outline: none;
    border: 0;
    background-color: rgb(210, 98, 23);
    padding: 10px 10px;
    margin-top: 15px;
    color: white;
    font-size: 10px;
    
}
}

</style>