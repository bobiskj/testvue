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
            <router-link style="font-family: 'Outfit', sans-serif;" class="nav-link active" to="/assortment">Assortment</router-link>
        </li>
        <li class="nav-item">
            <a style="font-family: 'Outfit', sans-serif;" class="nav-link" href="#">about Us</a>
        </li>
        <li class="nav-item">
            <router-link style="font-family: 'Outfit', sans-serif;" class="nav-link" to="/cart">Cart</router-link>
        </li>
        </ul>
    </div>
    </div>
</nav>

<div class="d-flex justify-content-around flex-wrap" style="background-color: #f8f9fa;
">
    <div class="card" v-for="product in products" :key="product.id">
    <img :src="product.image" class="card-img-top">
<div class="card-body d-flex flex-column">
        <h5 style="font-family: 'Outfit', sans-serif;" class="card-title">{{ product.name }}</h5>
    <p style="font-family: 'Outfit', sans-serif;" class="card-text flex-grow-1">{{ product.description }}</p>
        <p style="font-family: 'Outfit', sans-serif;" class="card-text price">{{ product.price }} $</p>
        <button @click="addToCart(product)" class="btn-primary mt-auto but1">Add to cart</button>
    </div>
    </div>
</div>
</div>

<div style="background-color: black; " class="flex-column d-flex justify-content-center align-items-center">
<div class="d-flex justify-content-around flex-wrap col-10">
<div>
    <a style="color:white" class="navbar-brand logo" href="#">Hauthink</a>
<h5 style="
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 400;
line-height: 22px;
color: rgba(255, 255, 255, 0.6);
" >+ (0712) 819 79 555 | M: info@example.com</h5>
</div>

</div>
<div style="margin-top:40px;">
<h5 style="
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 400;
line-height: 30px;
text-align: center;
letter-spacing: 0.3px;
color: #BABABA;
">© Hauthink. All Rights Reserved 2022 — Designed by <span style="color:white;">128.digital.</span> Powered by <span style="color:white;">Webflow</span></h5>
</div>
</div>

</template>

<script>
export default {
data() {
    return {
    products: [
        {
        id: 1,
        name: 'ThinkPad T14s Corporate Laptop (4th Gen, 14, AMD)',
        description: '14-inch performance laptop powered by AMD Ryzen™ PRO 7040 Series Mobile Processor',
        price: 1200,
        image: 'https://p3-ofp.static.pub//fes/cms/2024/03/27/oxdp0337rf0afrik5chjny4xlqlxtp019853.png'
        },
        {
        id: 2,
        name: 'ThinkPad T14 Laptop (5th Gen, 14, Intel)',
        description: 'AI features to boost productivity powered by Intel® Core™ Ultra processors 14-inch business laptop with high customization options',
        price: 1100,
        image: 'https://p4-ofp.static.pub//fes/cms/2024/03/27/7p53rmw90imz3bm3yaospkfkh1t274701933.png'
        },
        {
        id: 3,
        name: 'ThinkPad T14s Corporate Laptop (4th Gen, 14, Intel)',
        description: '14" Intel® Evo™ Certified Business Laptop Ultra-thin, recycled metal design',
        price: 1050,
        image: 'https://p1-ofp.static.pub//fes/cms/2024/03/27/9s8yerrok4zwp924nwl0u0ha3ndv4q983486.png'
        },
        {
        id: 4,
        name: 'ThinkPad T16 Corporate Laptop (2nd Gen, 16, Intel)',
        description: '16-inch enterprise-class laptop with up to Intel® vPro® platform Extended battery life (standard or extended battery options available), fast-charging support',
        price: 1000,
        image: 'https://p4-ofp.static.pub//fes/cms/2024/03/27/pjwp4chuj6j85kf6e3158i51rdvk43909886.png'
        },
        {
        id: 5,
        name: 'ThinkPad T16 laptop (3rd Gen, 16, Intel)',
        description: 'AI features to boost productivity with Intel® Core™ Ultra processors Easy to upgrade and repair for longer life',
        price: 975,
        image: 'https://p1-ofp.static.pub//fes/cms/2024/03/20/d03kqdwmcdhm5jlrd503v93y0hv72n243294.png'
        },
        {
        id: 6,
        name: 'ThinkPad T14 Corporate Laptop (4th Gen, 14, Intel)',
        description: '14-inch business laptop with up to Intel® vPro® platform Versatile configuration options, robust security, and fast performance',
        price: 950,
        image: 'https://p4-ofp.static.pub//fes/cms/2024/03/27/mo52s9lzdkybc5gqgao9op5793fw47934281.png'
        },
        {
        id: 7,
        name: 'ThinkPad T14 Corporate Laptop (4th Gen, 14, AMD)',
        description: 'Highly configurable 14-inch laptop powered by AMD Ryzen™ PRO processor A wide range of long-lasting batteries with fast charging',
        price: 1000,
        image: 'https://p1-ofp.static.pub//fes/cms/2024/03/27/ud9jttaevhf5be2aa5s6p6cbl6bi51924891.png'
        },
        {
        id: 8,
        name: 'ThinkPad T16 Business Laptop (2nd Gen, 16, AMD)',
        description: '16-inch enterprise-class laptop powered by AMD Ryzen™ PRO processor Long battery life, choice of two battery sizes, Rapid Charge support',
        price: 1200,
        image: 'https://p4-ofp.static.pub//fes/cms/2024/03/27/y549bmc1x370byf093tko9a68g5lg6192553.png'
        },
        {
        id: 9,
        name: 'ThinkPad T14 laptop (5th Gen, 14, AMD)',
        description: 'Powerful performance with AMD Ryzen™ PRO processor and AI support 14-inch business-class laptop in a sleek, stylish, and compact package',
        price: 1050,
        image: 'https://p2-ofp.static.pub//fes/cms/2024/12/26/wlwiwxc2i18bk607ub99bk2j7r8r8j997385.png'
        },
        {
        id: 10,
        name: 'ThinkPad T14s laptop (14, 6th Gen, AMD)',
        description: 'Boost your performance with the next-generation Ryzen™ AI PRO processor Breakthrough 50 TOPS of performance, advanced AI support',
        price: 1100,
        image: 'https://p3-ofp.static.pub//fes/cms/2024/08/27/ht7zoysqnezelxsy2qppqi6xhiz3ct181567.png'
        }
    ]
    }
},
methods: {
    addToCart(product) {
      // Получаем текущую корзину из LocalStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Проверяем, есть ли товар уже в корзине
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Увеличиваем количество, если товар уже есть
        existingItem.quantity += 1;
      } else {
        // Добавляем новый товар с количеством 1
        cart.push({ ...product, quantity: 1 });
      }
      
      // Сохраняем обновленную корзину в LocalStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Можно добавить уведомление
      alert(`${product.name} добавлен в корзину!`);
    }
}
}
</script>

<style scoped>
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

.card {
width: 18rem;
margin: 1rem;
}

.price {
font-weight: bold;
font-size: 1.2rem;
color: #2c3e50;
}
</style>