import { max_number } from './index'

describe('max_number', () => {
  describe('given an empty array', () => {
    it('returns zero', () => {
      expect(max_number([])).toEqual(0)
    })
  })

  describe('given an array of numbers', () => {
    it('returns the highest number', () => {
      expect(max_number([1, 5, 3, -6])).toEqual(5)
    })
  })

})