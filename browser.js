/*!
 * parse-gh-branch-identifier | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/parse-gh-branch-identifier
*/
(function() {
  'use strict';

  window.parseGhBranchIdentifier = function parseGhBranchIdentifier(str) {
    if (typeof str !== 'string') {
      throw new TypeError(
        String(str) + ' is not a string. Expected a string in the form "branch" or "username:branch".'
      );
    }

    if (str === '') {
      throw new Error(
        'Expected a string in the form "branch" or "username:branch", ' +
        'but received an empty string.'
      );
    }

    if (str.indexOf(':') !== -1) {
      return window.parseUserBranch(str);
    }

    if (/\s/.test(str)) {
      throw new Error(
        str +
        ' includes a white space. The string must be in the form "branch" or "username:branch".'
      );
    }

    return {branch: str};
  };
})();
