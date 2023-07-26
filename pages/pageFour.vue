<template>
    <MasterLayout>
        <div class="container ">
            <div class="card mx-auto p-4 checkForm">
                <h5 class="text-center mb-4">Check Out Form</h5>
                <div class="form">
                    <label for="">CARDHOLDER NAME</label><br>
                    <input type="text" class="form-control" v-model="name" placeholder="Naing Moe Khant" required> <br>
                    <label for="">CARD NUMBER</label><br>
                    <input class="form-control" type="number" v-model="number" placeholder="000-0000-000-000" required> <br>

                    <div class="dateAndCvc">
                        <div class="Date">
                            <label for=""> EXP DATE (MM/YY)</label><br>
                            <div class="d-flex mb-2">
                                <input class="form-control" v-model="month" type="input" placeholder="MM" required>
                                <input class="form-control" type="input" v-model="year" placeholder="YY" required>
                            </div>
                        </div>

                        <div class="Cvc">
                            <label for="">CVC</label><br>
                            <input class="form-control" v-model="cvc" type="text" placeholder="e.g.123">
                        </div>
                    </div>

                    <button @click="confirm" class="btn btn-primary mt-3">Confrim</button>


                </div>
            </div>
        </div>

    </MasterLayout>
</template>
    
<script>
import MasterLayout from "../Layout/MasterLayout.vue";
export default {
    components: { MasterLayout },
   data(){
    return{
        name : "",
        number: "",
        month :"",
        year : "",
        cvc :"",

    }
   },
    methods: {
        pPage() {
            this.$router.push({ path: "/page2" })

        },
        confirm() {
            if(this.name != "" &&  this.number !="" && this.month !="" && this.year !="" && this.cvc !=""){
                this.$swal(
                {
                    icon: 'success',
                    title: 'Order Success',
                    text: "Your order have been ordered successfully",
                    type: 'success',
                }
            );
            }else{
                this.$swal(
                {
                    icon: 'warning',
                    title: 'Warning',
                    text: "Please fill the form correctly",
                    type: 'warning',
                }
            );
            }
           
        }

    }

}
</script>
    
<style>
.form label {
    margin-bottom: 10px;
}

.form input {
    font-size: 12px;
}

.form button {
    font-size: 12px;
}

.checkForm {
    width: 500px;
}

@media only screen and (max-width: 600px) {

    .checkForm {
        width: 100%;
    }
}</style>