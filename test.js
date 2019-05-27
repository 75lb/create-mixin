const mixInto = require('./')
const Tom = require('test-runner').Tom
const a = require('assert')

const tom = module.exports = new Tom('test')

tom.test('Demo', function () {
  class Base {
    constructor () {
      this.ranBaseConstructor = true
    }
    baseMethod () {
      return 1
    }
  }

  class Mixin {
    constructor () {
      this.ranMixinConstructor = true
    }
    someMethod () {
      return 2
    }
  }

  class Something extends mixInto(Mixin)(Base) {}
  const something = new Something()

  /* Only base constructor is run */
  a.ok(something.ranBaseConstructor)
  a.ok(!something.ranMixinConstructor)

  /* Mixin methods are mixed in */
  a.strictEqual(something.baseMethod(), 1)
  a.strictEqual(something.someMethod(), 2)

  /* instance is only an instanceof Base */
  a.ok(something instanceof Base)
  a.ok(!(something instanceof Mixin))
})
