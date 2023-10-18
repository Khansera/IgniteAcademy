const navbar = document.querySelector('.navbar');
const hero=document.querySelector('.hero');
const logo=document.querySelectorAll('.navItem i')[0];
const hamburgerIcon=document.querySelector('.hamburger i')
const Navlinks=document.querySelectorAll('.navItem')[1];
const hamburger=document.querySelector('.hamburger');
const close=document.querySelector('.close')
const li= document.querySelectorAll('.navLinks li');
li.forEach((ele,index)=>{
  ele.addEventListener('mouseover',()=>{

    if(window.innerWidth <= 930){
      ele.style.borderBottom="none";
   }else{
    if(window.scrollY>0){
      ele.style.borderBottom="2px solid black";
    }else{
      ele.style.borderBottom="2px solid white";
    }
   }
  })
  ele.addEventListener('mouseout',()=>{
    ele.style.borderBottom="none";
  })
})
  
    window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
  
      navbar.classList.add('bacWhite');
      Navlinks.classList.remove('NavLinkOpen');
      hamburgerIcon.style.color='black';
      logo.style.color='black'
      li.forEach((ele,index)=>{
        ele.style.color='black'
      })
    }
    else {
      navbar.classList.remove('bacWhite');
      hamburgerIcon.style.color='white';
      logo.style.color='white';
      li.forEach((ele,index)=>{
        ele.style.color='white'
  
      })
    }

  });

hamburger.addEventListener('click',()=>{
  Navlinks.classList.add('NavLinkOpen');
})
close.addEventListener('click',()=>{
  Navlinks.classList.remove('NavLinkOpen');
})


//.............Media Qurey............//
  
  function adjustBackgroundHeight() {
    const background = document.querySelector('.bac');
    const content = document.querySelector('.hero');
    navbar.classList.remove('d-none');
    hero.classList.remove('d-none');
    const contentHeight = content.offsetHeight;
    background.style.height = contentHeight + navbar.offsetHeight+120 + 'px';
    if(window.innerWidth >= 930){
      Navlinks.classList.remove('NavLinkOpen');
    }
  }
  window.addEventListener('resize', adjustBackgroundHeight);
  window.addEventListener('load', adjustBackgroundHeight);

