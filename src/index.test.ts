import { add, greet } from '.';
import { expect, it } from 'vitest'

it('add', () => {
  expect(add(1, 2)).toBe(3)
})

it('greet', () => {
  expect(greet('John')).toBe('Hello, John!')
})