(function() {
  $(document).ready(function() {
    return $('#start_box').text('click here to move this text. it will be reversed..');
  });

  $("#start_box").click(function() {});

  $("#start_box").click(function() {
    $("#end_box").html("<b>Reversed</b>: <br>" + window.backway);
    return $("#start_box").text("");
  });

  $("#end_box").click(function() {
    return console.log("Structure is in app.js");
  });

}).call(this);
