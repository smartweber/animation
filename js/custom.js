new WOW().init();

$(document).ready(function($) {

	//Share Items
	$(".share-trigger").click(function(){
		$(".share-item").toggle();
	});


	// init controller
	controller = new ScrollMagic();

	// Completion Rate for Entertainment Mobile Video Ads animation
	var completion_tween = new TimelineMax();
	var completion_value = {var: 0};
	completion_tween.fromTo(".completion-color", 1, {height: 0}, {height: 224})
		.fromTo(completion_value, 0.5, {var: 0}, {var: 49.2, onUpdate: function(){
			$(".completion-value").html(parseFloat(completion_value.var).toFixed(1)+"<sup>%</sup>");
			$(".completion-value").css("color", "#ee9040");
		}}, "-=1");
	var completion_scene = new ScrollScene({triggerElement: ".completion-wrapper", triggerHook: 'onEnter', offset: 418, reverse: false})
		.setTween(completion_tween)
		.addTo(controller);

	// Digital Video Viewing Increasing animation
	var increase_tween = new TimelineMax();
	var desktop_percent = {var: 0}, ipad_percent = {var: 0}, iphone_percent = {var: 0};
	var desktop_value = {var: 0}, ipad_value = {var: 0}, iphone_value = {var: 0};
	increase_tween.fromTo(".desktop-color", 0.5, {height: 0}, {height: 187})
		.fromTo(desktop_percent, 0.5, {var: 0}, {var: 22, onUpdate:function(){
			$(".desktop-percent").html("+"+parseInt(desktop_percent.var).toFixed(0)+"%");
		}}, "-=0.5")
		.fromTo(desktop_value, 0.5, {var: 0}, {var: 349, onUpdate:function(){
			var min = parseInt(desktop_value.var / 60);
			var sec = parseInt(desktop_value.var).toFixed(0) % 60;
			$(".desktop-value").html(min + ":" + sec);
		}}, "-=0.5")
		.fromTo(".ipad-color", 0.5, {height: 0}, {height: 161})
		.fromTo(ipad_percent, 0.5, {var: 0}, {var: 19, onUpdate:function(){
			$(".ipad-percent").html("+"+parseInt(ipad_percent.var).toFixed(0)+"%");
		}}, "-=0.5")
		.fromTo(ipad_value, 0.5, {var: 0}, {var: 44, onUpdate:function(){
			var sec = parseInt(ipad_value.var) % 60;
			$(".ipad-value").html("0:" + sec);
		}}, "-=0.5")
		.fromTo(".iphone-color", 0.5, {height: 0}, {height: 117})
		.fromTo(iphone_percent, 0.5, {var: 0}, {var: 29, onUpdate:function(){
			$(".iphone-percent").html("+"+parseInt(iphone_percent.var).toFixed(0)+"%");
		}}, "-=0.5")
		.fromTo(iphone_value, 0.5, {var: 0}, {var: 22, onUpdate:function(){
			var sec = parseInt(iphone_value.var) % 60;
			$(".iphone-value").html("0:" + sec);
		}}, "-=0.5");

	var increase_scene = new ScrollScene({triggerElement: ".view-wrapper", reverse: false, triggerHook: 'onEnter', offset: 358})
		.setTween(increase_tween)
		.addTo(controller);

	// Original Digital Video animation animation
	var original_tween = new TimelineMax();
	original_tween.fromTo(".scale", 0.7, {rotation: -30, transformOrigin:"center bottom"}, {rotation: 15, transformOrigin:"center bottom"})
		.to(".scale", 0.5, {rotation: -7, transformOrigin:"center bottom"})
		.to(".scale", 0.5, {rotation: 3, transformOrigin:"center bottom"})
		.to(".scale", 0.5, {rotation: 0, transformOrigin:"center bottom"});
	var original_scene = new ScrollScene({triggerElement: ".scale-wrapper", reverse: false, triggerHook: 'onEnter', offset: 420})
		.setTween(original_tween)
		.addTo(controller);


	// TV on the Decline bar-graph--1
	var bar_tween = new TimelineMax ();
	var min_value = {var: 0}, bar_number = {var: 0};
	bar_tween.fromTo(".bar-graph--1 .bar-labels .bar-label", 0.3, {opacity: 0}, {opacity: 1})
		.fromTo(".bar-graph--1 .bar", 0.3, {height: 0}, {height: "90%", ease: Linear.easeNone})
		.fromTo(min_value, 0.3, {var: 0}, {var: 284, onUpdate: function(){
			var min = parseInt(min_value.var / 60);
			var sec = parseInt(min_value.var).toFixed(0) % 60;
			$(".min-value").html(min + ":" + sec);
		}}, "-=0.3")
		.fromTo(".bar-graph--1 .bar2 .bar-number", 0.2, {opacity: 0}, {opacity: 1})
		.fromTo(bar_number, 0.3, {var: 0}, {var: 2.5, onUpdate: function(){
			$(".bar-graph--1 .bar2 .bar-number").html("-"+parseFloat(bar_number.var).toFixed(1)+"%");
		}})
		.fromTo(min_value, 0.3, {var: 44}, {var: 39, onUpdate: function(){
			$(".bar-graph--1 .bar2 .min-value").html("4:"+parseInt(min_value.var).toFixed(0));
		}}, "-=0.3")
		.to(".bar-graph--1 .bar2", 0.3, {height: "87%", ease: Linear.easeNone}, "-=0.3")
		.fromTo(".bar-graph--1 .bar3 .bar-number", 0.2, {opacity: 0}, {opacity: 1})
		.fromTo(bar_number, 0.3, {var: 0}, {var: 3.5, onUpdate: function(){
			$(".bar-graph--1 .bar3 .bar-number").html("-"+parseFloat(bar_number.var).toFixed(1)+"%");
		}})
		.fromTo(min_value, 0.3, {var: 44}, {var: 32, onUpdate: function(){
			$(".bar-graph--1 .bar3 .min-value").html("4:"+parseInt(min_value.var).toFixed(0));
		}}, "-=0.3")
		.to(".bar-graph--1 .bar3", 0.3, {height: "84%", ease: Linear.easeNone}, "-=0.3")
		.fromTo(".bar-graph--1 .bar4 .bar-number", 0.2, {opacity: 0}, {opacity: 1})
		.fromTo(bar_number, 0.3, {var: 0}, {var: 2.6, onUpdate: function(){
			$(".bar-graph--1 .bar4 .bar-number").html("-"+parseFloat(bar_number.var).toFixed(1)+"%");
		}})
		.fromTo(min_value, 0.3, {var: 44}, {var: 27, onUpdate: function(){
			$(".bar-graph--1 .bar4 .min-value").html("4:"+parseInt(min_value.var).toFixed(0));
		}}, "-=0.3")
		.to(".bar-graph--1 .bar4", 0.3, {height: "80%", ease: Linear.easeNone}, "-=0.3");

	var bar_scene = new ScrollScene({triggerElement: ".bar-graph--1",reverse: false})
		.setTween(bar_tween)
		.addTo(controller);

	// TV & Digital Overlap animation
	var overlap_tween = new TimelineMax();
	var overlap_value = {var: 0};
	overlap_tween.fromTo(".overlap-color", 1, {height: 0}, {height: 338});
	var overlap_scene = new ScrollScene({triggerElement: ".over-wrapper", triggerHook: 'onEnter', offset: 450, reverse: false})
		.setTween(overlap_tween)
		.addTo(controller);

	//Goal Section View
	var goal_tween = new TimelineMax();
	goal_tween.fromTo(".goal1", 0.5, {opacity: 0}, {opacity: 1})
		.fromTo(".goal2", 0.5, {opacity: 0}, {opacity: 1})
		.fromTo(".goal3", 0.5, {opacity: 0}, {opacity: 1});

	var goal_scene = new ScrollScene({triggerElement: ".goals_of_campaign", reverse: false})
		.setTween(goal_tween)
		.addTo(controller);

	//Results score up
	var result_tween = new TimelineMax();
	var result_value = {var1:0, var2:0, var3:0};
	result_tween.fromTo(result_value, 1, {var1: 0}, {var1: 126968, onUpdate:function(){
		$('.result-value1').html(parseInt(result_value.var1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	}})
	.fromTo(result_value, 1, {var2: 0}, {var2: 17, onUpdate:function(){
		$('.result-value2').html(parseInt(result_value.var2)+"%");
	}},"-=1")
	.fromTo(result_value, 1, {var3: 0}, {var3: 1600, onUpdate:function(){
		$('.result-value3').html(parseInt(result_value.var3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	}},"-=1");
	var result_scene = new ScrollScene({triggerElement: ".results", reverse: false})
		.setTween(result_tween)
		.addTo(controller);
	
});

// Best in Show
$(document).ready(function(){
	var video_urls = ["XH3Xu1-cvII", "xGA4dFumO2Y", "1t0A_tZGrYw", "Tpm1yk3enzY", "b1VfWw7SwcY", "FgqyS72kvOE"];
	for(i=1;i<=6;i++){
		var hashes = $(".youtube"+i).attr("data-href").slice(window.location.href.indexOf('?') + 1).split('&');
        hash = hashes[0].split('=');
        img_url = hash[1];
		//$(".youtube"+i).css("background-image", "url(images/youtube/youtube"+i+".jpg)");
		$(".front.youtube"+i).css("background-image", "url(http://img.youtube.com/vi/"+img_url+"/0.jpg)");
		$(".front.youtube"+i).css("background-position", "center center");
		$(".front.youtube"+i).css("background-size", "cover");
		$(".front.youtube"+i).css("background-repeat", "no-repeat");
		$(".youtube"+i).magnificPopup({
			items: [
			{
				src: $(".youtube"+i).attr("data-href")
			}
			], 
			type: "iframe",
			iframe: {
		    	markup: '<div class="mfp-iframe-scaler">'+
	            		'<div class="mfp-close"></div>'+
	            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
	            		'</div>', 
	        patterns: {
	            youtube: {
		              index: 'youtube.com/', 
		              id: 'v=', 
		              src: '//www.youtube.com/embed/%id%?autoplay=1' 
			        }
			     },
			     srcAction: 'iframe_src', 
	     }
		});
	}
});