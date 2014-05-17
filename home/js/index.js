var circleDo = $('#circleDo');

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

