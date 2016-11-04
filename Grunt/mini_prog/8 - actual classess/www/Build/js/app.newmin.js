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

(function() {
  define(['jquery'], function($) {
    var TextTools;
    return TextTools = (function() {
      function TextTools(start_box, end_box) {
        var _this = this;
        this.start_box = start_box;
        this.end_box = end_box;
        this.start_box.click(function() {
          return console.log('Clicked');
        });
        this.end_box.click(function() {
          return _this.revText(_this.dummy);
        });
      }

      TextTools.prototype.firstText = function(input) {
        this.dummy = input.split("").reverse().join("");
        return this.start_box.text(input);
      };

      TextTools.prototype.revText = function(input) {
        return this.end_box.text(input);
      };

      return TextTools;

    })();
  });

}).call(this);
