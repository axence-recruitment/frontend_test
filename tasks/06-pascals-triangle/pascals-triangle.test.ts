import { describe, expect, it } from 'vitest';
import { generate } from './pascals-triangle';

describe('generate', () => {
  it.each([
    [1, [[1]]],
    [2, [[1], [1, 1]]],
    [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
  ])('generate(%j) → %j', (numRows, expected) => {
    expect(generate(numRows)).toEqual(expected);
  });

  it('generate(7)[6] → [1,6,15,20,15,6,1]', () => {
    expect(generate(7)[6]).toEqual([1, 6, 15, 20, 15, 6, 1]);
  });

  it('generate(10): 10 wierszy, wiersz i ma i+1 elementów, zaczyna i kończy się na 1', () => {
    const rows = generate(10);
    expect(rows).toHaveLength(10);
    rows.forEach((row, i) => {
      expect(row, `wiersz ${i}`).toHaveLength(i + 1);
      expect(row[0], `wiersz ${i}, pierwszy element`).toBe(1);
      expect(row[row.length - 1], `wiersz ${i}, ostatni element`).toBe(1);
    });
  });

  it('generate(30): wiersz 29 ma środkowe wartości 77558760 i sumę 2^29', () => {
    const rows = generate(30);
    expect(rows).toHaveLength(30);
    expect(rows[29][14]).toBe(77558760);
    expect(rows[29][15]).toBe(77558760);
    expect(rows[29].reduce((sum, x) => sum + x, 0)).toBe(2 ** 29);
  });
});
