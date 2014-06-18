[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-classes.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-classes) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-classes/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-classes)

# bespoke-classes

Deck status classes for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

> **Please note:** This plugin is in beta and designed for use with a future release of Bespoke.js

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-classes/master/dist/bespoke-classes.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-classes/master/dist/bespoke-classes.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  classes = require('bespoke-classes');

bespoke.from('#presentation', [
  classes()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.classes()
]);
```

## Classes

To help you create your own custom deck styles, this plugin provides the following classes:

<table>
   <tr>
    <td><b>bespoke-parent</b></td>
    <td>The deck's containing element</td>
   </tr>
   <tr>
    <td><b>bespoke-slide</b></td>
    <td>Every slide element</td>
   </tr>
   <tr>
    <td><b>bespoke-active</b></td>
    <td>The active slide</td>
   </tr>
   <tr>
    <td><b>bespoke-inactive</b></td>
    <td>All inactive slides</td>
   </tr>
   <tr>
    <td><b>bespoke-before</b></td>
    <td>All slides before the active slide</td>
   </tr>
   <tr>
    <td><b>bespoke-before-<em>n</em></b></td>
    <td>All slides before the active slide, with <em>n</em> value incrementing</td>
   </tr>
   <tr>
    <td><b>bespoke-after</b></td>
    <td>All slides after the active slide</td>
   </tr>
   <tr>
    <td><b>bespoke-after-<em>n</em></b></td>
    <td>All slides after the active slide, with <em>n</em> value incrementing</td>
   </tr>
</table>

## Package managers

### npm

```bash
$ npm install bespoke-classes
```

### Bower

```bash
$ bower install bespoke-classes
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
