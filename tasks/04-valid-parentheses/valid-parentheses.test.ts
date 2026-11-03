import { describe, expect, it } from 'vitest';
import { isValid } from './valid-parentheses';

describe('isValid', () => {
  describe('poprawne', () => {
    it.each([
      '()',
      '[]',
      '{}',
      '()[]{}',
      '([])',
      '{[()()]}',
      '(((([[[{{{}}}]]]))))',
    ])('isValid(%j) → true', (s) => {
      expect(isValid(s)).toBe(true);
    });
  });

  describe('niepoprawne', () => {
    it.each([
      ['(]', 'różne typy'],
      ['{)', 'różne typy'],
      ['([)]', 'zła kolejność zamykania'],
      ['{[}]', 'zła kolejność zamykania'],
      ['(', 'niezamknięty nawias'],
      ['(()', 'niezamknięty nawias'],
      ['{[]', 'niezamknięty nawias'],
      [')', 'zamykający bez pary'],
      ['())', 'zamykający bez pary'],
      ['][', 'zamykający bez pary'],
      ['()[]{', 'nieparzysta długość'],
    ])('isValid(%j) → false (%s)', (s) => {
      expect(isValid(s)).toBe(false);
    });
  });

  describe('bardzo długie wejście', () => {
    const deep = '('.repeat(2500) + '[]'.repeat(1000) + ')'.repeat(2500);

    it("'(' × 2500 + '[]' × 1000 + ')' × 2500 → true", () => {
      expect(isValid(deep)).toBe(true);
    });

    it('to samo + dodatkowy \')\' → false', () => {
      expect(isValid(deep + ')')).toBe(false);
    });

    it("'(' × 5000 → false", () => {
      expect(isValid('('.repeat(5000))).toBe(false);
    });
  });
});
