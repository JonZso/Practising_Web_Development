module.exports = function(grunt)
{
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch:
  {
    coffee:
      {
          files: 'js/**/*.coffee'
      },

  },
  bump:
{
    files: [ 'package.json' ]

},
uglify: {
  src: {
      files: {
        'build/node_modules/requirejs/require.js': ['node_modules/requirejs/require.js'],
        'build/node_modules/jquery/dist/jquery.min.js': ['node_modules/jquery/dist/jquery.min.js']
      }

  },
  min: {
      files: {
        // 'build/js/require.js': ['node_modules/requirejs/require.js'],
        'build/build.min/js/lib/jquery.js': ['build/node_modules/jquery/dist/jquery.min.js'],
        'build/build.min/js/require.js': ['build/node_modules/requirejs/require.js'],
        'build/build.min/js/app/main.js': ['build/js/app/main.js'],
        'build/build.min/js/app.js': ['build/js/app.js'],
        'gruntfile.min.js' : ['gruntfile.js']

    }
  },

  },
copy:
{
  js:
  {
    files:
    [
      {
        expand: true,
        cwd: './',
        src: 'index.html',
        dest: 'Build'
      },
      {
        expand: true,
        cwd: './',
        src: 'style.css',
        dest: 'Build'
      }
    ]
  },
  min:
  {
    files:
    [
      {
        expand: true,
        cwd: './',
        src: 'index.html',
        dest: 'Build/build.min'
      },
      {
        expand: true,
        cwd: './',
        src: 'style.css',
        dest: 'Build/build.min'
      }
    ]
  },

},
  coffee:
  {
    move:
    {
      expand: true,
      cwd: 'js',
      src: '**/*.coffee',
      dest: 'Build/js',
      ext: '.js',
      watch: true
    }
  }
  });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bumpx');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['coffee','watch']);
    grunt.registerTask('build', ['coffee','copy:js', 'uglify:src']);
    grunt.registerTask('min', ['coffee','copy:min', 'uglify:min:']);
};


// Running default runs all.. coffee (comiple cs to js) first.. then watches coffee..
// running watch watches CoffeeScript
// running coffe compiles
