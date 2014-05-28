var h=window.innerHeight,
	w=window.innerWidth,
	margin={top:20,bottom:20,left:40,right:40};

var svg=d3.select("body").append("svg")
				 .attr({
				 	width:w,
				 	height:h
				 });

var data=[
{x:100, y:50},
{x:45, y:25},
{x:74, y:29},
{x:87, y:45},
{x:15, y:43},
{x:1, y:18},
{x:90, y:23},
{x:1,y:2},
{x:10,y:10}
];

var xScale=d3.scale.linear()
		   .domain([0,d3.max(data,function(d){ return d.x;} )])
		   .range([margin.left,w-margin.right])

var yScale=d3.scale.linear()
		   .domain([0,d3.max(data,function(d){ return d.y;} )])
		   .range([margin.top,h-margin.bottom])

var xAxis=d3.svg.axis().scale(xScale).orient("bottom");
var yAxis=d3.svg.axis().scale(yScale).orient("left");


svg.append("g")
	.attr({
		"class":"axis",
		transform:"translate(" + [0, margin.top] +")"
	}).call(xAxis);

svg.append("g")
	.attr({
		"class":"axis",
		transform:"translate(" + [margin.left, 0] +")"
	}).call(yAxis);

svg.selectAll("circle")
	.data(data)
	.enter()
	.append("circle")
	.attr({
		cx:function(d){return xScale(d.x);},
		cy:function(d){return yScale(d.y);},
		r:5,
		fill:"black"
	});