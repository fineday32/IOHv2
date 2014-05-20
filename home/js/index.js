var circleDo = $('#circleDo');
var rect = $('#rectangle');

circleDo.ready(function(){
	// console.log('haha');
	
	// if ($('canvas[id=circleDo]').hasClass('bigCircle'))
	// 	console.log('bigCircle');
	// if ($('canvas[id=circleDo]').hasClass('smallCircle'))
	// 	console.log('smallCircle');
	var x=95, y=50;
	for (i=1; i<=15; i++)
	{	
		if (i%5===1)
		{
			drawCircle(1, x, y);
			circleOption();
		}
		else
			drawCircle(0, x, y);

		if (i%5===1 || i%5===0)
			x+=110;
		else
			x+=80;
	}
	
});

function drawCircle(size, x, y){
	var radius;
	if (size === 1)
		// console.log('big');
		radius = 50;
	else 
		// console.log('small');
		radius = 30
	var c = document.getElementById("circleDo");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI);
	var dashList = [3, 3];  // Create 3x3 dots and spaces
	ctx.setLineDash(dashList);
	// set line color
    ctx.strokeStyle = '#ffffff';
	ctx.stroke();
}

function circleOption(){
	console.log('circleOption');
}

rect.ready(function(){
	console.log('in rectangle');
	var redCount=30, allCount=170;
	var x=35, y=5;
	for (i=1; i<=allCount; i++)
	{
		
		if (i<=redCount)	
		{
			// red is rgb(202, 0, 13)
			drawRect(x, y, "rgb(202, 0, 13)");
			x+=60;
		}
		else
		{
			// gray is rgb(143, 146, 142)
			drawRect(x, y, "rgb(143, 146, 142)");
			x+=60;
		}
		if (i%23===0)
		{
			x=35;
			y+=60;
		}
	}
	
	
});

function drawRect(x, y, color){
	var c=document.getElementById("rectDraw");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth="1";
	// rgb(202, 0, 13)
	ctx.strokeStyle=color;
	ctx.rect(x,y,50,50); 
	ctx.fillStyle=color;
	ctx.fill();
	ctx.stroke();
}