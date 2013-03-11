module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    'clean': ['actual/'],
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

  // Load in clean task (chdir is for grunt@0.4)
  process.chdir('..');
  grunt.loadNpmTasks('grunt-contrib-clean');
  process.chdir(__dirname);

  // Load local tasks.
  grunt.loadTasks('../tasks');

  // Run project task then tests.
  grunt.registerTask('default', 'clean html-prettyprinter html-prettyprinter-dir test');
};