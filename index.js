'use strict'

/**
 * @module create-mixin
 */

/**
 * Create a function which case be used in an `extends` expression to mix in behaviour to the extended class.
 * @example
 * const mixin = require('create-mixin')
 *
 * class Greeter {
   hello () { return 'Hello' }
 * }
 *
 * class FriendlyArray extends mixin(Greeter)(Array) {}
 *
 * const friendlyArray = FriendlyArray.from([ 1, 2, 3 ])
 * console.log('Length:', friendlyArray.length)
 * console.log('Greeting:', friendlyArray.hello())
 * // Length: 3
 * // Greeting: Hello
 *
 * @alias module:create-mixin
 */
function createMixin (Src) {
  return function (Base) {
    class Mixed extends Base {}
    for (const propName of Object.getOwnPropertyNames(Src.prototype)) {
      if (propName === 'constructor') continue
      Object.defineProperty(Mixed.prototype, propName, Object.getOwnPropertyDescriptor(Src.prototype, propName))
    }
    return Mixed
  }
}

module.exports = createMixin
