/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    latex: {
        resume: {
          options: {
            outputDirectory: 'build/'
          },
          src: ['document.tex']
        },
    },

    watch: {
      texFiles: {
        files: 'document.tex',
        tasks: ['default']
      },
    },
    
    open: {
        file: {
            path: "build/document.pdf"
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-open');

  // Default task.
  grunt.registerTask('default', ['latex']);
  grunt.registerTask('debug', ['latex', 'open',  'watch']);

};
