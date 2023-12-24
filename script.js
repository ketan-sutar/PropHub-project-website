function locomotiveAnimation(){

  
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation()


function faqs(){
  var accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordain => {
    var icon = accordain.querySelector(".icon");
    var ans = accordain.querySelector(".answer");

    accordain.addEventListener("click", () => {
        accordians.forEach(otherAccordain => {
            if (otherAccordain !== accordain) {
                otherAccordain.querySelector(".icon").classList.remove('active');
                otherAccordain.querySelector(".answer").classList.remove('active');
            }
        });

        icon.classList.toggle('active');
        ans.classList.toggle('active');
    });
});


}
faqs()

function navbarAnimation(){
  gsap.to("#nav-part1 svg",{
      transform:'translateY(-100%)',
      opacity:0,

      scrollTrigger:{
          trigger:"#page1",
          scroller:"#main",
          // markers:true,
          start:"top 0",
          end:"top -5%",
          scrub:true
      }
  })
  
  gsap.to("#nav-part2",{
      transform:'translateY(-100%)',
      opacity:0,
      scrollTrigger:{
          trigger:"#page1",
          scroller:"#main",
          // markers:true,
          start:"top 0",
          end:"top -5%",
          scrub:true
      }
  })
}

navbarAnimation()


function show(anything) {
  const txtBox = document.querySelector(".drp1.active .txtBox");
  if (txtBox) {
      txtBox.value = anything;
  }

  // Close the dropdown after a short delay to allow for selection to register
  setTimeout(() => {
      document.querySelectorAll('.drp1').forEach(drp => {
          drp.classList.remove('active');
      });
  }, 100);
}

document.addEventListener("click", (event) => {
  // Close all dropdowns if a click occurs outside any dropdown
  if (!event.target.closest('.drp1')) {
      document.querySelectorAll('.drp1').forEach(drp => {
          drp.classList.remove('active');
      });
  }
});

document.querySelectorAll('.drp1').forEach(drpdown => {
  drpdown.addEventListener("click", (event) => {
      // Toggle the clicked dropdown
      drpdown.classList.toggle('active');
      event.stopPropagation(); // Stop the event from propagating up
  });
});



function page1Animation(){

  
var hed1=document.querySelector("#headings h5")
gsap.from(hed1, {
    x:-100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:2,
    ease:"expo.out",
  
});
var hed2=document.querySelectorAll(".middle h1")
gsap.from(hed2, {duration: 3, delay:1,text: ""})




var drpdwn = document.querySelector("#drop-down-conatiners")
gsap.from(drpdwn,{
  duration: 1.2,
  x: -100,
  ease: "power4.out",
  stagger: 1,
  delay:1,
  opacity:0

})

}


page1Animation()


// navbar menu

var tl=gsap.timeline({
    paused:true
  })

  
  tl.to("#nav-bar",{
    duration: 0,
    opacity: 0,
    pointerEvents: "none",
    ease:Expo.easeInOut
})
tl.to(".menu",{
  duration:1,
  x:"0%",
  ease:Expo.easeInOut,
  zIndex:99,
});

tl.fromTo(".menu .li ",{
  y:"-100%",
  opacity:0,

},{
  duration:1,
  opacity:1,
  y:"0%",
  stagger:0.25,
})
tl.fromTo(".social .socail-li a ",{
  y:"-50%",
  opacity:0,
},{
  duration:0.8,
  opacity:1,
  stagger:0.25,
  ease:Expo.easeOut,
},"-=0.2");


function toggle(){
  
  tl.timeScale(2);
  tl.play()
}

function toggleCls(){
  
  tl.timeScale(3);
  tl.reverse()
  


}




function housetype(){
  document.querySelectorAll(".houseclas").forEach(function(elem){
    var rotate=0;
    var different
  
  
    elem.addEventListener("mousemove",function(details){
      
      var diff=details.clientY-elem.getBoundingClientRect().top;
      different=rotate-details.clientX;
      rotate=details.clientX;
      
      
      gsap.to(elem.querySelector(".title img"),{
        opacity:1,
        ease: Power3,
        // top:diff-10,
        left:details.clientX-250,
        rotate:gsap.utils.clamp(-20,20,different*0.5)
        
      })
  
    })
    elem.addEventListener("mouseleave",function(details){
    
      gsap.to(elem.querySelector(".title img"),{
        opacity:0,
        ease: Power3,
    
      })
      
  
    })
  })

}

housetype()






































