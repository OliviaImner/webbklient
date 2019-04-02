$(document).ready(function () {
    
//vid tryck i textfälten i footer, så visas meddelanden. 
    $("#newl_mail").click(function () {
        $("#mail_mess").show();
        $("#name_mess").hide();
    } );
   $("#newl_name").click(function () {
        $("#name_mess").show();
        $("#mail_mess").hide();
    } );
  //validerar om mailadressen har rätt format  
     function Mailvalidation(mail) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(mail);
    };
    $("#sub_validate").live("click", function () {
        if (!Mailvalidation($("#newl_mail").val())) {
            alert("Ogiltig mailadress!");
        }
        else {
            alert("Giltig mailadress!");
        }
    });
});
