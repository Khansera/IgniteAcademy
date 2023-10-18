import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import LocomotiveScroll from 'locomotive-scroll';
import 'normalize.css';
import 'milligram/dist/milligram.min.css';
import './style.css';

const sw1 = new Swiper('.sw1', {
  modules: [Navigation,Autoplay],
  // Optional parameters
  direction: 'horizontal',
  autoplay:true,
  slidesPerView: 1,
  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // When window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    // You can add more breakpoints as needed
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
const sw2= new Swiper('.sw2', {
  modules: [Navigation,Autoplay],
  // Optional parameters
  direction: 'horizontal',
  autoplay:true,
  slidesPerView: 1,
  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // When window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    // You can add more breakpoints as needed
  },
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
});

const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 1.2,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  },
});
const target1 = document.getElementById('courses');
const target2 = document.getElementById('addmission');
const target3 = document.getElementById('home');
const target4 = document.getElementById('footer');
const target5 = document.getElementById('contact');

function scrollTo(params) {
const { target, options } = params;
locomotiveScroll.scrollTo(target, options);
}
for(let i=0; i<=1; i++){
  document.querySelectorAll('.course')[i].addEventListener('click',()=>{
    scrollTo({ target: target1, options: {} });
    })
    document.querySelectorAll('.addmission')[i].addEventListener('click',()=>{
    scrollTo({ target: target2, options: {} });
    })
    document.querySelectorAll('.home')[i].addEventListener('click',()=>{
    scrollTo({ target: target3, options: {} });
    })
    document.querySelectorAll('.about')[i].addEventListener('click',()=>{
      scrollTo({ target: target4, options: {} });
      })
}

document.querySelector('.contact').addEventListener('click',()=>{
scrollTo({ target: target5, options: {} });
})
let options=document.getElementById('course');
document.querySelectorAll('.cValue').forEach((ele,index)=>{
  document.querySelectorAll('.courseCard')[index].addEventListener('click',()=>{
    scrollTo({ target: target2, options: {} });
  let targetvalue=ele.getAttribute('data-course');
 options.value=targetvalue;
})
})

