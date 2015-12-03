define(["d3.min"], function(d3){

	var margin = {top: 30, right: 10, bottom: 50, left: 50};

	function drawChart(){
		//var data = [["A",0.012], ["B",-0.025], ["C",0.008], ["D",0.023], ["E",-0.009], ["F", 0.005]];
		$("#articles").empty();

		var data = getData();
		console.log("data:", data);

		margin = {top: 30, right: 10, bottom: 50, left: 50};
		var width = $("#articles").parent().width();

		if (data.length > 0) {
			d3.select("#articles")
			  .datum(data)
			    .call(columnChart()
			      .width(width)
			      .height(500)
			      .x(function(d, i) { 
			      	if ($("#city").val() != "each" ) {
			      		return d['Year'];
			      	} else {
			      		return d['City'];
			      	}
			      })
			      .y(function(d, i) { return d['pos'] || d['neg']; }));
		}
		
	}

	function getData() {
		var startingData = [	
{City:"Rotterdam-pos",Year:"2011-pos",pos:0.340740740740741},	{City:"Rotterdam-neg",Year:"2011-neg",neg:-0.0925925925925926},
{City:"Rotterdam-pos",Year:"2012-pos",pos:0.26657263751763},	{City:"Rotterdam-neg",Year:"2012-neg",neg:-0.101551480959097},
{City:"Rotterdam-pos",Year:"2013-pos",pos:0.296888888888889},	{City:"Rotterdam-neg",Year:"2013-neg",neg:-0.0577777777777778},
{City:"Rotterdam-pos",Year:"2014-pos",pos:0.319849482596425},	{City:"Rotterdam-neg",Year:"2014-neg",neg:-0.0743179680150517},
{City:"Rotterdam-pos",Year:"2015-pos",pos:0.371800377593933},	{City:"Rotterdam-neg",Year:"2015-neg",neg:-0.14008248725823},
{City:"Eindhoven-pos",Year:"2011-pos",pos:0.287878787878788},	{City:"Eindhoven-neg",Year:"2011-neg",neg:-0.121212121212121},
{City:"Eindhoven-pos",Year:"2012-pos",pos:0.25609756097561},	{City:"Eindhoven-neg",Year:"2012-neg",neg:-0.0731707317073171},
{City:"Eindhoven-pos",Year:"2013-pos",pos:0.28428927680798},	{City:"Eindhoven-neg",Year:"2013-neg",neg:-0.057356608478803},
{City:"Eindhoven-pos",Year:"2014-pos",pos:0.280839895013123},	{City:"Eindhoven-neg",Year:"2014-neg",neg:-0.041994750656168},
{City:"Eindhoven-pos",Year:"2015-pos",pos:0.358912696073108},	{City:"Eindhoven-neg",Year:"2015-neg",neg:-0.118753200006206},
{City:"Utrecht-pos",Year:"2011-pos",pos:0.321167883211679},	{City:"Utrecht-neg",Year:"2011-neg",neg:-0.116788321167883},
{City:"Utrecht-pos",Year:"2012-pos",pos:0.225749559082892},	{City:"Utrecht-neg",Year:"2012-neg",neg:-0.0987654320987654},
{City:"Utrecht-pos",Year:"2013-pos",pos:0.294748124330118},	{City:"Utrecht-neg",Year:"2013-neg",neg:-0.0503751339764201},
{City:"Utrecht-pos",Year:"2014-pos",pos:0.329065300896287},	{City:"Utrecht-neg",Year:"2014-neg",neg:-0.0742637644046095},
{City:"Utrecht-pos",Year:"2015-pos",pos:0.374490183251359},	{City:"Utrecht-neg",Year:"2015-neg",neg:-0.114223180610407},
{City:"Groningen-pos",Year:"2011-pos",pos:0.329113924050633},	{City:"Groningen-neg",Year:"2011-neg",neg:-0.126582278481013},
{City:"Groningen-pos",Year:"2012-pos",pos:0.248587570621469},	{City:"Groningen-neg",Year:"2012-neg",neg:-0.0677966101694915},
{City:"Groningen-pos",Year:"2013-pos",pos:0.273615635179153},	{City:"Groningen-neg",Year:"2013-neg",neg:-0.0586319218241042},
{City:"Groningen-pos",Year:"2014-pos",pos:0.301675977653631},	{City:"Groningen-neg",Year:"2014-neg",neg:-0.0642458100558659},
{City:"Groningen-pos",Year:"2015-pos",pos:0.360277762095636},	{City:"Groningen-neg",Year:"2015-neg",neg:-0.119957093660024},
{City:"Enschede-pos",Year:"2011-pos",pos:0.3},	{City:"Enschede-neg",Year:"2011-neg",neg:-0.25},
{City:"Enschede-pos",Year:"2012-pos",pos:0.139705882352941},	{City:"Enschede-neg",Year:"2012-neg",neg:-0.102941176470588},
{City:"Enschede-pos",Year:"2013-pos",pos:0.255639097744361},	{City:"Enschede-neg",Year:"2013-neg",neg:-0.0451127819548872},
{City:"Enschede-pos",Year:"2014-pos",pos:0.36036036036036},	{City:"Enschede-neg",Year:"2014-neg",neg:-0.0990990990990991},
{City:"Enschede-pos",Year:"2015-pos",pos:0.322714681440443},	{City:"Enschede-neg",Year:"2015-neg",neg:-0.153150969529086},
{City:"Gravenhage-pos",Year:"2011-pos",pos:0.259179265658747},	{City:"Gravenhage-neg",Year:"2011-neg",neg:-0.0626349892008639},
{City:"Gravenhage-pos",Year:"2012-pos",pos:0.214154169955275},	{City:"Gravenhage-neg",Year:"2012-neg",neg:-0.0807682188897658},
{City:"Gravenhage-pos",Year:"2013-pos",pos:0.252439408246774},	{City:"Gravenhage-neg",Year:"2013-neg",neg:-0.0604343720491029},
{City:"Gravenhage-pos",Year:"2014-pos",pos:0.265865299628779},	{City:"Gravenhage-neg",Year:"2014-neg",neg:-0.0853809439632314},
{City:"Gravenhage-pos",Year:"2015-pos",pos:0.312390756379827},	{City:"Gravenhage-neg",Year:"2015-neg",neg:-0.147053412080734},
{City:"Amsterdam-pos",Year:"2011-pos",pos:0.37753807106599},	{City:"Amsterdam-neg",Year:"2011-neg",neg:-0.0913705583756345},
{City:"Amsterdam-pos",Year:"2012-pos",pos:0.333333333333333},	{City:"Amsterdam-neg",Year:"2012-neg",neg:-0.09828699803426},
{City:"Amsterdam-pos",Year:"2013-pos",pos:0.370846730975348},	{City:"Amsterdam-neg",Year:"2013-neg",neg:-0.0704333180217425},
{City:"Amsterdam-pos",Year:"2014-pos",pos:0.385735906167234},	{City:"Amsterdam-neg",Year:"2014-neg",neg:-0.088157396897465},
{City:"Amsterdam-pos",Year:"2015-pos",pos:0.335569168516593},	{City:"Amsterdam-neg",Year:"2015-neg",neg:-0.107263888498609},
	]
		;

		var citySelected = $("#city").val(), 
			yearSelected = $("#year").val();

		var data = [];

		for (var i = 0; i < startingData.length; i++) {
			var datum = startingData[i];
			if (citySelected != "each") {
				// a city is selected, therefore use years for that city
				if (datum.City.substring(0, datum.City.indexOf("-")) == citySelected) {
					data.push(datum);
				}
			} else if (yearSelected != 0) {
				// year is selected, use cities for that year
				if (datum.Year == yearSelected) {
					data.push(datum);
				}
			} else {
				// nethier are selected, therefore display average
				// TODO - implement
				// for now, display all for 2015

			}
		}

		return data;
	}
	

	function columnChart() {

	    var width = 420,
	      xRoundBands = 0.2,
	      height = 420,
	      xValue = function(d) { 
	      	if ($("#city").val() != "each" ) {
		      		return d['Year'];
	      	} else {
	      		return d['City'];
	      	}
	      },
	      yValue = function(d) { return d['pos'] || d['neg']; },
	      xScale = d3.scale.ordinal(),
	      yScale = d3.scale.linear(),
	      yAxis = d3.svg.axis().scale(yScale).orient("left"),
	      xAxis = d3.svg.axis().scale(xScale);
	      

	  function chart(selection) {
	    selection.each(function(data) {

	      // Convert data to standard representation greedily;
	      // this is needed for nondeterministic accessors.
	      data = data.map(function(d, i) {
	        return [xValue.call(data, d, i), yValue.call(data, d, i)];
	      });
	    
	      // Update the x-scale.
	      xScale
	          .domain(data.map(function(d) { 
	          	return d[0];	
	          	//return d[0].substring(0, d[0].indexOf("-"));
	          } ))
	          .rangeRoundBands([0, width - margin.left - margin.right], xRoundBands);
	         
	      // Update the y-scale.
	      yScale
	          .domain(d3.extent(data.map(function(d) { return d[1];} )))
	          .range([height - margin.top - margin.bottom, 0])
	          .nice();

	      // Select the svg element, if it exists.
	      var svg = d3.select(this).selectAll("svg").data([data]);

	      // Otherwise, create the skeletal chart.
	      var gEnter = svg.enter().append("svg").append("g");
	      gEnter.append("g").attr("class", "bars");
	      gEnter.append("g").attr("class", "y axis");
	      gEnter.append("g").attr("class", "x axis");
	      gEnter.append("g").attr("class", "x axis zero");

	      // Update the outer dimensions.
	      svg .attr("width", width)
	          .attr("height", height);

	      // Update the inner dimensions.
	      var g = svg.select("g")
	          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	     // Update the bars.
	      var bar = svg.select(".bars").selectAll(".bar").data(data);
	      bar.enter().append("rect");
	      bar.exit().remove();
	      bar .attr("class", function(d, i) { return d[1] < 0 ? "bar negative" : "bar positive"; })
	          .attr("x", function(d, i) { 
	          	// console.log("d:", d);
	          	// console.log("d[0]:", d[0]);
	          	// console.log("X(d):", X(d));

	          	var xd1 =  X(d);
	          	var a;
	          	if (d[0].indexOf("pos") != -1) {
	          		a = [d[0].substring(0,d[0].indexOf("-")) + "-neg", d[1]];
	          	} else if (d[0].indexOf("neg") != -1) {
	          		a = [d[0].substring(0,d[0].indexOf("-")) + "-pos", d[1]];
	          	}

	          	var xd2 = X(a);

	          	var val = xd1 < xd2
	          		?	(xd2 - xd1) / 2 + xd1
	          		: 	(xd1 - xd2) / 2 + xd2

	          	return val; })
	          .attr("y", function(d, i) { return d[1] < 0 ? Y0() : Y(d); })
	          .attr("width", xScale.rangeBand())
	          .attr("height", function(d, i) { return Math.abs( Y(d) - Y0() ); });

	    // x axis at the bottom of the chart
	     g.select(".x.axis")
	        .attr("transform", "translate(0," + (height - margin.top - margin.bottom) + ")")
	        .call(xAxis.orient("bottom"));
	    
	    // zero line
	     g.select(".x.axis.zero")
	        .attr("transform", "translate(0," + Y0() + ")")
	        .call(xAxis.tickFormat("").tickSize(0));
	    
	    
	      // Update the y-axis.
	      g.select(".y.axis")
	        .call(yAxis);

        realignXaxis();
	          
	    });
	  }

	  function realignXaxis() {
	  	var ticks = $("#articles .x.axis:not(.zero) .tick");
	  	var indexToRemove = [];
	  	for (var i = 0; i < ticks.length - 1; i += 2) {
	  		var t1 = $(ticks[i]).attr("transform");
	  		var x1 = t1.substring(10, t1.indexOf(","));
	  		var t2 = $(ticks[i + 1]).attr("transform");
	  		var x2 = t2.substring(10, t2.indexOf(","));
	  		
	  		var x = (x2*1.0 - x1*1.0) / 2.0 + x1*1.0;
	  		$(ticks[i]).attr("transform", "translate(" + x + ",0)");
	  		indexToRemove.push(i + 1);	
	  		var text = $(ticks[i]).find("text").text();
	  		$(ticks[i]).find("text").text(text.substring(0, text.indexOf("-")));
	  	}

	  	for (var j = 0; j < indexToRemove.length; j++){
	  		ticks[indexToRemove[j]].remove();
	  	}
	  }


	// The x-accessor for the path generator; xScale ∘ xValue.
	  function X(d) {
	    return xScale(d[0]);
	  }

	  function Y0() {
	    return yScale(0);
	  }

	  // The x-accessor for the path generator; yScale ∘ yValue.
	  function Y(d) {
	    return yScale(d[1]);
	  }

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin = _;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.x = function(_) {
	    if (!arguments.length) return xValue;
	    xValue = _;
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return yValue;
	    yValue = _;
	    return chart;
	  };

	  return chart;
	}


	function initDropdowns() {
		$("#city, #year").on("change", function() {
			drawChart();
		})
	}


	var my = {};
	my.init = function(){
		drawChart();
		initDropdowns();
	}
    return my;
});