$(document).ready(function(){

	$('.panel').hide();
	$('.panel:first-child').show();

	$('.tabs a').click(function(evt){
		var tabSelect = $(this).attr('href');
		$('.panel').hide();
		$(tabSelect).show();
		evt.preventDefault();
	});
    
        var tool;
    $('.trigger').hover(function(evt){
        var width, heigth;
        tool = $(this).attr('data-tooltip');
        var Offset = $(this).offset();
        width = $(this).width;
        heigth = $(this).heigth;
        
        $(tool).show();
        $(tool).offset({
            left: Offset.left+20,
            top: Offset.top+20
        });  
    },function(){
        $(tool).hide();
    });

});