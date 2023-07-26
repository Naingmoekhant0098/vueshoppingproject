<template>
  <!-- <div class="navbar">
    <div class="title">
      <h5>Shopify</h5>
    </div>
    <ul>
      <li><router-link class="route" to="/">Home</router-link></li>
      <li><router-link class="route" to="/page2">Products</router-link></li>
      <li>About us</li>
    </ul>
    <div class="cart">
      <router-link class="route" to="/page3"> <i class="fa-solid fa-cart-shopping position-relative">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger" style="font-size: 7px;">
    {{ cart.length }}
 
  </span>
      </i></router-link>
     
    </div>
  </div> -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><h5>Shopify</h5></a>

      <div class="d-flex align-items-center">
        <div class="cart me-3" id="cart1">
        <router-link class="route" to="/page3"> <i class="fa-solid fa-cart-shopping position-relative">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
              style="font-size: 7px;">
              {{ cart.length }}

            </span>
          </i></router-link>

      </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     
      </div>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><router-link class="route" to="/">Home</router-link></li>
          <li><router-link class="route" to="/page2">Products</router-link></li>
          <li>About us</li>
        </ul>

      </div>
      <div class="cart" id="cart2">
        <router-link class="route" to="/page3"> <i class="fa-solid fa-cart-shopping position-relative">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
              style="font-size: 7px;">
              {{ cart.length }}

            </span>
          </i></router-link>

      </div>
    </div>
    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    }
  },
  created() {
    this.cart = this.$root.cart;
  }
};
</script>

<style>
.navbar {
  display: flex;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.75);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.64);
  backdrop-filter: blur(5px);

  justify-content: space-around;
  align-items: center;
  padding: 5px 0px;




}

ul {
  list-style: none;
  display: flex;

}

ul li {
  padding: 15px;
  font-size: 14px;
  cursor: pointer;
}

ul .route {
  color: #333;
}

.cart i {
  font-size: 16px;
  cursor: pointer;
}

#cart1{
  display: none;
}

@media only screen and (max-width: 600px) {
  #cart2{
    display: none;
  }
  #cart1{
  display: block;
}
    
}
</style>