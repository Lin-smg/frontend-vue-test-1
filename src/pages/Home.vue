<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark "
      style="font-family: 'SF Pro Text','Myriad Set Pro','SF Pro Icons','Helvetica Neue','Helvetica','Arial',sans-s">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0  justify-content-between" style="width: 800px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Store</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mac</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">iPad</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">iPhone</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Watch</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Airpod</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TV & Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Only on Apple</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Accessories</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top"
      style="background-color: rgb(0 0 0 / 81%) !important;">
      <div class="container-fluid">
        <div class=" navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0 justify-content-between" style="width: 800px">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Apple TV+</a>
            </li>

            <li class="nav-item">
              <button class="btn btn-light btn-sm">Stream Now</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <div>

    </div>


    <div style="height: 200vh;">

      <div class="parallax" :style="{ background: scrollPos > 400 ? 'black' : '' }">
        <div class="text-white head-line" style="padding: 20px 100px; height: 50%;">
          <h2 class="text-start head-line" style="margin-top: 70px;">
            <p>All Apple Originals.
              <br class="large">Only on&nbsp;Apple&nbsp;TV+.
            </p>
          </h2>
        </div>

        <div class="main">
          <div style="padding: 20px 100px; color: white" class="head-line-2">
            <div data-aos="fade-up" class="text-start">
              New Apple Originals every month.
            </div>
            <br>
            <div class="text-start" data-aos="fade-up">
              Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.
            </div>
            <br>
            <div class="text-start" data-aos="fade-up">
              Share Apple TV+ with your family.
            </div>

          </div>

        </div>
      </div>


      <div style="height: 500px; background: black; padding: 50px 150px;">

        <div class="row text-white" data-aos="fade-up">
          <div class="col">
            <div class="text-start">

              <h5>Buy an Apple device</h5>
              <h1>3 months free.</h1>
              <p>Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90
                days.1</p>

              <button class="btn btn-light rounded-pill">Check eligibility</button>
            </div>
          </div>
          <div class="col">
            <div class="text-start">

              <h5>Buy an Apple device</h5>
              <h1>3 months free.</h1>
              <p>Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90
                days.1</p>

              <button class="btn btn-light rounded-pill">Check eligibility</button>
            </div>
          </div>
          <div class="col">
            <div class="text-start">

              <h5>Buy an Apple device</h5>
              <h1>3 months free.</h1>
              <p>Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90
                days.1</p>

              <button class="btn btn-light rounded-pill">Check eligibility</button>
            </div>
          </div>
        </div>
      </div>

      <div style="height: 500px; background-color: black;">
        <Carousel :items-to-show="2.5" :wrap-around="true" style="height: 500px;">
          <Slide v-for="slide in 10" :key="slide" style="height: 500px;" :style="{background: slide%2==0?'grey': ''}">
            <div class="carousel__item" style="height: 400px;" >{{ slide }}</div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <div  style="background: black;">

        <Vue3Marquee :delay="3" :duration="duration" style="" @mouseover="duration = 90" @mouseleave="duration=70">
          <div class="card" v-for="i in 10" style="width: 500px; height: 200px; background-color: grey; margin: 5px;">

          </div>
        </Vue3Marquee>

        <Vue3Marquee :delay="1" duration="50" style="">
          <div class="card" v-for="i in 10" style="width: 500px; height: 200px; background-color: white; margin: 5px;">

          </div>
        </Vue3Marquee>
      </div>

    </div>
  </div>


</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';


import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'


const scrollPos = ref(0)
const duration = ref(70)


onMounted(() => {
  scroll();
})

function scroll() {
  window.onscroll = () => {
    
    scrollPos.value = window.pageYOffset;
   
  };
}

</script>

<style scoped>
.parallax {
  /* The image used */
  background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/hero_startframe__fs1yactuf3qm_large.jpg');

  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.head-line {
  font-size: 6rem;
  line-height: 1.0416666667;
  font-weight: 700;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  opacity: .999;
  transform: translateY(0);
}

.head-line-2 {
  font-size: 4rem;
  line-height: 1.0416666667;
  font-weight: 700;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  opacity: .999;
}

.fix-bg {
  background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/hero_startframe__fs1yactuf3qm_large.jpg');

}

.main {

  height: 594px;
  background: linear-gradient(rgba(255, 0, 0, 0), #00000003 0%, #00000042 10%, #0000007a 20%, #0000008c 30%);
}


.scrolling-div {
  white-space: nowrap;
  width: 250%;
  overflow-x: auto
}

.scrolling-div>div {
  background: #ccc;
  width: 300px;
  height: 100px;
  display: inline-block;
  margin: 1px;

  /* for IE6/7, remove if you don't need to support those browsers */
  *display: inline;
  zoom: 1
}

/* 
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
} */

</style>