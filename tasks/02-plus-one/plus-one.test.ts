import { describe, expect, it } from 'vitest';
import { plusOne } from './plus-one';

describe('plusOne', () => {
  it('zwiększa ostatnią cyfrę', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  it('obsługuje pojedynczą cyfrę', () => {
    expect(plusOne([0])).toEqual([1]);
    expect(plusOne([5])).toEqual([6]);
  });

  it('obsługuje przeniesienie na nową pozycję', () => {
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  it('obsługuje przeniesienie w środku liczby', () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
    expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
  });

  it('obsługuje liczby większe niż Number.MAX_SAFE_INTEGER', () => {
    const digits = [9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 1, 9, 9, 9];
    expect(plusOne(digits)).toEqual([9, 0, 0, 7, 1, 9, 9, 2, 5, 4, 7, 4, 0, 9, 9, 2, 0, 0, 0]);
  });

  it('obsługuje maksymalną długość wejścia (100 cyfr)', () => {
    const digits = Array(100).fill(9);
    expect(plusOne(digits)).toEqual([1, ...Array(100).fill(0)]);
  });
});
