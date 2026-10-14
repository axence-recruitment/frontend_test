import { describe, expect, it } from 'vitest';
import { isValid } from './valid-parentheses';

describe('isValid', () => {
  it('akceptuje pojedynczą parę nawiasów', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('[]')).toBe(true);
    expect(isValid('{}')).toBe(true);
  });

  it('akceptuje kolejne pary różnych typów', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('akceptuje zagnieżdżone nawiasy', () => {
    expect(isValid('([])')).toBe(true);
    expect(isValid('{[()()]}')).toBe(true);
    expect(isValid('(((([[[{{{}}}]]]))))')).toBe(true);
  });

  it('odrzuca nawiasy różnych typów', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('{)')).toBe(false);
  });

  it('odrzuca nawiasy zamknięte w złej kolejności', () => {
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[}]')).toBe(false);
  });

  it('odrzuca niezamknięte nawiasy otwierające', () => {
    expect(isValid('(')).toBe(false);
    expect(isValid('(()')).toBe(false);
    expect(isValid('{[]')).toBe(false);
  });

  it('odrzuca nawiasy zamykające bez pary', () => {
    expect(isValid(')')).toBe(false);
    expect(isValid('())')).toBe(false);
    expect(isValid('][')).toBe(false);
  });

  it('odrzuca ciąg o nieparzystej długości', () => {
    expect(isValid('()[]{')).toBe(false);
  });

  it('obsługuje bardzo długie wejście', () => {
    const deep = '('.repeat(2500) + '[]'.repeat(1000) + ')'.repeat(2500);
    expect(isValid(deep)).toBe(true);
    expect(isValid(deep + ')')).toBe(false);
    expect(isValid('('.repeat(5000))).toBe(false);
  });
});
