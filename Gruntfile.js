module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/*.js', 'test/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    // grunt-contrib-connect will serve the files of the project
    // on specified port and hostname
    connect: {
      all: {
        options:{
          port: 8080,
          hostname: "0.0.0.0",
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  // Creates the `server` task
  grunt.registerTask('serve',[
    'connect'
  ]);
  grunt.registerTask('default', ['jshint', 'connect']);

};