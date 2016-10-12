/**
 * Created by Oxygen on 11/10/2016.
 */

module.exports = function (grunt){
    //
    // grunt.registerTask("default","",function () {
    //    grunt.log.write("This task is useless");
    //
    // });



    //Configure main project settings
    grunt.initConfig({

        //basic settings and infor about our plugins.
        pkg: grunt.file.readJSON('package.json'),

        //name of plugin (plugin name without the grunt.contrib)

        cssmin: {
            dist: {
                files: {
                    'html/css/min.css': ['html/css/background.css']
                }
            }
        }



    });

    //loadplugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //dotask
    grunt.registerTask('default',['cssmin']);
    grunt.log.write("CSS Shortend");

};


