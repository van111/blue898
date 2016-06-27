$(function(){
  var ctrl = new ScrollMagic.Controller();
  var pin = "#pinContainer";

  new ScrollMagic.Scene({
    triggerElement: pin,
    triggerHook: "onLeave",
    duration: "500%"
  })
  .setPin(pin)
  .addTo(ctrl)
});
