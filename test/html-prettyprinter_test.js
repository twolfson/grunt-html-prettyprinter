var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['html-prettyprinter'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'multiTask': function(test) {
    test.expect(1);
    // tests here
    var expectedContent = grunt.file.read('expected/file.html'),
        actualContent = grunt.file.read('actual/file.html');
    test.equal(actualContent, expectedContent, 'should match the beautified content.');
    test.done();
  }
};
