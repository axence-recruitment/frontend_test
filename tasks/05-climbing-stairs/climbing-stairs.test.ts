import { describe, expect, it } from 'vitest';
import { climbStairs } from './climbing-stairs';

describe('climbStairs', () => {
  it('obsługuje jeden stopień', () => {
    expect(climbStairs(1)).toBe(1);
  });

  it('obsługuje przykłady z treści zadania', () => {
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
  });

  it('zwraca poprawne wyniki dla małych n', () => {
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
    expect(climbStairs(10)).toBe(89);
  });

  it('zwraca poprawne wyniki dla większych n', () => {
    expect(climbStairs(20)).toBe(10946);
    expect(climbStairs(30)).toBe(1346269);
  });

  it('wydajnie obsługuje maksymalne n', { timeout: 1000 }, () => {
    expect(climbStairs(45)).toBe(1836311903);
  });
});
