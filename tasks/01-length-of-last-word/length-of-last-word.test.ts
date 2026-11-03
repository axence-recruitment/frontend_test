import { describe, expect, it } from 'vitest';
import { lengthOfLastWord } from './length-of-last-word';

describe('lengthOfLastWord', () => {
  it.each([
    ['Hello World', 5],
    ['luffy is still joyboy', 6],
    ['a', 1],
    ['day', 3],
    ['Hello W', 1],
  ])('lengthOfLastWord(%j) → %j', (s, expected) => {
    expect(lengthOfLastWord(s)).toBe(expected);
  });

  describe('ignoruje spacje na początku, na końcu i wielokrotne spacje między słowami', () => {
    it.each([
      ['   fly me   to   the moon  ', 4],
      ['   word   ', 4],
    ])('lengthOfLastWord(%j) → %j', (s, expected) => {
      expect(lengthOfLastWord(s)).toBe(expected);
    });
  });

  it("obsługuje bardzo długie wejście: 'ab ' × 3000 + 'x' × 500 + ' ' × 500 → 500", () => {
    const s = 'ab '.repeat(3000) + 'x'.repeat(500) + ' '.repeat(500);
    expect(lengthOfLastWord(s)).toBe(500);
  });
});
