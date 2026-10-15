import { describe, expect, it } from 'vitest';
import { lengthOfLastWord } from './length-of-last-word';

describe('lengthOfLastWord', () => {
  it('zwraca długość ostatniego słowa', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });

  it('ignoruje spacje na początku, na końcu i wielokrotne spacje między słowami', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
  });

  it('obsługuje dłuższe zdania', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
  });

  it('obsługuje pojedyncze słowo', () => {
    expect(lengthOfLastWord('a')).toBe(1);
    expect(lengthOfLastWord('day')).toBe(3);
  });

  it('obsługuje pojedyncze słowo otoczone spacjami', () => {
    expect(lengthOfLastWord('   word   ')).toBe(4);
  });

  it('obsługuje ostatnie słowo jednoliterowe', () => {
    expect(lengthOfLastWord('Hello W')).toBe(1);
  });

  it('obsługuje bardzo długie wejście', () => {
    const s = 'ab '.repeat(3000) + 'x'.repeat(500) + ' '.repeat(500);
    expect(lengthOfLastWord(s)).toBe(500);
  });
});
