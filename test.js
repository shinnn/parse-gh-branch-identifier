'use strict';

const requireBowerFiles = require('require-bower-files');
const requireFromString = require('require-from-string');
const rollup = require('rollup');
const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');
const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.plan(11);

    t.strictEqual(main.name, 'parseGhBranchIdentifier', 'should have a function name.');

    t.deepEqual(main('a:b'), {username: 'a', branch: 'b'}, 'should parse a user:branch string.');

    t.deepEqual(main('a'), {branch: 'a'}, 'should parse a branch string.');

    t.throws(
      () => main(),
      /^TypeError.*undefined is not a string\. Expected a string in the form "branch" or "username:branch"\./,
      'should throw a type error when it takes no arguments.'
    );

    t.throws(
      () => main(1),
      /^TypeError.*1 is not a string\. Expected a string in the form "branch" or "username:branch"\./,
      'should throw a type error when it takes a non-string argument.'
    );

    t.throws(
      () => main(''),
      /^Error.*Expected a string in the form "branch" or "username:branch", but received an empty string\./,
      'should throw an error when it takes an empty string.'
    );

    t.throws(
      () => main('a b'),
      /^Error.*a b includes a white space\. The string must be in the form "branch" or "username:branch"\./,
      'should throw an error when the string includes a white space.'
    );

    t.throws(
      () => main('a::b'),
      /^Error.*a::b includes more than one colon\. The string must be in the form of "username:branch"\./,
      'should throw an error when the string includes multiple `:`.'
    );

    t.throws(
      () => main(':'),
      /^Error.*The string includes neither username nor branch\. /,
      'should throw an error when it takes `:`.'
    );

    t.throws(
      () => main(':b'),
      /^Error.*:b starts with `:`, in other words no username is specified\. /,
      'should throw an error when the string starts with `:`.'
    );

    t.throws(
      () => main('a:'),
      /Error.*a: ends with `:`, in other words no branch is specified\. /,
      'should throw an error when the string ends with `:`.'
    );
  });
}

global.window = {};
requireBowerFiles({self: true});

rollup.rollup({
  entry: require('./package.json')['jsnext:main'],
  plugins: [rollupPluginNodeResolve({jsnext: true})]
}).then(bundle => {
  runTest('require(\'parse-gh-branch-identifier\')', require('.'));
  runTest('window.parseGhBranchIdentifier', global.window.parseGhBranchIdentifier);
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code, 'index.jsnext.js'));
});
