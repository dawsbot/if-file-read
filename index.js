'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function (files, opts) {
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    if (opts && opts.prepend) {
      file = path.join(opts.prepend, files[i]);
    }

    try {
      return fs.readFileSync(file, 'utf8');
    } catch (err) {}
  }
  throw new Error('No files found');
};
