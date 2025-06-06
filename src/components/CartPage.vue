<template>
<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
    <div class="container-fluid">
<router-link class="navbar-brand logo" to="/">Hauthink</router-link>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link style="font-family: 'Outfit', sans-serif;" class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link style="font-family: 'Outfit', sans-serif;" class="nav-link " to="/assortment">Assortment</router-link>
        </li>
        <li class="nav-item">
            <a style="font-family: 'Outfit', sans-serif;" class="nav-link" href="#">about Us</a>
        </li>
        <li class="nav-item">
            <router-link style="font-family: 'Outfit', sans-serif;" class="nav-link active" to="/cart">Cart</router-link>
        </li>
        </ul>
    </div>
    </div>
</nav>
</div> 
<div class="d-flex justify-content-around flex-wrap" style="background-color: #f8f9fa;">
  <div v-for="item in cartItems" :key="item.id" class="card col col-lg-2 col-12" style="margin-left:5px;">
        <img :src="item.image" class="card-img-top">
    <h3 style="font-family: 'Outfit', sans-serif; margin-left:5px;">{{ item.name }}</h3>
    <p style="font-family: 'Outfit', sans-serif; margin-left:5px;" >Price: {{ item.price }} $</p>
    <p style="font-family: 'Outfit', sans-serif; margin-left:5px;">Quantity: {{ item.quantity }}</p>
        <div class="mt-auto" style="margin-left:5px;">
      <p style="font-family: 'Outfit', sans-serif;">Total: {{ item.price * item.quantity }} $</p>
      <button @click="removeFromCart(item.id)" class="btn-primary but1" style="margin-bottom:5px;">Delete</button>
    </div>
</div>
</div>


</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    }
  },

  created() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cartItems = cart;
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);

localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
</script>

<style scoped>
.logo {
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 45px;
letter-spacing: 1.1px;
text-transform: lowercase;
color: #222222;
}
.but1{
font-family: 'Outfit', sans-serif;
width: 130px;
height: 40px;
color: white;
background: #FD8558;
border: none;
font-weight: bold;
outline: none;
box-shadow: none;
}

</style>