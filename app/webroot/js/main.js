$(function(){
  //horizontal

  var x = $(".one div").offset();
  var one = $(".one").width();
  var para = $(".one div").width();
  var right = one - (x.left + para);

// init controller
var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

var ctrl = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.to("#slideContainer", 1,   {x: "-75%"})

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
		  .setPin("#pinContainer")
			.setTween(wipeAnimation)
			//.addIndicators()
			.addTo(controller);


});
