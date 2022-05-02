const { add } = require('../src/index')

test(`测试函数：${add.name}`, () => {
  expect(add(1, 2)).toBe('3')
})
