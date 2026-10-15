import { describe, expect, it } from 'vitest';
import { generate } from './pascals-triangle';

describe('generate', () => {
  it('zwraca jeden wiersz', () => {
    expect(generate(1)).toEqual([[1]]);
  });

  it('zwraca dwa wiersze', () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });

  it('zwraca pięć wierszy', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });

  it('zwraca poprawny siódmy wiersz', () => {
    expect(generate(7)[6]).toEqual([1, 6, 15, 20, 15, 6, 1]);
  });

  it('zwraca tablicę o odpowiedniej strukturze', () => {
    const rows = generate(10);
    expect(rows).toHaveLength(10);
    rows.forEach((row, i) => {
      expect(row).toHaveLength(i + 1);
      expect(row[0]).toBe(1);
      expect(row[row.length - 1]).toBe(1);
    });
  });

  it('obsługuje maksymalne numRows', () => {
    const rows = generate(30);
    expect(rows).toHaveLength(30);
    expect(rows[29][14]).toBe(77558760);
    expect(rows[29][15]).toBe(77558760);
    expect(rows[29].reduce((sum, x) => sum + x, 0)).toBe(2 ** 29);
  });
});
