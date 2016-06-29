$(function(){
  var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo("div#two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
			.fromTo("div#three",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			.fromTo("div#four", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
});
