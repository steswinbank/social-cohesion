define(["foundation.min","./radar-plot", "./maps", "./crime", "./articles"], function(Foundation, radar, map, crime, articles){
    $(document).ready(function(){
    	
    	radar.init();
    	map.init();
    	articles.init();
    	initSectionBtns();


    	$(this).foundation();

    	$("#loader-gif").hide();
    });

    function initSectionBtns(){
		var btns = $("#section-btns li.section-btn");
		btns.each(function(){
			$(this).on("click", function(){
				$("#loader-gif").show();
				if ($(this).hasClass("disabled")) return;
				var btn = $(this);
				btns.removeClass("active");
				btn.addClass("active");
				$(".content-section").hide();
				var section = btn.data("section");
				$("#" +  section).show();
				$("#general-modal").foundation("reveal", "close");

				$(".screen").removeClass("active");

				function callback() {
					$("#loader-gif").hide();
				}

				//$("nav").css("visibility", "visible");
				if ($(this).attr("data-section") == "map") {
					$("#map").addClass("active");
					map.drawMap(callback);
				} else if ($(this).attr("data-section") == "radar-plot") {
					callback();
					$("#control-container").addClass("active");
					//$("nav").css("visibility", "hidden");
				} else if ($(this).attr("data-section") == "crime") {
					$("#crime").addClass("active");
					crime.init();
				}
			});
		});
	}
});