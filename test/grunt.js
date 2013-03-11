module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    'html-prettyprinter': {
      all: {
        src: ['test_files/file.html'],
        dest: 'actual/file.html'
      }
    },
    'html-prettyprinter-dir': {
      all: {
        src: ['test_files/dir/*.html'],
        dest: 'actual/dir/'
      }
    },
    test: {
      all: '*_test.js'
    }
  });

  // Load local tasks.
  grunt.loadTasks('../tasks');

  // Run project task then tests.
  grunt.registerTask('default', 'html-prettyprinter html-prettyprinter-dir test');
};