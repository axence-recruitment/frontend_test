import { describe, expect, it } from 'vitest';
import { isPalindrome } from './valid-palindrome';

describe('isPalindrome', () => {
  it('rozpoznaje palindrom ze znakami interpunkcyjnymi i wielkimi literami', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('odrzuca ciąg niebędący palindromem', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('traktuje ciąg bez znaków alfanumerycznych jako palindrom', () => {
    expect(isPalindrome(' ')).toBe(true);
    expect(isPalindrome('.,!? ')).toBe(true);
  });

  it('obsługuje pojedynczy znak', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('Z')).toBe(true);
  });

  it('nie rozróżnia wielkości liter', () => {
    expect(isPalindrome('Aa')).toBe(true);
    expect(isPalindrome('No lemon, no melon')).toBe(true);
  });

  it('uwzględnia cyfry jako znaki alfanumeryczne', () => {
    expect(isPalindrome('0P')).toBe(false);
    expect(isPalindrome('1a2')).toBe(false);
    expect(isPalindrome('12:21')).toBe(true);
  });

  it('obsługuje palindromy o parzystej i nieparzystej długości', () => {
    expect(isPalindrome('abba')).toBe(true);
    expect(isPalindrome('abcba')).toBe(true);
    expect(isPalindrome('abca')).toBe(false);
  });

  it('obsługuje bardzo długie wejście', () => {
    const half = 'Ab1,'.repeat(25_000);
    const reversed = half.split('').reverse().join('');
    expect(isPalindrome(half + reversed)).toBe(true);
    expect(isPalindrome('Z' + half.slice(1) + reversed)).toBe(false);
  });
});
