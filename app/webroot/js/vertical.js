$(function(){

  var controller = new ScrollMagic.Controller();

  // new ScrollMagic.Scene({
  //   triggerElement: ".start",
  //   triggerHook: "onLeave",
  //   duration: "200%"
  // }).setPin("#pinContainer .start .right-div", {
  //   pushFollowers: false
  // }).addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".one",
    triggerHook: "onEnter",
    duration: "200%"
  }).setPin("#pinContainer .one .right-div", {
    pushFollowers: false
  }).addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".two",
    triggerHook: "onEnter",
    duration: "200%"
  }).setPin("#pinContainer .two .right-div", {
    pushFollowers: false
  }).addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".three",
    triggerHook: "onEnter",
    duration: "200%"
  }).setPin("#pinContainer .three .right-div", {
    pushFollowers: false
  }).addTo(controller);

  // new ScrollMagic.Scene({
  //   triggerElement: ".four",
  //   triggerHook: "onEnter",
  //   duration: "100%"
  // }).setPin("#pinContainer .four .right-div", {
  //   pushFollowers: false
  // }).addTo(controller);
  //

  // init
  // var controller = new ScrollMagic.Controller();
  // var ctrl = new ScrollMagic.Controller();
  //
  // // define movement of panels
  // var wipeAnimation = new TimelineMax()
  //     .fromTo("div.panel.one", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
  //     .fromTo("div.panel.two",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
  //     .fromTo("div.panel.three", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
  //     .fromTo("div.panel.four", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom
  //
  // // create scene to pin and link animation
  // new ScrollMagic.Scene({
  //     triggerElement: "#pinContainer",
  //     triggerHook: "onLeave",
  //     duration: "300%"
  //   })
  //   .setPin("#pinContainer")
  //   .setTween(wipeAnimation)
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);

  //   // init controller
	// var controller = new ScrollMagic.Controller();
  //
	// // build tween
	// var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
  //
	// // build scene
	// var scene = new ScrollMagic.Scene({triggerElement: "div#start", duration: 200, triggerHook: "onLeave"})
	// 				.setTween(tween)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
  //
	// // change behaviour of controller to animate scroll instead of jump
	// controller.scrollTo(function (newpos) {
	// 	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
	// });
  //
	// //  bind scroll to anchor links
	// $(document).on("click", "a[href^='#']", function (e) {
	// 	var id = $(this).attr("href");
  //   console.log(id);
	// 	if ($(id).length > 0) {
	// 		e.preventDefault();
  //
	// 		// trigger scroll
	// 		controller.scrollTo(id, 0);
  //
	// 			// if supported by the browser we can even update the URL.
	// 		if (window.history && window.history.pushState) {
	// 			history.pushState("", document.title, id);
	// 		}
	// 	}
	// });

    // $("a").click(function() {
    //    scrollToAnchor($(this).attr('href'));
    // });

});

// function scrollToAnchor(aid){
//   var aTag = $(aid);
//   console.log(aTag.offset());
//   $('html,body').animate({scrollTop: aTag.offset().top},'slow');
// }
