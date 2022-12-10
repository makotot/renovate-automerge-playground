import { add } from '.';
import { expect, it } from 'vitest'

it('add', () => {
  expect(add(1, 2)).toBe(3)
})