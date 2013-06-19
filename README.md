# grunt-html-prettyprinter [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

Task that beautifies your HTML

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-html-prettyprinter`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-html-prettyprinter');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
```js
grunt.initConfig({
  // Beautify single file
  'html-prettyprinter': {
    single: {
      // HTML file to beauty
      src: 'dirty/index.html',

      // Destination of HTML file
      dest: 'clean/index.html'
    },

    // Multiple files are accepted and concatenated in order by a line feed
    multi: {
      src: ['dirty/index.html', 'dirty/main.html'],
      dest: 'clean/index.html'
    },

    // Lastly, we support the grunt compact format (dest: src)
    'clean/index.html': 'dirty/index.html'
  },
  // Beautify multiple files in a directory
  'html-prettyprinter-dir': {
    multi: {
      // Files to beautify
      src: ['dirty/index.html', 'dirty/main.html'],

      // Directory to output beautified files to
      dest: 'clean/'
    },

    // Minimatch expansion is supported
    expansion: {
      // Expands to ['dirty/index.html', 'dirty/main.html']
      src: ['dirty/*.html'],
      dest: 'clean/'
    },

    // Custom routing is supported
    routing: {
      src: ['dirty/index.html', 'dirty/main.html'],
      dest: 'clean/',
      // Rename all files to .pretty.html
      router: function (file) {
        var filename = path.basename(file);
        return filename.replace('.html', '.pretty.html');
      }
    },

    // Lastly, we support the grunt compact format (dest: src)
    'clean/': ['dirty/index.html', 'dirty/main.html']
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint your code using [grunt][grunt] and test via `npm test`..

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Todd Wolfson
Licensed under the MIT license.