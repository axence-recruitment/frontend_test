import { describe, expect, it } from 'vitest';
import { plusOne } from './plus-one';

describe('plusOne', () => {
  describe('bez przeniesienia', () => {
    it.each([
      [[1, 2, 3], [1, 2, 4]],
      [[4, 3, 2, 1], [4, 3, 2, 2]],
      [[0], [1]],
      [[5], [6]],
    ])('plusOne(%j) → %j', (digits, expected) => {
      expect(plusOne(digits)).toEqual(expected);
    });
  });

  describe('z przeniesieniem', () => {
    it.each([
      [[9], [1, 0]],
      [[9, 9, 9], [1, 0, 0, 0]],
      [[1, 2, 9], [1, 3, 0]],
      [[8, 9, 9, 9], [9, 0, 0, 0]],
    ])('plusOne(%j) → %j', (digits, expected) => {
      expect(plusOne(digits)).toEqual(expected);
    });
  });

  it('obsługuje liczby większe niż Number.MAX_SAFE_INTEGER', () => {
    const digits = [9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 1, 9, 9, 9];
    expect(plusOne(digits)).toEqual([9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 2, 0, 0, 0]);
  });

  it('obsługuje maksymalną długość wejścia: [9 × 100] → [1, 0 × 100]', () => {
    const digits = Array(100).fill(9);
    expect(plusOne(digits)).toEqual([1, ...Array(100).fill(0)]);
  });
});
