<template>
  <MasterLayout>
    <div class="container mt-3  " style="position: relative;">
      <div class="card p-3">
        <table class="table table-striped ">
          <thead>
            <tr class="mb-2 text-center">
              <td>Name</td>
              <td>Image</td>
              <td>+ -</td>
              <td>Qty</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in cart" :key="i" class="my-2 ">
              <td>{{ p.title }}</td>
              <td>
                <img :src="p.images['0']" alt="" class="product-img" style="">
              </td>
              <td>
                <span class="btn bg-success btn-sm mx-1" @click="addQty(p)">+</span>
                <span class="btn bg-danger btn-sm mx-1" @click="reduceQty(p)">-</span>
              </td>
              <td>
                {{ p.qty }}
              </td>
              <td>
                $ {{ p.qty * p.price }}
              </td>
              <td>
                <span class="btn bg-success btn-sm mx-1" @click="deleteItem(p,i)"><i class="fa fa-trash"></i></span>
              </td>


            </tr>
          </tbody>
          <tr>
            <td colspan="5" class="text-end">
              Total Cost:
            </td>
            <td>

              ${{ totalCost }}
            </td>
          </tr>
        </table>

        <button class="btn btn-primary" style="font-size: 10px;" @click="checkOut()">Check Out</button>
      </div>


    </div>

  </MasterLayout>
</template>
    
<script>
import MasterLayout from "../Layout/MasterLayout.vue";
export default {
  components: { MasterLayout },
  data() {
    return {
      cart: [],
    }
  },
  created() {
    this.cart = this.$root.cart;


  },
  methods: {
    deleteItem(item,i){
      this.cart.splice(i,1);

    },
    checkOut() {
      this.$router.push({ path: "/page4" })

    },
    addQty(item) {
      item.qty++;
    },

    reduceQty(item) {
      if (item.qty > 0) {
        item.qty--;
      }
    }
  },

  computed: {
    totalCost() {
      let total = 0;

      this.cart.forEach(res => {
        total += res.price * res.qty;

      });
      return total;
    }

  }

}
</script>
    
<style>
td {
  text-align: center;
}

td img {
  width: 95px;
  height: 60px
}

td span i {
  font-size: 9px;
  color: wheat;
}

@media only screen and (max-width: 600px) {
  td {
    font-size: 10px;
  }

  td img {
    width: 50px;
    height: 50px;
  }
}
</style>