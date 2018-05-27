[![view on npm](https://img.shields.io/npm/v/create-mixin.svg)](https://www.npmjs.org/package/create-mixin)
[![npm module downloads](https://img.shields.io/npm/dt/create-mixin.svg)](https://www.npmjs.org/package/create-mixin)
[![Build Status](https://travis-ci.org/.svg?branch=master)](https://travis-ci.org/)
[![Dependency Status](https://david-dm.org/.svg)](https://david-dm.org/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_create-mixin"></a>

## create-mixin
<a name="exp_module_create-mixin--createMixin"></a>

### createMixin() ⏏
Create a function which case be used in an `extends` expression to mix in behaviour to the extended class.

**Kind**: Exported function  
**Example**  
```js
const mixin = require('create-mixin')

class Greeter {
   hello () { return 'Hello' }
}

class FriendlyArray extends mixin(Greeter)(Array) {}

const friendlyArray = FriendlyArray.from([ 1, 2, 3 ])
console.log('Length:', friendlyArray.length)
console.log('Greeting:', friendlyArray.hello())
// Length: 3
// Greeting: Hello
```

* * *

&copy; 2018 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).