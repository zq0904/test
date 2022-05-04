import fn from '@zeroer/company-test'

/**
 * 相加函数
 */
export function add(x: number, y: number) {
  return x + y
}

export function subtraction(x: number, y: number) {
  return x - y
}

export const random = () => Math.random()

console.log('运行了', fn())
