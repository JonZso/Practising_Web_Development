module.exports = function(grunt)
{
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // requirejs:
    // {
    //   compile:
    //   {
    //     options:
    //     {
    //       mainConfigFile: "js/app.js",
    //       dir: 'buildNew'
    //     }
    //   }
    // },
    concat:
    {
      options: {
        seperator: ";",

        stripBanners: true,
      },
      dist:{
        src:['Build/js/app.js', 'Build/js/app/TextTools.js'],
        dest: 'Build/js/app.newmin.js',
        tasks: 'uglify:min'

      }
    },

    uglify: {
      newapp: {
          files: {
            'build/node_modules/requirejs/require.js': ['node_modules/requirejs/require.js']
                  }

      },
      min: {
          files: {
            // 'build/js/require.js': ['node_modules/requirejs/require.js'],
            'build/js/app.TINY.js' : ['build/js/app.newmin.js']

        }

}
},

      coffee:
      {
        watch:
        {
          expand: true,
          cwd: 'CoffeeAppNew',
          src: '**/*.coffee',
          dest: 'JsAppNew',
          ext: '.js'
        },
        move:
        {
          expand: true,
          cwd: 'js',
          src: '**/*.coffee',
          dest: 'Build/js',
          ext: '.js',
          watch: true
        }
      },
      watch:
      {
        options:
        {
          nospawn: true
        },
        coffee:
        {
          files: 'js/**/*.coffee',
          tasks: 'coffee:watch',
          options:
          {
            events: ['changed', 'added']
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');



    grunt.registerTask('default', ['concat']);
    grunt.registerTask('z', ['uglify']);

  };
