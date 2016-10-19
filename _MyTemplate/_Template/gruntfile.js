module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options:{
				manage: false
			},
			my_target:{
				files: {
					'style/js/main.min.js' : ['style/js/main.js'] // making_newfile.min || [old_x.js]
				}
			}
		},
		
		cssmin: {
			dist: {
				 files: {
					'style/css/background.min.css': ['style/css/background.css'] // new cssmin'd file | [old file] 
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};