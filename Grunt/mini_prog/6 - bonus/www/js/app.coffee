requirejs.config
  shim:
    'app/main':
     deps: ['../node_modules/jquery/dist/jquery.min.js'],
     exports: 'main'

define ['app/main'], (jquery) ->
	$('#start_box').text('click here to move this text. it will be reversed..')
	$x = $('#start_box').html()
	window.backway = $x.split("").reverse().join("")

	$("#end_box").click ->
		 $("#end_box").text("")
		 $("#start_box").text($x)
