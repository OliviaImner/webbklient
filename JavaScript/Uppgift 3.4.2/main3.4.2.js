$(document).ready(function(){

	var imageSrcArray = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg','dog4.jpg', 'dog5.jpg'];
	var i = 0;

	var imageArray = []
	for(var x = 0; x < imageSrcArray.length; x++) {
		imageArray[x] = new Image();
		imageArray[x].src = imageSrcArray[x];
	}
    //vid klick ändras bilderna                              
$('#imageViewer').click(function() {
		if(++i > imageArray.length-1)
			i=0;
		$(this).attr('src', imageArray[i].src);
	});
//när muspekaren drar över bilden ändras bilden
	$('#rollover').hover(function() {
		$(this).attr('src', imageArray[2].src);
	}, function(){
		$(this).attr('src', imageArray[0].src);
	});
    
    var canvas = document.getElementById("drawingCanvas");
	var ctx = canvas.getContext("2d");
    
    //blå linje med bredd på 10.
    ctx.lineWidth = 10;
	ctx.strokeStyle = "darkblue";
    //Butt värdet på en linje 
    ctx.moveTo(0,50);
	ctx.lineTo(540,600);
	ctx.lineCap = "butt";
	ctx.stroke();
    //rundad linje 
    ctx.beginPath();
	ctx.moveTo(30,120);
	ctx.lineTo(800,120);
	ctx.lineCap = "round";
	ctx.stroke();
    
    // variabler för att rita en kurva
	var centerX = 500;
	var centerY = 300;
	var radius = 100;
	var startingAngle = 1.25 * Math.PI;
	var endingAngle = 1.75 * Math.PI;
	// Kurvan ritas
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, startingAngle, endingAngle);
	ctx.stroke();
    
   //kruvad linje med bezier
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.bezierCurveTo(20,100,200,100,200,200);
    ctx.stroke();
    
    //save används för att kunna komma tillbaka från att skugga ett objekt
	ctx.save();
	//Cirkeln
	ctx.beginPath();
    ctx.arc(800, 800, 50, 0, Math.PI * 2, true); 
	ctx.closePath();
	ctx.fillStyle = "#000000";
	ctx.shadowColor = "grey";
	ctx.shadowBlur = 20;
	ctx.shadowOffsetX = 15;
	ctx.shadowOffsetY = 15;
	ctx.fill();
    ctx.moveTo(100,12);

	//återställer context till när det sparades innan triangeln ritades
	ctx.restore();
    
    // skriver ut en text
	ctx.font = "bold 60px 'Raleway',sans-serif";
	ctx.textBaseline = "top";
	ctx.fillStyle = "black";
	ctx.fillText("Hej, hej!", 600, 150);
    
    	// Bilden ritas ut i vänstra hörnet
	ctx.beginPath();
	var img1 = new Image();
	img1.src = "dog.jpg";
	img1.onload = function() {
    ctx.drawImage(img1, 1, 500);
	};
    	// En genomskinlig fyrkant
	ctx.beginPath();
	ctx.translate(75, 110);
	ctx.rect(0, 0, 50, 50);
	ctx.closePath();
	ctx.fillStyle = "rgba(100,150,185,0.5)";
	ctx.fill();

	//återställer noll punkten
	ctx.translate(-100, -110);
    
    ctx.save();
	// En triangel som skiftar färg
	ctx.beginPath();
	ctx.moveTo(400,400);
	ctx.lineTo(300,500);
	ctx.lineTo(550,500);
	ctx.lineTo(400,400);
    
	ctx.closePath();
	var gradient = ctx.createLinearGradient(100, 10, 450, 0);
	gradient.addColorStop(0, "cyan");
	gradient.addColorStop(1, "pink");
	ctx.fillStyle = gradient;
	ctx.fill();

	ctx.restore();
	
    //rektangel som använder mönster
	ctx.beginPath();
    ctx.translate(75, 110);
	ctx.rect(500, 500, 170, 170);
	ctx.closePath();
	var img2 = new Image();
	img2.src = "pattern.jpg";
	var pattern = ctx.createPattern(img2, "repeat");
	ctx.fillStyle = pattern;

	ctx.fill();
    //url för canvas bilden
    var url = canvas.toDataURL();
	$('#save').html(url);

});