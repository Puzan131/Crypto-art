let tl = gsap.timeline();
tl.from(".logo, .list, .right",{
    y:"-100%",
    opacity:0,
    duratoin:3,
    stagger:0.5,
})
gsap.to(".text h1",{
    y:"0%",
    duration:1,
    ease:Circ.easeOut
})
gsap.to(".big-circle",{
    rotateY:" 360deg",
    delay:2,
    duration:1.5,
    ease:Power2.easeInOut
})
gsap.to(".small-circle",{
    rotateX:" 360deg",
    delay:2,
    duration:1.5,
    ease:Power2.easeInOut
})
gsap.to(".text h5",{
    y:"0%",
    duration:1,
    ease:Circ.easeOut,
    delay:1
})
gsap.from(".img-ctn img",{
   scale:0,
   opacity:0,
   duration:2,
   ease:Power2.easeOut
})
gsap.from(".green",{
    opacity:0,
    left:"50%",
    top:"95%",
    duration:1,
    delay:2

})
gsap.from(".credits",{
    left:"-3%",
    duration:1,
    repeat:-1,
    yoyo:true,
})