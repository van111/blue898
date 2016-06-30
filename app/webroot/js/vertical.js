$(function(){
  // init
  var controller = new ScrollMagic.Controller();
  var ctr = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
      .fromTo("div.panel.one", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
      .fromTo("div.panel.two",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .fromTo("div.panel.three", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
      .fromTo("div.panel.four", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom

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

  var tween = TweenMax.from("#four", 0.5, {autoAlpha:0, scale:0.7});

  var scene = new ScrollMagic.Scene({
    triggerElement: "a#start",
    duration: 200,
    triggerHook: "onLeave"
  })
  .setTween(tween)
  .addIndicators()
  .addTo(ctrl);

  //  bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});
});
