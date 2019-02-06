
$(document).ready(function() {
    //pop-up fönster visas vid klick med meddelande 
	$('#linkAlert').click(function(evt) {
		window.alert('Här är alert popup!');
		evt.preventDefault();
	});	
    //pop-up fönster visas vid klick med textfält  
    $('#linkPrompt').click(function(evt) {
		window.prompt('Prompt!');
		evt.preventDefault();
	});
        //pop-up fönster visas vid klick med bekräftelse knappar 
	$('#linkConfirm').click(function(evt) {
		window.confirm('Confirm?');
		evt.preventDefault();
	});
    // Vid klick på pricken öppnas ett fönster (w=300 och h=400)
    var myWindow;
	$('#divLinkOpen').click(function(){
		myWindow = window.open('','','width=300,height=400');
	});
    //vid klick på nästa prick stängs det nya öppnade fönstret
	$('#divLinkClose').click(function(){
		myWindow.close('');
	});
    //ett alarm av en pop-up fönster visas efter 3 sekunder, detta återkommer tills länk har klickats på för att stänga av
    	var myvar;
	$('#setInterval').click(function(evt){
		myvar = window.setInterval(function(){
			alert("Alarm 1!")
		}, 3000);
		evt.preventDefault();
//stänger av alarm
	});
	$('#clearInterval').click(function(evt){
		window.clearInterval(myvar);
		evt.preventDefault();
	});
    //ett alarm av en pop-up fönster visas efter 3 sekunder,
	var myvar2;
	$('#setTimeout').click(function(evt){
		myvar2 = window.setTimeout(function(){
			alert("Alarm 2!")
		}, 3000);
		evt.preventDefault();
	});
    //stänger av alarm
	$('#clearTimeout').click(function(evt){
		window.clearTimeout(myvar);
		evt.preventDefault();
	});
});