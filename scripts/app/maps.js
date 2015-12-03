define(["d3.min", "topojson.min"], function(d3, topojson){

	var map, drawn = false, baseZoom = 9;

	function drawMap(callback) {

		drawn = false;

		var customStyle = [
		  {
		    "featureType": "road",
		    "stylers": [
		      { "visibility": "simplified" }
		    ]
		  },{
		    "featureType": "poi",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "road",
		    "elementType": "labels",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "featureType": "landscape",
		    "stylers": [
		      { "visibility": "simplified" }
		    ]
		  }
		];

		map = new google.maps.Map(d3.select("#map").node(), {
		  zoom: baseZoom,
		  center: getCentre($("#city").val()), //new google.maps.LatLng(52.206412, 4.831373),
		  mapTypeId: google.maps.MapTypeId.TERRAIN,
		  styles: customStyle
		});

		google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
		    // do something only the first time the map is loaded
		    console.log("here");
		    callback();
		    drawn = true
		});

		// var m_width = $("#map").width();

		// var centered,
		// 	mapWidth = 450,
		//     mapHeight = 600;

		// var projection = d3.geo.albers()
		//     .center([10, 52.3])
		//     .rotate([4.4, 0])
		//     .parallels([50, 60])
		//     .scale(1200 * 3.5)
		//     .translate([mapWidth / 2, mapHeight / 2]);

		// var path = d3.geo.path()
		//     .projection(projection);

		// var svg = d3.select("#map").append("svg")
		// 	.attr("id", "svg-map")
		//     .attr("width", m_width)
		//     .attr("height", m_width * mapHeight / mapWidth)
		//     .attr("preserveAspectRatio", "xMidYMid")
		// 	.attr("viewBox", "0 0 " + mapWidth + " " + mapHeight);

		// var gMap = svg.append("g");

		// d3.json("data/provinces.geojson", function(error, townships) {
		// 	// holland
		// 	console.log("townships:", townships);
		// 	// gMap.selectAll("path")
  //  //      		.data(townships.features);
   
  //       	gMap.selectAll("path").data(townships.features).enter().append("path")
		// 	    .attr("d", path)
		// 	    .style("fill", "none")
		// 	    .style("stroke", "black");

		// 	// var holland = gMap.selectAll(".region")
		// 	//     .data(topojson.feature(townships, townships.features).features, function(a){ return a})
		// 	//   	.enter();
		// 	// holland.append("path")
		// 	//   	.attr("d", path)
		// 	//   	.attr("data-region-id", "reg06")
		// 	//     .attr("data-region-name", "Scotland")
		// 	//     .attr("class", function(d){ return checkForEngland(d, "map-region")})
		// 	//     .on("click", clicked);
		// 	// holland.append("text")
		// 	// 	.attr("class", function(d){ return checkForEngland(d, "map-region-label")})
		// 	//     .attr("data-region-id", "reg06")
		// 	//     .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
		// 	//     .attr("dy", ".35em")
		// 	//     .text(function(d) { return d.properties.name; });
		// 	// });
		// });
	}

	function addCircles() {

		data = [
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.389129,lon:4.908442},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.344084,lon:4.928226},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.37729,lon:4.814029},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.420983,lon:4.889677},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.41845,lon:4.892421},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.418296,lon:4.874969},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.41543,lon:4.893808},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.414566,lon:4.800253},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.411373,lon:4.907756},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.410391,lon:4.749098},
{city:"Amsterdam",year:2015,type:"Crowdfunding",lat:52.410273,lon:4.869604},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.409252,lon:4.92003},
{city:"Amsterdam",year:2015,type:"Crowdfunding",lat:52.408702,lon:4.872007},
{city:"Amsterdam",year:2015,type:"Crowdfunding",lat:52.406975,lon:4.873896},
{city:"Amsterdam",year:2015,type:"Crowdfunding",lat:52.405456,lon:4.876127},
{city:"Amsterdam",year:2015,type:"Crowdfunding",lat:52.404147,lon:4.878445},
{city:"Amsterdam",year:2015,type:"Crowdfunding",lat:52.402576,lon:4.88059},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.402209,lon:4.929042},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.401961,lon:4.893272},
{city:"Amsterdam",year:2015,type:"Crowdfunding",lat:52.400953,lon:4.882479},
{city:"Amsterdam",year:2015,type:"Hardware design",lat:52.399172,lon:4.884796},
{city:"Amsterdam",year:2015,type:"Farmer Market",lat:52.398661,lon:4.938333},
{city:"Amsterdam",year:2015,type:"Makers space",lat:52.397549,lon:4.888058},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.397274,lon:4.881792},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.396082,lon:4.76459},
{city:"Amsterdam",year:2015,type:"Tasksharing",lat:52.395558,lon:4.890547},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.394262,lon:4.837182},
{city:"Amsterdam",year:2015,type:"Ridesharing",lat:52.393516,lon:4.892864},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.392874,lon:4.915545},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.392835,lon:4.853768},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.392363,lon:4.869776},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.391578,lon:4.904194},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.391329,lon:4.860742},
{city:"Amsterdam",year:2015,type:"Skillsharing",lat:52.391054,lon:4.894323},
{city:"Amsterdam",year:2015,type:"Free Store",lat:52.390918,lon:4.860541},
{city:"Amsterdam",year:2015,type:"Cooperative",lat:52.390774,lon:4.850478},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.389325,lon:4.846795},
{city:"Amsterdam",year:2015,type:"Goods Bartering",lat:52.388225,lon:4.895525},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.387885,lon:4.865677},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.38613,lon:4.917927},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.385344,lon:4.896727},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.384126,lon:4.902508},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.383929,lon:4.905624},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.383825,lon:4.879818},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.383615,lon:4.905353},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.383543,lon:4.888286},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.383524,lon:4.902112},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.38338,lon:4.780211},
{city:"Amsterdam",year:2015,type:"Goodsharing",lat:52.382777,lon:4.898186},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.382723,lon:4.842896},
{city:"Amsterdam",year:2015,type:"Makers space",lat:52.382484,lon:4.921483},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.382476,lon:4.829006},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.38224,lon:4.819908},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.382231,lon:4.921568},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.381808,lon:4.83819},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.381376,lon:4.911983},
{city:"Amsterdam",year:2015,type:"Booksharing",lat:52.38131,lon:4.947453},
{city:"Amsterdam",year:2015,type:"Goods Bartering",lat:52.381205,lon:4.939814},
{city:"Amsterdam",year:2015,type:"Booksharing",lat:52.381205,lon:4.951315},
{city:"Amsterdam",year:2015,type:"Carsharing",lat:52.381205,lon:4.955091},
{city:"Amsterdam",year:2015,type:"Timebanking",lat:52.381153,lon:4.943676},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.381101,lon:4.936037},
{city:"Amsterdam",year:2015,type:"Tasksharing",lat:52.380943,lon:4.932261},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.380904,lon:4.817805},
{city:"Amsterdam",year:2015,type:"Mealsharing",lat:52.380839,lon:4.928226},
{city:"Amsterdam",year:2015,type:"DIY",lat:52.380839,lon:4.958868},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.380823,lon:4.87041},
{city:"Amsterdam",year:2015,type:"Ridesharing",lat:52.380734,lon:4.901018},
{city:"Amsterdam",year:2015,type:"Carsharing",lat:52.380577,lon:4.923763},
{city:"Amsterdam",year:2015,type:"DIY",lat:52.38,lon:4.961958},
{city:"Amsterdam",year:2015,type:"Carsharing",lat:52.379948,lon:4.918785},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.379843,lon:4.826989},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.379736,lon:4.87203},
{city:"Amsterdam",year:2015,type:"Skillsharing",lat:52.379529,lon:4.904795},
{city:"Amsterdam",year:2015,type:"Goodsharing",lat:52.379319,lon:4.909687},
{city:"Amsterdam",year:2015,type:"Carsharing",lat:52.379319,lon:4.913979},
{city:"Amsterdam",year:2015,type:"Farmer Market",lat:52.379282,lon:4.886434},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.378979,lon:4.843211},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.378795,lon:4.829457},
{city:"Amsterdam",year:2015,type:"Goodsharing",lat:52.378691,lon:4.964962},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.378481,lon:4.838598},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.377982,lon:4.881744},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.377446,lon:4.908421},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.377293,lon:4.814016},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.376712,lon:4.92212},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.376621,lon:4.922218},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.376555,lon:4.861879},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.376495,lon:4.84121},
{city:"Amsterdam",year:2015,type:"Free Store",lat:52.376297,lon:4.800668},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.375883,lon:4.908295},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.375715,lon:4.888374},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.375285,lon:4.810874},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.375245,lon:4.896018},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.374407,lon:4.844885},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.374198,lon:4.935586},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.374106,lon:4.845872},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.374025,lon:4.845514},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.373863,lon:4.877778},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.373857,lon:4.846323},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.373739,lon:4.896061},
{city:"Amsterdam",year:2015,type:"Free Store",lat:52.373451,lon:4.845057},
{city:"Amsterdam",year:2015,type:"News",lat:52.373294,lon:5.018349},
{city:"Amsterdam",year:2015,type:"News",lat:52.373294,lon:5.025558},
{city:"Amsterdam",year:2015,type:"News",lat:52.373294,lon:5.03294},
{city:"Amsterdam",year:2015,type:"News",lat:52.373267,lon:5.045385},
{city:"Amsterdam",year:2015,type:"News",lat:52.373241,lon:5.039463},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.373149,lon:4.858146},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.373071,lon:4.814394},
{city:"Amsterdam",year:2015,type:"FabLab",lat:52.373058,lon:4.900137},
{city:"Amsterdam",year:2015,type:"Farmer Market",lat:52.372343,lon:4.900149},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.372036,lon:4.92651},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.371761,lon:4.889538},
{city:"Amsterdam",year:2015,type:"Farmer Market",lat:52.371616,lon:4.938611},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.371145,lon:4.841859},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.37108,lon:4.932196},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.370274,lon:4.954481},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.370005,lon:4.961421},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.369688,lon:4.8547},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.369625,lon:4.835958},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.369586,lon:4.835965},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.369023,lon:4.801283},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.368669,lon:4.911382},
{city:"Amsterdam",year:2015,type:"News",lat:52.368499,lon:5.033069},
{city:"Amsterdam",year:2015,type:"News",lat:52.368499,lon:5.039377},
{city:"Amsterdam",year:2015,type:"News",lat:52.368472,lon:5.01852},
{city:"Amsterdam",year:2015,type:"News",lat:52.368472,lon:5.02573},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.368289,lon:4.869025},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.367372,lon:4.946144},
{city:"Amsterdam",year:2015,type:"Makers space",lat:52.366976,lon:4.937145},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.366926,lon:4.938612},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.366613,lon:4.862316},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.366127,lon:4.80521},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.364817,lon:4.944384},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.364345,lon:4.798751},
{city:"Amsterdam",year:2015,type:"LETS",lat:52.364208,lon:4.941739},
{city:"Amsterdam",year:2015,type:"Free Store",lat:52.363946,lon:4.987779},
{city:"Amsterdam",year:2015,type:"LETS",lat:52.363555,lon:4.869719},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.363488,lon:4.834998},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.363363,lon:4.867415},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.363048,lon:4.801219},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.36302,lon:4.883173},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.363009,lon:4.932518},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.362956,lon:4.988952},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.362891,lon:4.835658},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.362646,lon:4.980601},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.36234,lon:4.946058},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.361548,lon:4.925566},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.361502,lon:4.828942},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.36124,lon:4.83952},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.360702,lon:4.876921},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.360646,lon:4.791902},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.360513,lon:4.88765},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.36044,lon:4.823599},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.360087,lon:4.865613},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.359851,lon:4.942088},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.359811,lon:4.767444},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.359405,lon:4.989724},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.35931,lon:4.852079},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.359012,lon:4.806721},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.358566,lon:4.855914},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.358304,lon:4.931531},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.358136,lon:4.783516},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.357099,lon:4.927711},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.356509,lon:4.814844},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.356391,lon:4.805188},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.356229,lon:4.921827},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.356018,lon:4.9389},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.35592,lon:4.881169},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.355801,lon:4.786348},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.355611,lon:4.82583},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.355593,lon:4.924929},
{city:"Amsterdam",year:2015,type:"Free Store",lat:52.355593,lon:4.924929},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.355461,lon:5.00159},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.355015,lon:4.918571},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.35501,lon:4.922133},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.354923,lon:4.917691},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.354624,lon:4.893368},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.354347,lon:4.855399},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.354284,lon:4.854048},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.353744,lon:4.911983},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.353377,lon:4.898808},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.352699,lon:4.882497},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.352001,lon:4.91709},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.351865,lon:4.889467},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.351529,lon:4.912713},
{city:"Amsterdam",year:2015,type:"Farmer Market",lat:52.351201,lon:4.929729},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.351096,lon:4.912069},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.350703,lon:4.83201},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.347819,lon:4.863961},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.345512,lon:4.826453},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.34508,lon:4.907885},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.344896,lon:4.864862},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.342838,lon:4.885011},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.341475,lon:4.862266},
{city:"Amsterdam",year:2015,type:"Food Coop",lat:52.340867,lon:4.900681},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.33728,lon:4.921424},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.336507,lon:4.885426},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.336454,lon:4.926274},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.33589,lon:4.873338},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.334657,lon:4.807141},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.332655,lon:4.875906},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.332568,lon:4.938565},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.332559,lon:4.858875},
{city:"Amsterdam",year:2015,type:"Coworking",lat:52.330618,lon:4.921703},
{city:"Amsterdam",year:2015,type:"Squatted Social Center",lat:52.330396,lon:4.810445},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.326685,lon:4.966335},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.324416,lon:4.977901},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.323931,lon:4.970605},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.32376,lon:4.975863},
{city:"Amsterdam",year:2015,type:"Creative Cooperative",lat:52.321491,lon:5.020537},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.320927,lon:4.943547},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.320403,lon:4.952796},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.316874,lon:4.970369},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.316258,lon:4.956229},
{city:"Amsterdam",year:2015,type:"Public Library",lat:52.315304,lon:4.951261},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.308072,lon:4.979789},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.307901,lon:4.983373},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.300055,lon:4.999187},
{city:"Amsterdam",year:2015,type:"Urban Farming",lat:52.297719,lon:4.990067},
{city:"Enschede",year:2015,type:"Cooperatives for entrepreneurship",lat:52.23660458,lon:6.856541634},
{city:"Enschede",year:2015,type:"Coworking",lat:52.23192295,lon:6.890471578},
{city:"Enschede",year:2015,type:"Public Library",lat:52.2316655,lon:6.8964658},
{city:"Enschede",year:2015,type:"Artists Collective",lat:52.2296241,lon:6.8972921},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.22885064,lon:6.8518298},
{city:"Enschede",year:2015,type:"Public Library",lat:52.2287354,lon:6.8580298},
{city:"Enschede",year:2015,type:"Artists Collective",lat:52.2287246,lon:6.861777},
{city:"Enschede",year:2015,type:"Artists Collective",lat:52.22758529,lon:6.896686364},
{city:"Enschede",year:2015,type:"Park",lat:52.22622219,lon:6.929626465},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.2233978,lon:6.9016908},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.22191082,lon:6.894489527},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.22190753,lon:6.894382238},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.22166016,lon:6.892814},
{city:"Enschede",year:2015,type:"Tasksharing",lat:52.221558,lon:6.891049},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.22100016,lon:6.893639},
{city:"Enschede",year:2015,type:"Coworking",lat:52.22067516,lon:6.895272732},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.22063901,lon:6.905121803},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.22053616,lon:6.897005},
{city:"Enschede",year:2015,type:"Booksharing",lat:52.22053056,lon:6.895787716},
{city:"Enschede",year:2015,type:"Park",lat:52.220293,lon:6.879492},
{city:"Enschede",year:2015,type:"Fablab",lat:52.2200533,lon:6.887069655},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.2197527,lon:6.8938691},
{city:"Enschede",year:2015,type:"Public Library",lat:52.21921,lon:6.893414},
{city:"Enschede",year:2015,type:"Cooperatives for entrepreneurship",lat:52.2184191,lon:6.892706336},
{city:"Enschede",year:2015,type:"Cooperatives for entrepreneurship",lat:52.2180833,lon:6.8927091},
{city:"Enschede",year:2015,type:"Goods Bartering",lat:52.2176779,lon:6.883100867},
{city:"Enschede",year:2015,type:"Park",lat:52.216598,lon:6.914118},
{city:"Enschede",year:2015,type:"Public Library",lat:52.2151119,lon:6.9729729},
{city:"Enschede",year:2015,type:"Waste reduction",lat:52.213943,lon:6.896892},
{city:"Enschede",year:2015,type:"Public Library",lat:52.2114314,lon:6.8594631},
{city:"Enschede",year:2015,type:"Public Library",lat:52.1917993,lon:6.8816176},
{city:"Gravenhage",year:2015,type:"Currencies",lat:52.105978,lon:4.2619229},
{city:"Utrecht",year:2015,type:"FabLab",lat:52.1023,lon:5.080162},
{city:"Gravenhage",year:2015,type:"Waste reduction",lat:52.0988078,lon:4.2460442},
{city:"Gravenhage",year:2015,type:"Alternative Collective for living and working",lat:52.0979049,lon:4.2658603},
{city:"Gravenhage",year:2015,type:"Vacancy & Redevelopment",lat:52.0960558,lon:4.3078734},
{city:"Utrecht",year:2015,type:"Coworking",lat:52.095331,lon:5.116928},
{city:"Utrecht",year:2015,type:"Coworking",lat:52.09266,lon:5.122253},
{city:"Gravenhage",year:2015,type:"Waste Reduction",lat:52.0911092,lon:4.2369461},
{city:"Utrecht",year:2015,type:"Coworking",lat:52.0903643,lon:5.1327874},
{city:"Utrecht",year:2015,type:"Coworking",lat:52.09033,lon:5.11224},
{city:"Utrecht",year:2015,type:"Coworking",lat:52.088938,lon:5.113211},
{city:"Utrecht",year:2015,type:"Cooperatives for entrepreneurship",lat:52.088101,lon:5.121629},
{city:"Gravenhage",year:2015,type:"Giftshop",lat:52.0850548,lon:4.2755027},
{city:"Gravenhage",year:2015,type:"Giftshop",lat:52.0839511,lon:4.3070076},
{city:"Gravenhage",year:2015,type:"Currencies",lat:52.0833038,lon:4.303422},
{city:"Gravenhage",year:2015,type:"Urban Farming",lat:52.0828159,lon:4.2902684},
{city:"Gravenhage",year:2015,type:"Waste reduction",lat:52.0804951,lon:4.296062},
{city:"Gravenhage",year:2015,type:"Alternative Collective for living and working",lat:52.0785433,lon:4.2928863},
{city:"Gravenhage",year:2015,type:"Urban Farming",lat:52.0772114,lon:4.2849898},
{city:"Gravenhage",year:2015,type:"Urban Farming",lat:52.0770531,lon:4.2915988},
{city:"Gravenhage",year:2015,type:"Artists Collective",lat:52.0766575,lon:4.2916632},
{city:"Gravenhage",year:2015,type:"City Garden",lat:52.0764728,lon:4.2813635},
{city:"Gravenhage",year:2015,type:"Coliving",lat:52.0754969,lon:4.2793465},
{city:"Utrecht",year:2015,type:"Cooperatives for entrepreneurship",lat:52.0738088,lon:5.0901675},
{city:"Gravenhage",year:2015,type:"Coliving",lat:52.0735978,lon:4.3046236},
{city:"Gravenhage",year:2015,type:"Urban Farming",lat:52.0733868,lon:4.3041515},
{city:"Gravenhage",year:2015,type:"FabLab",lat:52.0726451,lon:4.3108233},
{city:"Gravenhage",year:2015,type:"Coworking",lat:52.0723316,lon:4.3244934},
{city:"Gravenhage",year:2015,type:"Cooperatives for entrepreneurship",lat:52.0691661,lon:4.3231201},
{city:"Gravenhage",year:2015,type:"Artists Collective",lat:52.0657101,lon:4.3449211},
{city:"Gravenhage",year:2015,type:"Cooperatives for entrepreneurship",lat:52.0621681,lon:4.3361364},
{city:"Gravenhage",year:2015,type:"Urban Farming",lat:52.0558155,lon:4.3105888}
]
;

		console.log("data:", data);

		for (var i = 0; i < data.length; i++) {
			drawCircle(data[i]);
		}

	}


	function drawCircle(institution) {
		console.log("test");
		circle = new google.maps.Circle({
		  center: new google.maps.LatLng(institution.lat, institution.lon),
		  radius: 200,
		  strokeWeight:0,
		  fillColor:getColour(institution.type),
		  fillOpacity:0.8
		});

		circle.setMap(map);	

	}

	function getColour(type) {
		if (type.indexOf("sharing") != -1) {
			return "#d73027";
		} else if (type == "Urban Farming") {
			return "#f46d43";
		} else if (type == "Coworking") {
			return "#fdae61";
		} else if (type == "Creative Cooperative") {
			return "#fee090";
		} else if (type == "Squatted Social Center") {
			return "#ffffbf";
		} else if (type == "Goods Bartering") {
			return "#e0f3f8";
		} else if (type == "Public Library") {
			return "#abd9e9";
		} else if (type == "Crowdfunding") {
			return "#74add1";
		} else if (type == "Cooperatives for entrepreneurship") {
			return "#4575b4";
		}

		return "#000";
	}

	function getRandVal(max, min) {
		return Math.random() * (max - min) + min;
	}

	function initDropdowns() {
		$("#city").on("change", function() {
			if (drawn) {
				map.setCenter(getCentre($(this).val()));
			}
		})
	}

	function getCentre(city) {
		if (city == "Amsterdam") {
			return new google.maps.LatLng(52.370337, 4.890366);
		} 
		if (city == "Eindhoven") {
			return new google.maps.LatLng(51.440547, 5.471421);	
		}
		if (city == "Enschede") {
			return new google.maps.LatLng(52.221576, 6.892578);	
		}
		if (city == "Gravenhage") {
			return new google.maps.LatLng(52.068046, 4.299910);	
		}
		if (city == "Rotterdam") {
			return new google.maps.LatLng(51.921537, 4.488338);	
		}
		if (city == "Utrecht") {
			return new google.maps.LatLng(52.090706, 5.113732);	
		}

		if (drawn) map.setZoom(baseZoom);
		return new google.maps.LatLng(52.141625, 4.902232);	
	}


	var my = {};

	my.drawMap = function(callback){
		drawMap(function(){
			addCircles();
			callback();
		});
	}

	my.init = function() {
		initDropdowns();
	}

    return my;
});