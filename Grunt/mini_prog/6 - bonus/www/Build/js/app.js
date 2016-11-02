(function() {
  requirejs.config({
    shim: {
      'app/main': {
        deps: ['../node_modules/jquery/dist/jquery.min.js'],
        exports: 'main'
      }
    }
  });

  define(['app/main'], function(jquery) {
    var $x;
    $('#start_box').text('click here to move this text. it will be reversed..');
    $x = $('#start_box').html();
    window.backway = $x.split("").reverse().join("");
    return $("#end_box").click(function() {
      $("#end_box").text("");
      return $("#start_box").text($x);
    });
  });

}).call(this);
