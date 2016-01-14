# parse-gh-branch-identifier

[![NPM version](https://img.shields.io/npm/v/parse-gh-branch-identifier.svg)](https://www.npmjs.com/package/parse-gh-branch-identifier)
[![Bower version](https://img.shields.io/bower/v/parse-gh-branch-identifier.svg)](https://github.com/shinnn/parse-gh-branch-identifier/releases)
[![Build Status](https://travis-ci.org/shinnn/parse-gh-branch-identifier.svg)](https://travis-ci.org/shinnn/parse-gh-branch-identifier)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-gh-branch-identifier.svg)](https://coveralls.io/github/shinnn/parse-gh-branch-identifier?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/parse-gh-branch-identifier.svg)](https://david-dm.org/shinnn/parse-gh-branch-identifier)
[![devDependency Status](https://david-dm.org/shinnn/parse-gh-branch-identifier/dev-status.svg)](https://david-dm.org/shinnn/parse-gh-branch-identifier#info=devDependencies)

Parse a branch identifier string that is available for [Github](https://github.com/) [commit comparison API](https://developer.github.com/v3/repos/commits/#compare-two-commits)

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install parse-gh-branch-identifier
```

#### [Bower](http://bower.io/)

```
bower install parse-gh-branch-identifier
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/parse-gh-branch-identifier/master/browser.js)

## API

### parseGhBranchIdentifier(*str*)

*str*: `String` (`branch` or `username:branch` style string)  
Return: `Object` (`{[username: ...,] branch: ...}`)

It extracts a branch name (and username if available) from a `branch` or `username:branch` string and creates an object.

```javascript
parseGhBranchIdentifier('patch-1');
//=> {branch: 'patch-1'}

parseGhBranchIdentifier('shinnn:patch-1');
//=> {username: 'shinnn', branch: 'patch-1'}
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
