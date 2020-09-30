var controller= new ScrollMagic.Controller();
var controller2= new ScrollMagic.Controller();
var controller3= new ScrollMagic.Controller();
var controller4= new ScrollMagic.Controller();
var controller5= new ScrollMagic.Controller();
var controller6= new ScrollMagic.Controller();

var t = new TimelineMax();
t.fromTo('.sec1',{opacity: 0, x: -100},{opacity: 1, x: 0,duration: 0.5, ease: 'power4'})
.fromTo('.sec2',{opacity: 0, y: 100},{opacity: 1, y: 0,duration: 0.5, ease: 'power4'})
.fromTo('.sec3',{opacity: 0, x: 100},{opacity: 1, x: 0,duration: 0.5, ease: 'power4'});

var t2 = new TimelineMax();
t2.to(".cols1",{height: '80%',duration: 0.5,  ease: "linear"})
.to(".cols2",{height: '86%',duration: 0.5, ease: "linear"})
.to(".cols3",{height: '55%',duration: 0.5, ease: "linear"})
.to(".cols4",{height: '73%',duration: 0.5, ease: "linear"})
.to(".cols5",{height: '98%',duration: 0.5, ease: "linear"})
.to(".cols6",{height: '65%',duration: 0.5, ease: "linear"})
.to(".cols7",{height: '76%',duration: 0.5, ease: "linear"});


var t3 = new TimelineMax();
t3.to(".cards1",{rotationY: '+=180',opacity:1, duration: 0.5, ease: "linear"})
.to(".cards2",{rotationY: '+=180',opacity:1, duration: 0.5, ease: "linear"})
.to(".cards3",{rotationY: '+=180',opacity:1, duration: 0.5, ease: "linear"})
.to(".cards4",{rotationY: '+=180',opacity:1, duration: 0.5, ease: "linear"})
.to(".cards5",{rotationY: '+=180',opacity:1, duration: 0.5, ease: "linear"})
.to(".cards6",{rotationY: '+=180',opacity:1, duration: 0.5, ease: "linear"})
.to(".cards7",{rotationY: '+=180',opacity:1, duration: 0.5, ease: "linear"});


var t4 = new TimelineMax();
t4.fromTo(".revcontainer",{opacity: 0, y : 150},{opacity: 1,y : 0, duration: 1, ease: "linear"});


var t5 = new TimelineMax();
t5.fromTo(".form",{opacity: 0, y : 150},{opacity: 1,y : 0, duration: 1, ease: "linear"});


var scene = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.9
})
.setTween(t)
.addTo(controller);




var scene1 = new ScrollMagic.Scene({
    triggerElement: '.statcontainer',
    triggerHook: 0.6
})
.setTween(t2)
.addTo(controller2);




var scene2 = new ScrollMagic.Scene({
    triggerElement: '#servicecards',
    triggerHook: 0.6
})
.setTween(t3)
.addTo(controller3);


var scene3 = new ScrollMagic.Scene({
    triggerElement: '#testimonials',
    triggerHook: 0.6
})
.setTween(t4)
.addTo(controller4);


var scene4 = new ScrollMagic.Scene({
    triggerElement: '#contact',
    triggerHook: 0.6
})
.setTween(t5)
.addTo(controller5);


var scene5 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0
})
.setClassToggle('.backtotop','visible')
.addTo(controller5);
//dark mode
const options = {
  bottom: "32px", // default: '32px'
  right: "32px", // default: '32px'
  left: "unset", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: " ##00ffff", // default: '#100f2c'
  buttonColorLight: "#00ffff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
