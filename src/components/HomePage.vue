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
            <router-link style="font-family: 'Outfit', sans-serif;" class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link style="font-family: 'Outfit', sans-serif;" class="nav-link" to="/assortment">Assortment</router-link>
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

</div>

<div class="bg-image d-flex justify-content-center align-items-center">

<div>
<h1 ref="heading" class="text1" >ThinkPad – the machine that</h1>
<h1 ref="heading1" class="text2" >thinks with you</h1>

<div class="d-flex justify-content-center align-items-center">
<button class="but1" @click="$router.push('/assortment')" style="font-family: 'Outfit', sans-serif;">Assortment</button>
<button class="but2" >More details</button>

</div>

</div>

</div>

<div style="background-color:white;" class="d-flex justify-content-between">

<div class="col col-6 " style="margin-top:20px;
background-image: url('/src/assets/about.png');
background-repeat: no-repeat;
">
<h6 style="
font-weight: 400;
font-size: 14px;
letter-spacing: 2px;
color: #FD8558;
font-family: 'Outfit', sans-serif;
">ABOUT US</h6>
<h3 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
">Ultimate experiences</h3>
<h3 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
">with story, emotion and purpose</h3>
</div>

<div class="col col-6" >
<h5 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 28px;
text-transform: capitalize;
" >Engineered for endurance. Built for breakthroughs</h5>
<h6 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 26px;
color: #999999;
" >ThinkPad laptops are designed to withstand the toughest challenges while empowering you to push boundaries. With military-grade durability, industry-leading keyboards, and relentless performance, they keep up with your most demanding work—whether in the office, lab, or field. Every component is crafted for professionals who need reliability without compromise. Because when your ideas break new ground, your technology should too.</h6>
</div>

</div>

<div style="background-color:white; margin-top:70px;"  class="d-flex justify-content-around flex-wrap" >
<div class="col-12 col-lg-6">
<img
src="/src/assets/flex.png"
alt="Описание"
style="
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 0 auto;
"
></div>

<div class="col-12 col-lg-6">
<h4 style="
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 400;
line-height: 45px;
color: #222222;
">“Our mission is to match every client with their <span style="color:#FD8558">perfect ThinkPad,</span> delivering expert guidance and flawless service at every step ”</h4>
<h6 style="
margin-top:30px;
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 20px;
">Frankie Kao</h6>
<h6 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
font-size: 12px;
letter-spacing: 1.8px;
color: #CACACA;
">ART DIRECTOR PAO</h6>
</div>

</div>

<div style="margin-top:40px;" class="d-flex justify-content-around flex-wrap">
<div class="col-lg-4 d-flex justify-content-center align-items-center flex-wrap">
<img
src="/src/assets/digit.png"
alt="Описание">
<h5 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 38px;
" >digital solutions</h5>
<h6 style="
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 26px;
color: #999999;
">We help businesses redesign their tech strategy with the right ThinkPad solutions - selecting optimal models, configuring secure setups, and ensuring seamless integration into your workflow.</h6>
</div>

<div class="col-lg-4 d-flex justify-content-center align-items-center flex-wrap">
<img
src="/src/assets/creat.png"
alt="Описание">
<h5 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 38px;
" >strict design</h5>
<h6 style="
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 26px;
color: #999999;
">We help businesses redesign their tech strategy with the right ThinkPad solutions - selecting optimal models, configuring secure setups, and ensuring seamless integration into your workflow.</h6>
</div>

<div class="col-lg-4 d-flex justify-content-center align-items-center flex-wrap">
<img
src="/src/assets/integ.png"
alt="Описание">
<h5 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 38px;
" >performance</h5>
<h6 style="
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 26px;
color: #999999;
">We help businesses redesign their tech strategy with the right ThinkPad solutions - selecting optimal models, configuring secure setups, and ensuring seamless integration into your workflow.</h6>
</div>

</div>

<div style="background-color:#3A0F73; " class="flex-column d-flex justify-content-center align-items-center">
<div>
<h1 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 220px;
text-align: center;
color: rgba(170, 170, 170, 0.1);
font-size: clamp(60px, 10vw, 70px);
">testimonials</h1></div>
<div>
<h6 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 29px;
text-align: center;
letter-spacing: 0.2px;
color: #FFFFFF;
" >We believe in honest, neighborly marketing. No flashy gimmicks—just straight talk about why ThinkPads outlast cheaper laptops, saving you money long-term</h6>
</div>

<div class="d-flex  align-items-center">
<img src="/src/assets/photo.png" alt="">
<h5 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 22px;
text-align: center;
color: #FFFFFF;
">Sophie Nguyen</h5>
</div>

</div>

<div style="margin-top:100px; margin-bottom:100px;" class="flex-column d-flex justify-content-center align-items-center">
<div style="
background-image: url('/src/assets/works.png');
background-repeat: no-repeat;
" class="d-flex justify-content-between col-lg-6">

<div style="">

<h6 style="
font-family: 'Outfit', sans-serif;
font-weight: 400;
line-height: 15px;
letter-spacing: 2px;
text-transform: uppercase;
color: #FD8558;
">Our products</h6>
<h4 style="
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
font-family: 'Outfit', sans-serif;
">Check out</h4>
<h4 style="
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
font-family: 'Outfit', sans-serif;
">our products.</h4>
</div>
<div class="d-flex justify-content-center align-items-center" @click="$router.push('/assortment')"><button class="but1">Look</button></div>
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
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default {
mounted() {
    gsap.registerPlugin(SplitText);
    this.initAnimation();
},
methods: {
    initAnimation() {

      // Создаем SplitText
const split = new SplitText(this.$refs.heading, {
        type: "chars",
    });
    const split1 = new SplitText(this.$refs.heading1, {
        type: "chars",
    });
      // Анимация
    gsap.from(split.chars, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
    });
    gsap.from(split1.chars, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
    });
    }


}
}
</script>

<style scoped>

.bg-image {
width: 100%;
height: 100vh;
background-image: url('/src/assets/fon.png');
background-repeat: no-repeat;
background-size: cover;

}
.logo{
font-family: 'Outfit', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 45px;
letter-spacing: 1.1px;
text-transform: lowercase;
color: #222222;
}
.text1{
font-size: clamp(30px, 10vw, 70px);
font-style: normal;
font-weight: 400;
line-height: 85px;
text-align: center;
color: #FFFFFF;
margin-bottom: -10px;
font-family: 'Outfit', sans-serif;
}
.text2{
font-size: clamp(30px, 5vw, 70px);
font-style: normal;
font-weight: 400;
line-height: 85px;
text-align: center;
color: #FFFFFF;
font-family: 'Outfit', sans-serif;
}
.but1{
font-family: 'Outfit', sans-serif;
width: 154px;
height: 56px;
color: white;
background: #FD8558;
border: none;
font-weight: bold;
outline: none;
box-shadow: none;
}
.but2{
margin-left: 20px;
font-family: 'Outfit', sans-serif;
width: 154px;
height: 56px;
color: white;
background: transparent;
border: 1px solid #FD8558;
font-weight: bold;
outline: none;
box-shadow: none;
transition: all 0.3s ease;
}
</style>
