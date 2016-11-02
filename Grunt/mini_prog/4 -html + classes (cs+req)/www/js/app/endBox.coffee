$(document).ready ->
  $('#end_box').click ->
    console.log('Moving Text..')
    $("#start_box").text(window.x)
    $('#end_box').text("")
