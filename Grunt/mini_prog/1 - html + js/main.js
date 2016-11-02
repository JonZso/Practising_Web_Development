

$(document).ready(function(){
	$("#start_box").text('Here is some written text. That will be moved and reversed.');	
    $("#start_box").one("click",function(){ //one("click,") - Enables One Click ONLY
    	test = $("#start_box").html();
	    backway = test.split("").reverse().join("");
        $('#end_box').html("<b>Reversed:</b> <br>"+backway).wrap()
        $('#start_box').text('');
        // alert("The paragraph was clicked.");
		// $($('#start_box').contents()).appendTo('#end_box')    	
    });

	$('#end_box').click(function() {
    	location.reload();
	});

});

