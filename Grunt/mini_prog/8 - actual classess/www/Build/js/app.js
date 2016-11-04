(function() {
  require.config({
    baseUrl: 'Build/js',
    paths: {
      'jquery': '../../node_modules/jquery/dist/jquery'
    }
  });

  require(["jquery", "app/TextTools"], function($, TextTools) {
    var test;
    test = new TextTools($("#start_box"), $("#end_box"));
    return test.firstText('Click To Reverse');
  });

}).call(this);
