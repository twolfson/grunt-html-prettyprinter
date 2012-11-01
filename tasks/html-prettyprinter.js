/*
 * grunt-html-prettyprinter
 * https://github.com/twolfson/grunt-html-prettyprinter
 *
 * Copyright (c) 2012 Todd Wolfson
 * Licensed under the MIT license.
 */
var htmlPrettyprinter = require('html').prettyPrint;
module.exports = function (grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('html-prettyprinter', 'Prettyprint HTML from src to dest', function () {
    // Collect the filepaths we need
    var file = this.file,
        src = file.src,
        srcFiles = grunt.file.expand(src),
        dest = file.dest;

    // Read in the srcFiles, join, and beautify it
    var srcContent = srcFiles.map(grunt.file.read),
        srcBlob = srcContent.join('\n'),
        beautifiedContent = grunt.helper('html-prettyprinter', srcBlob);

    // Write out the content
    grunt.file.write(dest, beautifiedContent);
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('html-prettyprinter', function (content) {
    var beautifiedContent = htmlPrettyprinter(content);
    return beautifiedContent;
  });

};
