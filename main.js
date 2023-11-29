gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});


TweenMax.to('.text',2.5,{
  scale:1,
  ease:Expo.easeInOut,
})
TweenMax.staggerFrom('.logo > div',1.5,{
  deray:4.4,
  y:300,
  ease:Elastic.easeOut.config(2,0.6),
})

//music
const playBtn = document.querySelector('.item');
const audio = document.querySelector('.audio');
playBtn.addEventListener('click',()=> {
  if (audio.paused) {
    audio.play();
    item.innerHTML = "paused"
  }else if( audio.played){
    audio.pause();
  }
})