const createMixin = require('./')
const TestRunner = require('test-runner')
const a = require('assert')

const runner = new TestRunner()

runner.test('Simple', function () {
  class Something {
    one () { return 1 }
  }
  const mixSomethingInto = createMixin(Something)

  class Test extends mixSomethingInto(Array) {}

  const test = new Test()
  /* test is a Something */
  a.strictEqual(test.one(), 1)
  a.ok(!(test instanceof Something))

  /* test is also an Array */
  a.ok(test instanceof Array)
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
