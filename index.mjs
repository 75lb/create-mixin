/**
 * Creates a mixin for use in a class extends expression.
 * @module create-mixin
 */

/**
 * Returns a function (accepting a single `BaseClass` argument) which can be used to mix behaviour from the supplied `Src` class into `BaseClass`. Intended for use in an `extends` expression.
 * @example
 * const mix = require('create-mixin')
 *
 * class Greeter {
 *   hello () { return 'Hello' }
 * }
 *
 * class FriendlyArray extends mix(Greeter)(Array) {}
 *
 * const friendlyArray = FriendlyArray.from([ 1, 2, 3 ])
 * // friendlyArray is now both an Array and a Greeter.
 * console.log('Length:', friendlyArray.length)
 * console.log('Greeting:', friendlyArray.hello())
 * // Length: 3
 * // Greeting: Hello
 *
 * @alias module:create-mixin
 * @param {class} Src - The class containing the behaviour you wish to mix into another class.
 * @returns {function}
 */
function createMixin (Src) {
  return function (Base) {
    class Mixed extends Base {}
    for (const propName of Object.getOwnPropertyNames(Src.prototype)) {
      if (propName === 'constructor') continue
      Object.defineProperty(Mixed.prototype, propName, Object.getOwnPropertyDescriptor(Src.prototype, propName))
    }
    if (Src.prototype[Symbol.iterator]) {
      Object.defineProperty(Mixed.prototype, Symbol.iterator, Object.getOwnPropertyDescriptor(Src.prototype, Symbol.iterator))
    }
    return Mixed
  }
}

export default createMixin