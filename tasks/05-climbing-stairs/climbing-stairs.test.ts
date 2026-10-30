import { describe, expect, it } from 'vitest';
import { climbStairs } from './climbing-stairs';

describe('climbStairs', () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 8],
    [10, 89],
    [20, 10946],
    [30, 1346269],
  ])('climbStairs(%j) → %j', (n, expected) => {
    expect(climbStairs(n)).toBe(expected);
  });

  it('wydajnie obsługuje maksymalne n: climbStairs(45) → 1836311903 (limit 1 s)', { timeout: 1000 }, () => {
    expect(climbStairs(45)).toBe(1836311903);
  });
});
