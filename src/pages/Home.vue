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
              <button class="btn btn-light btn-sm rounded-pill">Stream Now</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <div>

    </div>


    <div style="height: 200vh;">

      <div class="parallax" :style="{ background: scrollPos > 600 ? 'black' : '' }">
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


      <div style="height: 400px; background: black; padding: 50px 150px;">

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

      <div style="height: 450px; background-color: black;">

        <div data-aos="zoom-out">
          <Carousel :autoplay="2000" :items-to-show="2" :wrap-around="true" :pause-autoplay-on-hover="true">
            <Slide v-for="slide in carousel" :key="slide">
              <!-- <div class="carousel__item"  style="background: white; height: 500px;">{{ slide }}</div> -->
              <img class="carousel__item" :src="slide" style="background: white; height: 400px;">
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>

      <div class="pb-3" style="background: black;">

        <Vue3Marquee :delay="0" :duration="duration" :pause-on-hover="true" style="" data-aos="fade-up">
          <div class="card cont-box" v-for="item, i in marquee1" :style="{ background: `url('${item}')` }" 
            style="width: 400px; height: 200px; background-color: grey; margin: 10px; background-size: cover;">
            <div class="overlay"></div>
            <div class="button"><a href="#"> Stream Now </a></div>
          </div>
        </Vue3Marquee>

        <Vue3Marquee :delay="0" :duration="40" :pause-on-hover="true" style="" data-aos="fade-up">
          
          <div class="card cont-box" v-for="item, i in marquee1" :style="{ background: `url('${item}')` }" 
            style="width: 400px; height: 200px; background-color: grey; margin: 10px; background-size: cover;">
            <div class="overlay"></div>
            <div class="button"><a href="#"> Stream Now </a></div>
          </div>
        </Vue3Marquee>

        <!-- <div class="w-100">
          <button style="width: 100px;" class="btn btn-light btn-sm ms-auto">pause</button>
        </div> -->
      </div>

      <div style="height: 500px;">

        <div class="text-center ms-auto me-auto" style="height: 100px; width: 1000px; margin-top: 100px;">

          <figure data-aos="zoom-in" class="m-auto"
            style="width: 76px;
              height: 76px;
              background-size: 76px 76px;
              background-repeat: no-repeat;
              background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_app_icon__cth1s5qlqpyu_large.png');">
          </figure>
          <div class="mt-3"
            style="font-size: 70px;line-height: 1.1; font-weight: 800;letter-spacing: 0em;font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;">
            Watch Apple TV+ anywhere <br>
            on the Apple TV app.
          </div>
          <p class="mt-3">Find the Apple TV app on your favorite Apple devices. <br>
            Or watch Apple TV+ online at tv.apple.com.</p>

          <div class="row justify-content-center">

            <div class="col text-center" data-aos="fade-up">
              <div class="m-auto"
                style="    
                  width: 53px;
                  height: 63px;
                  background-size: 53px 63px;
                  background-repeat: no-repeat;
                  background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_apple_tv__r2nel0gcigam_medium.jpg');">
              </div>
              <div class="mt-2">Apple TV</div>
            </div>
            <div class="col" data-aos="fade-up" data-aos-delay="50">
              <div class="m-auto"
                style="    
                  width: 53px;
                  height: 63px;
                  background-size: 53px 63px;
                  background-repeat: no-repeat;
                  background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_iphone__c914mkstye0y_medium.jpg');">
              </div>
              <div class="mt-2">iPhone</div>
            </div>

            <div class="col" data-aos="fade-up" data-aos-delay="100">
              <div class="m-auto"
                style="    
                  width: 53px;
                  height: 63px;
                  background-size: 53px 63px;
                  background-repeat: no-repeat;
                  background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_ipad__cyk6qow5fiqa_medium.jpg');">
              </div>
              <div class="mt-2">iPad</div>
            </div>
            <div class="col" data-aos="fade-up" data-aos-delay="150">
              <div class="m-auto"
                style="    
                  width: 53px;
                  height: 63px;
                  background-size: 53px 63px;
                  background-repeat: no-repeat;
                  background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_mac__b7y797p7oouq_medium.jpg');">
              </div>
              <div class="mt-2">Mac</div>
            </div>
            <div class="col" data-aos="fade-up" data-aos-delay="200">
              <div class="m-auto"
                style="    
                  width: 53px;
                  height: 63px;
                  background-size: 53px 63px;
                  background-repeat: no-repeat;
                  background-image: url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_airplay__ddkvcm0sxtm6_medium.jpg');">
              </div>
              <div class="mt-2">AirPlay</div>
            </div>

          </div>
        </div>

      </div>

      <div class="text-center">

        <h2>See it on your smart TV or streaming device.</h2>

      </div>

    </div>
  </div>


</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';


import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const scrollPos = ref(0)
const duration = ref(70)
const pause = ref(false)

const carousel = [
  "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/88/45/fb/8845fbe5-b560-2f97-72dd-4a17e565d05c/abcfa406-f335-464c-881a-3b8a26fd84ab.png/1920x800sr.jpg",
  "https://is2-ssl.mzstatic.com/image/thumb/Features116/v4/7c/e4/64/7ce46417-ed07-323b-31f1-592a6d63cfa7/Q1NXLVRWQS1XVy1TUFRfRWFybHlDb21pbmdTb29uLnBuZw.png/1839x766sr.jpg",
  "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/60/52/a7/6052a7da-2a60-3756-4c4f-b907173e44d7/bbc79a26-1ae1-4406-aff1-fc2ffda59f40.png/1839x766sr.jpg",

]

const marquee1 = [
  "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/378x212.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/378x212.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/378x212.jpg",



  "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/378x212.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/378x212.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/378x212.jpg",



  "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/378x212.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/378x212.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/378x212.jpg"
]


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
.cont-box {
  position: relative;
  width: 400px;
  height: 200px;
  background-color: white;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.5s ease;
}

.cont-box:hover .overlay {
  display: block;
  background: rgba(0, 0, 0, .3);
}



.cont-box:hover .title {
  top: 50px;
}

.button {
  position: absolute;
  width: 400px;
  left: 0;
  top: 80px;
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease;
}

.button a {
  width: 200px;
  padding: 12px 48px;
  text-align: center;
  border: solid 2px white;
  z-index: 1;
  background-color: white;
  border-radius: 25px;
  text-decoration: none;
  color: #000;
}

.cont-box:hover .button {
  opacity: 1;
}





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
}

.carousel__slide {
  padding: 10px;
}

/* .carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
} */
</style>