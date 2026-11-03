import { describe, expect, it } from 'vitest';
import { isPalindrome } from './valid-palindrome';

describe('isPalindrome', () => {
  describe('palindromy', () => {
    it.each([
      'A man, a plan, a canal: Panama',
      ' ',
      '.,!? ',
      'a',
      'Z',
      'Aa',
      'No lemon, no melon',
      '12:21',
      'abba',
      'abcba',
    ])('isPalindrome(%j) → true', (s) => {
      expect(isPalindrome(s)).toBe(true);
    });
  });

  describe('nie-palindromy', () => {
    it.each([
      'race a car',
      '0P',
      '1a2',
      'abca',
    ])('isPalindrome(%j) → false', (s) => {
      expect(isPalindrome(s)).toBe(false);
    });
  });

  describe('bardzo długie wejście', () => {
    const half = 'Ab1,'.repeat(25_000);
    const reversed = half.split('').reverse().join('');

    it("'Ab1,' × 25 000 + odwrócenie → true", () => {
      expect(isPalindrome(half + reversed)).toBe(true);
    });

    it('to samo z pierwszym znakiem zamienionym na Z → false', () => {
      expect(isPalindrome('Z' + half.slice(1) + reversed)).toBe(false);
    });
  });
});
