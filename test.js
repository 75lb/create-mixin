'use strict'
const createMixin = require('./')
const TestRunner = require('test-runner')
const a = require('assert')

const runner = new TestRunner()

runner.test('Simple', function () {
  class Something {
    one () { return 1 }
  }
  const something = createMixin(Something)

  class Test extends something(Array) {}

  const test = new Test()
  a.strictEqual(test.one(), 1)
  a.ok(test.forEach)
  a.ok(Test.from)
  test.push(1)
  test.push(2)
  a.strictEqual(test.length, 2)
  a.strictEqual(test[0], 1)
  a.strictEqual(test[1], 2)
  const test2 = Test.from([ 1, 2 ])
  a.strictEqual(test2[0], 1)
  a.strictEqual(test2[1], 2)
})
