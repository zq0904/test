import { describe, it, test, expect, vi } from 'vitest'
import { add } from '../src'

// test suite
describe('test index.ts', () => {
  // test case
  it(`test ${add.name}`, () => {
    const res = add(1, 2)
    expect(res).toEqual(3)
  })

  test('test jest.fn', () => {
    // jest.fn 模拟一个 add 函数
    // 设置函数的返回值
    const mockFn = vi
      .fn<number[], number>(() => 9)
      .mockImplementation(() => {
        // 改变函数的内部实现
        return 9
      })
    const res = mockFn(1, 2)
    expect(res).toBe(9)
    expect(mockFn).toBeCalled() // 预计 调用过了
    expect(mockFn).toBeCalledTimes(1) // 预计 调用了1次 捕获函数的调用情况

    mockFn.mockRestore() // 如果通过jest.spyOn mock 可以还原原始的方法
  })
})

export default {}
