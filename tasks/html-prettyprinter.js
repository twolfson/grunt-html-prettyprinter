/*
 * grunt-html-prettyprinter
 * https://github.com/twolfson/grunt-html-prettyprinter
 *
 * Copyright (c) 2012 Todd Wolfson
 * Licensed under the MIT license.
 */
var htmlPrettyprinter = require('html').prettyPrint,
    path = require('path'),
    gruntRetro = require('grunt-retro');
module.exports = function (grunt) {
  // Bind grunt-retro
  grunt = gruntRetro(grunt);

  // Manual fallback for 0.4 compatibility ;_;
  // and without introducing bulky/unnecessary dependencies
  // https://github.com/gruntjs/grunt/blob/0.3-stable/tasks/concat.js#L33-L41
  // https://github.com/gruntjs/grunt-lib-legacyhelpers/blob/master/lib/legacyhelpers.js#L16-L24
  grunt.registerHelper('concat', function(files, options) {
    options = grunt.utils._.defaults(options || {}, {
      separator: grunt.utils.linefeed
    });
    return files ? files.map(function(filepath) {
      // return grunt.task.directive(filepath, grunt.file.read);
      return grunt.file.read(filepath);
    }).join(grunt.utils.normalizelf(options.separator)) : '';
  });

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  // Common abstraction for single and dir tasks
  // Beautify single file
  grunt.registerMultiTask('html-prettyprinter', 'Prettyprint HTML from src to dest', function () {
    // Run the prettyprint task on our single item
    grunt.helper('html-prettyprinter-file', this);

    // Fail task if errors were logged.
    if (this.errorCount) { return false; }

    // Otherwise, print a success message.
    grunt.log.writeln('File "' + this.file.dest + '" created.');
  });

  // Beautify directory of files
  var defaultRouter = path.basename;
  grunt.registerMultiTask('html-prettyprinter-dir', 'Prettyprint HTML directory from src to dest', function () {
    // Localize information
    var file = this.file,
        data = this.data,
        router = data.router || defaultRouter,
        src = file.src,
        destDir = file.dest,
        srcFiles = grunt.file.expand(src);

    // Iterate over files and pretty print each one
    var destFiles = srcFiles.map(function prettyprintDirFile (srcFile) {
      // Determine the end path for the file
      var destFile = router(srcFile),
          destPath = path.join(destDir, destFile);

      // Run the prettyprint task on our single item
      grunt.helper('html-prettyprinter-file', {
        file: {src: srcFile, dest: destPath},
        data: data
      });

      // Return the destination
      return destPath;
    });

    // Fail task if errors were logged.
    if (this.errorCount) { return false; }

    // Otherwise, print a success message.
    grunt.log.writeln('File "' + destFiles.join('", "') + '" created.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('html-prettyprinter-file',  function prettyprintFile (options) {
    // Collect the filepaths we need
    var file = options.file,
        data = options.data,
        src = file.src,
        srcFiles = grunt.file.expand(src),
        separator = data.separator || '\n',
        dest = file.dest;

    // Read in the srcFiles, join, and beautify it
    var srcBlob = grunt.helper('concat', srcFiles, {separator: separator}),
        beautifiedContent = grunt.helper('html-prettyprinter', srcBlob);

    // Write out the content
    grunt.file.write(dest, beautifiedContent);
  });

  grunt.registerHelper('html-prettyprinter', function prettyprintContent (content) {
    var beautifiedContent = htmlPrettyprinter(content);
    return beautifiedContent;
  });

};
