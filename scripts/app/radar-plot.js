define(["d3.min", "radar-chart.min", "./maps", "jquery-ui.min"], function(d3, RadarChart, map, jqueryUi){

	var radarPlot, 
		chart,
		cfg;

	function getPlotData(){

		var radarData = [
{city:"Amsterdam",year:2012,radarCrime:0.131571866211771,radarHome:0.0833333333333334,radarMigration:0.167729377565479,radarSharing:0.659171974194037,radarArticles:0.460562507045429},
{city:"Amsterdam",year:2013,radarCrime:0.129395704452975,radarHome:0.130801596252277,radarMigration:0.13496245818543,radarSharing:0.767481587920523,radarArticles:0.808029828508133},
{city:"Amsterdam",year:2014,radarCrime:0.0833333333333331,radarHome:0.197267136662941,radarMigration:0.0987353375111384,radarSharing:0.766621116464776,radarArticles:0.643051235568664},
{city:"Amsterdam",year:2015,radarCrime:0.165474966822258,radarHome:0.268469009839747,radarMigration:0.0833333333333334,radarSharing:0.916666666666667,radarArticles:0.411795954857421},
{city:"Enschede",year:2012,radarCrime:0.869788974799342,radarHome:0.627696051093292,radarMigration:0.916666666666667,radarSharing:0.543507598042705,radarArticles:0.0833333333333333},
{city:"Enschede",year:2013,radarCrime:0.877553977209465,radarHome:0.627696051093292,radarMigration:0.908915450574813,radarSharing:0.562718779333125,radarArticles:0.882472851613873},
{city:"Enschede",year:2014,radarCrime:0.916666666666667,radarHome:0.630671466990544,radarMigration:0.907445549761164,radarSharing:0.602986823660596,radarArticles:0.505982209651469},
{city:"Enschede",year:2015,radarCrime:0.884576229740546,radarHome:0.916666666666667,radarMigration:0.905628715836218,radarSharing:0.664319283319332,radarArticles:0.222414592325454},
{city:"Gravenhage",year:2012,radarCrime:0.390286360402116,radarHome:0.40303898529373,radarMigration:0.506609988752063,radarSharing:0.147624941603207,radarArticles:0.323347000088492},
{city:"Gravenhage",year:2013,radarCrime:0.346324880322286,radarHome:0.539209769627202,radarMigration:0.52553610295514,radarSharing:0.172335527736531,radarArticles:0.606250939390523},
{city:"Gravenhage",year:2014,radarCrime:0.431897686543857,radarHome:0.526967640948261,radarMigration:0.497361482390406,radarSharing:0.183786881668769,radarArticles:0.409093545325184},
{city:"Gravenhage",year:2015,radarCrime:0.605829110395918,radarHome:0.609843555709783,radarMigration:0.461718670114086,radarSharing:0.176184251152937,radarArticles:0.225598195481638},
{city:"Utrecht",year:2012,radarCrime:0.169875099294349,radarHome:0.422392354182933,radarMigration:0.656348145551222,radarSharing:0.0949249080112966,radarArticles:0.255523616277759},
{city:"Utrecht",year:2013,radarCrime:0.421127582725508,radarHome:0.583196080982927,radarMigration:0.64696269190879,radarSharing:0.0833333333333333,radarArticles:0.916666666666667},
{city:"Utrecht",year:2014,radarCrime:0.55103746749623,radarHome:0.460647701433311,radarMigration:0.632437150327943,radarSharing:0.0926176492746897,radarArticles:0.653342545839018},
{city:"Utrecht",year:2015,radarCrime:0.72028304271181,radarHome:0.485667021364992,radarMigration:0.620604905269001,radarSharing:0.101432301402926,radarArticles:0.43963691899367},
{city:"Amsterdam",year:0,radarCrime:0.127443967705084,radarHome:0.169967769022075,radarMigration:0.121190126648845,radarSharing:0.777485336311501,radarArticles:0.580859881494912},
{city:"Enschede",year:0,radarCrime:0.887146462104005,radarHome:0.700682558960949,radarMigration:0.909664095709716,radarSharing:0.59338312108894,radarArticles:0.423550746731032},
{city:"Gravenhage",year:0,radarCrime:0.443584509416044,radarHome:0.519764987894744,radarMigration:0.497806561052924,radarSharing:0.169982900540361,radarArticles:0.39107242007146},
{city:"Utrecht",year:0,radarCrime:0.465580798056974,radarHome:0.487975789491041,radarMigration:0.639088223264239,radarSharing:0.0930770480055613,radarArticles:0.566292436944278},
{city:"all",year:2012,radarCrime:0.390380575176895,radarHome:0.384115180975822,radarMigration:0.561838544633858,radarSharing:0.361307355462812,radarArticles:0.280691614186253},
{city:"all",year:2013,radarCrime:0.443600536177558,radarHome:0.470225874488925,radarMigration:0.554094175906043,radarSharing:0.396467307080878,radarArticles:0.803355071544799},
{city:"all",year:2014,radarCrime:0.495733788510022,radarHome:0.453888486508764,radarMigration:0.533994879997663,radarSharing:0.411503117767208,radarArticles:0.552867384096084},
{city:"all",year:2015,radarCrime:0.594040837417633,radarHome:0.570161563395297,radarMigration:0.51782140613816,radarSharing:0.464650625635465,radarArticles:0.324861415414546},
{city:"all",year:0,radarCrime:0.480938934320527,radarHome:0.469597776342202,radarMigration:0.541937251668931,radarSharing:0.408482101486591,radarArticles:0.490443871310421},
]

;		
		var city = $("#city").val();
		var year = $("#year").val();

		var data = [];

		for(var i = 0; i < radarData.length; i++) {
			var datum = radarData[i];
			if (city != "each" && city == datum.city && year != 0 && year == datum.year) {
				data.push(produceChartData(datum));
			} else if (city == "each" && datum.city !== "all") {
				
				if (year == 0 && datum.year == 0) {
					// select nothing
					data.push(produceChartData(datum));
				} else if (year == datum.year) {
					// selected a year
					data.push(produceChartData(datum));
				}

			} else if (year == 0 && datum.year == 0) {
				if (city == "each" && datum.city !== "all") {
					data.push(produceChartData(datum));
				} else if (city != "each" && city == datum.city) {
					data.push(produceChartData(datum));
				}
			}
		}

		return data;		
	}

	function produceChartData(datum){
		var data = [
	      {	
	      	axis: "Safety", 
	      	value: datum.radarCrime, 
	      	yOffset: -20
	      },
	      {
	      	axis: "Home ownership", 
	      	value: datum.radarHome, 
	      	yOffset: -15, xOffset: -20
	      },
	      {
	      	axis: "Population stability", 
	      	value: datum.radarMigration, 
	      	yOffset: 25, xOffset: -15
	      },
	      {
	      	axis: "Sharing schemes", 
	      	value: datum.radarSharing, 
	      	yOffset: 25, xOffset: 15
	      },
	      {
	      	axis: "Cohesion", 
	      	value: datum.radarArticles, 
	      	yOffset: -15, xOffset: 20
	      }
	    ];

	    return {
			className: datum.city,
	    	axes: data
		}
	}	

	function createRadarPlot(callback){

		var margin = {top: 90, right: 50, bottom: 0, left: 50};
		var sideLength = $("#charts-container").width() * 0.4;
		var sideHeightExtra = 60;
		chart = RadarChart.chart();
		chart.config({
			w: sideLength, 
			h: sideLength, 
			axisText: true, 
			levels: 0, 
			circles: true,
			color: function() {},
			radius: 2,
			maxValue: 0 // ToDo needs to be set to something in order for radars to be proportionate
		});
		
		cfg = chart.config(); // retrieve default config
		var svg = d3.select('#radar-plot')
			.append('svg')
				.attr("id","svg-radar")
			  	.attr('width', cfg.w + margin.left + margin.right)
			  	.attr('height', cfg.h + margin.top + margin.bottom + sideHeightExtra)
		radarPlot = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		
        addAxisLabels();

        addKey();

		// callback
        if (typeof callback === "function") callback();


        function addAxisLabels(){
        	var radarPlotEl = $("#radar-plot");
        	radarPlotEl.append(generateHtml("crime-link", "Safety", "", 1));
        	radarPlotEl.append(generateHtml("home-link", "Home", "ownership", 2));
        	radarPlotEl.append(generateHtml("migration-link", "Population", "stability", 3));
        	radarPlotEl.append(generateHtml("sharing-link", "Sharing", "schemes", 4));
        	radarPlotEl.append(generateHtml("cohesion-link", "Media", "framing", 5));

        	function generateHtml(id, firstLine, secondLine, i){
        		return '<div id="' + id + '" class="tiny radar-plot axis-label axis-label-'+ i + '">' + firstLine + " " + secondLine +'</button>';
        	}
        }

        function addText(svg, text, align, x, y, className, id){
            var text = svg.append("text")
                .attr("x", x)
                .attr("y", y)
                .text(text)
                .attr("text-anchor", align)
                .attr("class", className)
                .attr("dominant-baseline", "central");

            if (typeof id !== "undefined") text.attr("id", id);

            return text;
        };

        function addBar(svg, x, y, width, height, barClass, id){
            var bar = svg.append("rect")
                .attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height)
                .attr("class", barClass);

            if (typeof id !== "undefined") bar.attr("id", id);

            return bar;
        };


        function addKey(){
            var boxSide = 10,
                padding = 8,
                halfTextHeight = 4,
                leftStart = 0,
                textLength = 94;
            // unsecured
            addBar( svg,
                leftStart,
                boxSide + padding,
                boxSide,
                boxSide,
                "Amsterdam");
            addText( svg, "Amsterdam", "start", leftStart + 2 * padding, boxSide + padding + halfTextHeight, "key-label");

            // secured
            addBar( svg,
                leftStart + textLength + 2.04 * padding,
                (boxSide + padding),
                boxSide,
                boxSide,
                "Enschede");
            addText( svg, "Enschede", "start", boxSide + leftStart +  textLength + 3 * padding, (boxSide + padding) + halfTextHeight, "key-label");

            // secured
            addBar( svg,
                leftStart + 1.9 * textLength + 4 * padding,
                (boxSide + padding),
                boxSide,
                boxSide,
                "Gravenhage");
            addText( svg, "Gravenhage", "start", boxSide + leftStart + 1.85 * textLength + 5 * padding, (boxSide + padding) + halfTextHeight, "key-label");

            // secured
            addBar( svg,
                leftStart + 3 * textLength + 5 * padding,
                (boxSide + padding),
                boxSide,
                boxSide,
                "Utrecht");
            addText( svg, "Utrecht", "start", boxSide + leftStart + 3 * textLength + 6 * padding, (boxSide + padding) + halfTextHeight, "key-label");
        }
	}

	function updateRadarPlot(){
		var data = getPlotData();
		if (data.length > 0) {
			var difficulty = radarPlot.selectAll('g.difficulty').data([data]);
		  	difficulty.enter().append('g').classed('difficulty', 1);
		  	difficulty.call(chart);
		  	$("#svg-radar .legend").remove();
			
			// data = produceChartData({
			// 	radarCrime: 0,
			// 	radarHome: 0,
			// 	radarMigration: 0,
			// 	radarSharing:0
			// });
		}

		

	}

	function positionAxisLabels() {
		var axes = $("#svg-radar .axis");

		if (axes.length > 0) {
			// Crime
			var crime = $(".radar-plot.axis-label-1");
			crime.css({
			   'left' : ($(axes[0]).position().left - crime.width() * 0.5) + 'px',
			   'top' : ($(axes[0]).position().top - 1.6 * crime.height()) + 'px'
			});

			// Home
			var home = $(".radar-plot.axis-label-2");
			home.css({
			   'left' : ($(axes[1]).position().left - home.width() * 1.2	) + 'px',
			   'top' : ($(axes[1]).position().top - home.height() * 0.7) + 'px'
			});

			// Movement
			var movement = $(".radar-plot.axis-label-3");
			var height = $(axes[2]).find("line").attr("y2") - $(axes[2]).find("line").attr("y1");
			movement.css({
			   'left' : ($(axes[2]).position().left - movement.width() * 0.9) + 'px',
			   'top' : ($(axes[2]).position().top  + height + movement.height() * 0.6) + 'px'
			});

			// Sharing
			var sharing = $(".radar-plot.axis-label-4");
			var width = $(axes[3]).find("line").attr("x2") - $(axes[2]).find("line").attr("x1");
			sharing.css({
			   'left' : ($(axes[3]).position().left + width + sharing.width() * 0.2) + 'px',
			   'top' : ($(axes[3]).position().top + sharing.height() * 6.4) + 'px'
			});

			// Cohesion
			var cohesion = $(".radar-plot.axis-label-5");
			var width = $(axes[3]).find("line").attr("x2") - $(axes[2]).find("line").attr("x1");
			cohesion.css({
			   'left' : ($(axes[3]).position().left + width + cohesion.width() * 0.7) + 'px',
			   'top' : ($(axes[3]).position().top - cohesion.height() * 3.0) + 'px'
			});
		}
	}

	function addButtonClicks() {
		$("#sharing-link").on("click", function(){
			$("[data-section='map'").click();
		});
		$("#crime-link").on("click", function(){
			$("[data-section='crime'").click();
		});
		$("#home-link").on("click", function(){
			$("[data-section='home'").click();
		});
		$("#migration-link").on("click", function(){
			$("[data-section='migration'").click();
		});
	}

	function initDropdowns() {
		$("#city, #year").on("change", function() {
			updateRadarPlot();
		})
	}

	function initSliders(){
		var maxYear = 2015,
			minYear = 2012;

		$("#time-slider").slider({
	      	range: "min",
	      	value: 2012,
	      	min: minYear,
	      	max: maxYear,
	      	step: 1,
	      	animate: "fast",
	      	change: function(event, ui) {
	      		$("#year").val(ui.value).trigger("change");
	      	}
	    })

	}

	function initPlayBtn(){
		var playInterval;
		$("#time-play-btn").on("click", function(){

			var i = 0;
			moveSlider();
			playInterval = setInterval(moveSlider, 2000);
			
			$(this).hide();
			$("#time-pause-btn").show();

			function moveSlider(){
				if (i === 6){
					$("#time-pause-btn").trigger("click");
					return;
				}
				$("#time-slider").slider("option", "value", (2012 + i));
				i++;
			}
		});

		$("#time-pause-btn").on("click", function(){
			clearInterval(playInterval)
			$(this).hide();
			$("#time-play-btn").show();
		})
	}


	var my = {};

	my.updateData = function(){
		updateRadarPlot();
	}

	my.init = function(){
		console.log("radar.js initialised");
		createRadarPlot(function() {
			my.updateData();
			positionAxisLabels();
			//addButtonClicks();
			initDropdowns();
			initSliders();
			initPlayBtn();
		});
	}

	return my;
});
