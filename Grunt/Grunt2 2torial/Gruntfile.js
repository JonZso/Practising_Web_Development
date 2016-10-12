/**
 * Created by Oxygen on 11/10/2016.
 */

module.exports = function (grunt) {
    //
    // grunt.registerTask("default", "", function () {
    //     grunt.log.write("This task is useless");
    //
    // });


    grunt.initConfig({


        js2coffee: {

            // Example: this target compiles a single file from JavaScript to CofeeScript
            single: {
                src: 'html/cs.coffee.js',
                dest: 'html/tt.coffee'
            }

        }

    });


    //loadplugin
    grunt.loadNpmTasks('grunt-js2coffee');


    //dotask
    grunt.registerTask('default', ['js2coffee']);
    grunt.log.write("CSS Shortend");


};


