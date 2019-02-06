	$(document).ready(function() {
// funktioner som gör det möjligt att gömma, visa och toggle kontrollerar de valda elementen för synlighet. show () körs om ett element är dolt. hide () körs om ett element är synligt och det skapar en växling mellan elementen.
    $('#hide').click(function(evt) {
		$('#divHide').hide();
		evt.preventDefault();
	});
	$('#show').click(function(evt) {
		$('#divShow').show();
		evt.preventDefault();
	});
	$('#toggle').click(function(evt) {
		$('#divToggle').toggle();
		evt.preventDefault();
	});
        
//Funktioner som tonar in eller ut och toogle som växlar mellan dessa.
        $('#fadeIn').click(function(evt) {
		$('#divFadeIn').fadeIn();
		evt.preventDefault();
	});
	$('#fadeOut').click(function(evt) {
		$('#divFadeOut').fadeOut();
		evt.preventDefault();
	});
	$('#fadeToggle').click(function(evt) {
		$('#divFadeToggle').fadeToggle();
		evt.preventDefault();
	});
    // tonas ner till 50%
	$('#fadeTo').click(function(evt) {
		$('#divFadeTo').fadeTo('normal', .50);
		evt.preventDefault();
	});
});