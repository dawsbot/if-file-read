# if-file-read
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![XO code style][xo-image]][xo-url]

> Return the content of the first file in array which exists

## Install

```
npm install --save if-file-read
```

## Usage

```js
const ifFileRead = require('if-file-read');

// Where c.txt is the only file:
ifFileRead(['a.txt', 'b.txt', 'c.txt']);
//=> 'contents of c.txt file'

// Where src/c.txt is the only file
ifFileRead(['a.txt', 'b.txt', 'c.txt'], {prepend: 'src'});
//=> 'contents of src/c.txt file'
```

## API

### ifFileRead(files, options)

Returns a `readFileSync` for the first valid file

#### Arguments

| Name    | Description                     |   Type   |  Default  |
| ------- | ------------------------------- | -------- |  -------  |
| files   | Array of file paths             | `array`  | arg required |
|options.prepend| string to prepend to each file| `string`  |''    |

#### Returns

Type: `string`

Throws `Error` `"No files found"` if none of the files exist

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

[npm-image]: https://badge.fury.io/js/if-file-read.svg
[npm-url]: https://npmjs.org/package/if-file-read
[travis-image]: https://travis-ci.org/dawsonbotsford/if-file-read.svg?branch=master
[travis-url]: https://travis-ci.org/dawsonbotsford/if-file-read
[xo-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
