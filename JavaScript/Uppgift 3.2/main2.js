
$(document).ready(function(){
    //tar bort texten när användaren klickar på knappen
    $("#text").css('border', '4px solid darkgrey');
        $("button").click(function(){
                    $("#text").remove();
        });
    //ändrar bakgrundfärgen till ljusblå när användare klickar på div.
    $('#change').click(function(){
		$(this).css('background-color','lightblue ');
	});
   //Bilden på valparna ändrar till en fullvuxen hund
    $("img").delay(1000).fadeOut(500, function() { 
        $(this).attr("src", "https://www.dropbox.com/s/az17790vjewy5mi/grown.jpg?raw=1").fadeIn(500);
        
        });
    //vid klick byter klassen toning till andra sidan av div
    $('#toggle').click(function(){
		$(this).toggleClass('Class1').toggleClass('Class2');
	   });
    //textinnehållet ändras till ny text
    $('#Content').click(function(){
		$(this).text('Nu är det ny text');
	});
    //färg ändras när muspekare drar över div
    $('#hover').hover(function(){
		$(this).css('background-color','#FFFFFF');
	},function(){
		$(this).css('background-color','#267272');
	});
    //visar koordinater vid klick 
    $('#mouseEvent').click(function(evt){
		$('#mouseEvent span').text('X = ' + evt.pageX + ', Y = ' + evt.pageY);
      	});
  //musen drar över rutan och sedan ut från den, då tas mouseover bort från diven
    $('#removeE').mouseover(function() {
		$(this).css('background-color','white');
	});

	$('#removeE').mouseout(function() { 
		$(this).css('background-color','lightpink');
		$('#removeE').unbind('mouseover');
		$('#removeE').unbind('mouseout');
	});
	//visar webbläsarens dimensioner 
    $('#windowSize span').text($(this).width()+'x'+$(this).height());
	$(window).resize(function(){
		$('#windowSize span').text($(this).width()+'x'+$(this).height());
	});
    //länk 
    	$('#preventLink').click(function(evt){
		evt.preventDefault();
	});
    //text som skrivs in i textrutan visas i div 
    	$('#textInput').keyup(function(){
		$('#getInfo span').text($('#textInput').val());
	});
    	$('#textInput').focus(function(){
		$(this).css('border','2px solid lightblue');
	});
	$('#textInput').blur(function(){
		$(this).css('border','');
	});
 });
