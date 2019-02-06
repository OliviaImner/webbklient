$(document).ready(function(){
	
	$('#signingUp').validate({
		//debug: true,
		errorElement: "span",
		rules: {
			username: {
				required: true,
				minlength: 4
			},
			password: {
				required: true,
				rangelength: [6,20]
			},
			confirm_password: {
				equalTo:'#password'
			},
			name: 'required',
			email: {
				required: true,
				email: true
			}
		}, //regler
		messages: {
			username: {
				required: "Fyll i ditt användarnamn!",
      			minlength: jQuery.format("Minst {0} tecken krävs!")
			},
			password: {
				required: "Fyll i ett lösenord!",
				rangelength: jQuery.format("Lösenordet måste vara mellan {0}-{1} tecken långt!")
			},
			confirm_password: {
				equalTo:'Lösenorden matchar inte!'
			},
			name: "Fyll i ditt namn!",
			email: {
				required: "Fyll i din mail!",
				email: "Fyll i en giltig mail!"
			}
		}, 
        //meddelanden 
		submitHandler: function(form) {
		    window.alert("Allt är ifyllt korrekt!");
		    return false;
  		}
	});
    //validerar
    
	$(':text,:password').focus(function(){
		$(this).css('border', '2px solid red');
	});//röd runt om textfältet 
    
	$(':text,:password').blur(function(){
		$(this).css('border', '');
	});
	$(':text:first').focus();
	$(':radio').click(function(){
		if($(this).val() == 'Hund')
			disableCheckboxes();
		else
			enableCheckboxes();
	}); //om radiobox hund är vald inaktivera kryssrutor
});

function disableCheckboxes(){
	$(':checkbox').each(function(){
		if($(this).val()!='R'){
			$(this).attr('disabled', true);
		}
	});
}
function enableCheckboxes(){
	$(':checkbox').each(function(){
		if($(this).val()!='R'){
			$(this).attr('disabled', false);
		}
	});
}