import os

os.mkdir("www")
os.mkdir("www/js")
os.mkdir("www/js/app")

grunt_file = open("www/gruntfile.js", "w")
index_file = open("www/index.html", "w")
css_file = open("www/style.css", "w")
package_file = open("www/package.json", "w")
appjs_file = open("www/js/app.js", "w")
compiler_file = open("www/GET_NODE_MODULES.bat","w")
mainjs_file = open("www/js/app/main.js", "w")
readme_file = open("www/readme.txt", "w")
grunt_file.write("""module.exports=function(a){a.initConfig({pkg:a.file.readJSON("package.json"),watch:{coffee:{files:"js/**/*.coffee"}},bump:{files:["package.json"]},uglify:{src:{files:{"build/node_modules/requirejs/require.js":["node_modules/requirejs/require.js"],"build/node_modules/jquery/dist/jquery.min.js":["node_modules/jquery/dist/jquery.min.js"]}},min:{files:{"build/build.min/node_modules/jquery/dist/jquery.min.js":["build/node_modules/jquery/dist/jquery.min.js"],"build/build.min/node_modules/requirejs/require.js":["build/node_modules/requirejs/require.js"],"build/build.min/js/app/main.js":["build/js/app/main.js"],"build/build.min/js/app.js":["build/js/app.js"],"gruntfile.min.js":["gruntfile.js"]}}},copy:{js:{files:[{expand:!0,cwd:"./",src:"index.html",dest:"Build"},{expand:!0,cwd:"./js/app",src:"main.js",dest:"Build/js/app"},{expand:!0,cwd:"./js",src:"app.js",dest:"Build/js"},{expand:!0,cwd:"./",src:"style.css",dest:"Build"}]},min:{files:[{expand:!0,cwd:"./",src:"index.html",dest:"Build/build.min"},{expand:!0,cwd:"./",src:"style.css",dest:"Build/build.min"}]}},coffee:{move:{expand:!0,cwd:"js",src:"**/*.coffee",dest:"Build/js",ext:".js",watch:!0}}}),a.loadNpmTasks("grunt-contrib-watch"),a.loadNpmTasks("grunt-exec"),a.loadNpmTasks("grunt-contrib-coffee"),a.loadNpmTasks("grunt-contrib-copy"),a.loadNpmTasks("grunt-bumpx"),a.loadNpmTasks("grunt-contrib-uglify"),a.registerTask("default",["coffee","watch"]),a.registerTask("build",["coffee","copy:js","uglify:src"]),a.registerTask("min",["coffee","copy:min","uglify:min:"])};""")
index_file.write("""
<!DOCTYPE html>
<html>
<head>
	<title>Example One</title>
	<link rel="stylesheet" type="text/css" href="style.css">
<script data-main="js/app.js" src="node_modules/requirejs/require.js"></script>
</head>
<body>
<div id='start_box'></div>
<div id='end_box'></div>
</body>
</html>
""")

css_file.write("""
#start_box{
    font-size: 30px;
    background-color: #e5eca7;
    height: 200px;
    width: 250px;
    border: 1px solid;
}

#end_box{
	    font-size: 30px;
	background-color: #a7e7ec;
    height: 200px;
    width: 250px;
    border: 1px solid;
}
""")

package_file.write("""
{
  "name": "www",
  "version": "1.0.0-2",
  "description": "pls work",
  "author": "Jon",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.1.1",
    "requirejs": "^2.1.22"
  },
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-bumpx": "~0.1.5",
    "grunt-contrib-coffee": "~0.7.0",
    "grunt-contrib-copy": "~0.4.1",
    "grunt-contrib-requirejs": "~0.4.1",
    "grunt-contrib-uglify": "^2.0.0",
    "grunt-contrib-watch": "~0.5.3",
    "grunt-exec": "~0.4.0",
    "grunt-replace": "~0.4.4",
    "grunt-shell": "~0.2.1",
    "requirejs": "~2.1.8",
    "underscore": "~1.5.2"
  }
}
""")

appjs_file.write("""(function(){requirejs.config({shim:{"app/main":{deps:["../node_modules/jquery/dist/jquery.min.js"],exports:"main"}}}),define(["app/main"],function(a){var b;return $("#start_box").text("click here to move this text. it will be reversed.."),b=$("#start_box").html(),window.backway=b.split("").reverse().join(""),$("#end_box").click(function(){return $("#end_box").text(""),$("#start_box").text(b)})})}).call(this);""")
mainjs_file.write("""(function(){$(document).ready(function(){return $("#start_box").text("click here to move this text. it will be reversed..")}),$("#start_box").click(function(){}),$("#start_box").click(function(){return $("#end_box").html("<b>Reversed</b>: <br>"+window.backway),$("#start_box").text("")}),$("#end_box").click(function(){return console.log("Structure is in app.js")})}).call(this);""")
compiler_file.write("""echo off
cls
echo Installing Node Modules from package.json...
@start npm update
TIMEOUT /T 15 /NOBREAK
@echo "Waiting for modules to install before running grunt file..
@start grunt build
""")

readme_file.write("""
For grunt..
Grunt Build: Compiles all the coffeescript files into javascript files..
Grunt Min: Requires Grunt Build but minifies all the compiled javascript files using uglify
""")

readme_file.close()
compiler_file.close()
appjs_file.close()
mainjs_file.close()
package_file.close()
index_file.close()
grunt_file.close()
