$(document).ready ->
  $('#start_box').text('click here to move this text. it will be reversed..')

	$("#start_box").click ->



	$("#start_box").click ->
		 $("#end_box").html("<b>Reversed</b>: <br>" + window.backway)
		 $("#start_box").text("")
	
	$("#end_box").click ->
    console.log("Structure is in app.js")







# Original
	#
	# $('#start_box').text('click here to move this text. it will be reversed..')
	# $x = $('#start_box').html()
	#
	# $("#start_box").click ->
	# 	 $backway = $x.split("").reverse().join("");
	# 	 $("#end_box").html("<b>Reversed</b>: <br>" + $backway)
	# 	 $("#start_box").text("")
	#
	# $("#end_box").click ->
	# 	 $("#end_box").text("")
	# 	 $("#start_box").text($x)
