module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      source: {
        files: ["sass/**/*.scss"],
        tasks: ["sass"], //runs the sass task
        options: {
          livereload: true // needed to run LiveReload
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "public/stylesheets/style.css": "sass/style.scss"
        }
      }
    }
  });

  // Load Grunt plugins
  //grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
};
