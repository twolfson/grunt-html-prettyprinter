/*
 * grunt-html-prettyprinter
 * https://github.com/twolfson/grunt-html-prettyprinter
 *
 * Copyright (c) 2012 Todd Wolfson
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('html-prettyprinter', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('html-prettyprinter'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('html-prettyprinter', function() {
    return 'html-prettyprinter!!!';
  });

};
