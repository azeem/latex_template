module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    shell: {
        resume: {
          options: {
          },
          command: "pdflatex -interaction=nonstopmode -output-directory=build *.tex"
        },
    },

    watch: {
      texFiles: {
        files: ['*.tex', '*.cls'],
        tasks: ['default']
      },
    },

    clean: {
        files: ["build/**/*"]
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['clean', 'shell']);
  grunt.registerTask('debug', ['shell', 'watch']);

};
