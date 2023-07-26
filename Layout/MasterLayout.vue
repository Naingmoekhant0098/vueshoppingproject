<template>
  <div class="main">
      <NavLayout />
      <slot />
  </div>
</template>

<script>
import NavLayout from "./NavLayout.vue";
export default {
    components : {NavLayout},

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
 
 body{
     font-family: Poppins, sans-serif;
     padding: 0;
     margin: 0;
     width: 100%;
     height: 100%;
     box-sizing: border-box;
 
 }
 
.main{
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
 
}

</style>