/**
 * Poprawne nawiasy
 *
 * Dany jest ciąg znaków `s` zawierający wyłącznie znaki '(', ')', '{', '}', '[' i ']'.
 * Sprawdź, czy ciąg jest poprawny.
 *
 * Ciąg jest poprawny, jeżeli:
 *   1. Każdy nawias otwierający jest zamknięty nawiasem tego samego typu.
 *   2. Nawiasy otwierające są zamykane w odpowiedniej kolejności.
 *   3. Każdy nawias zamykający ma odpowiadający mu nawias otwierający tego samego typu.
 *
 * Przykłady:
 *   isValid("()")     // true
 *   isValid("()[]{}") // true
 *   isValid("(]")     // false
 *   isValid("([])")   // true
 *   isValid("([)]")   // false
 *
 * Ograniczenia:
 *   - 1 <= s.length <= 10^4
 *   - `s` składa się wyłącznie ze znaków '()[]{}'
 */
export function isValid(s: string): boolean {
  throw new Error('Not implemented');
}
