# Axence Frontend Recruitment Task
Zadanie składa się z 6 krótkich zadań algorytmicznych w TypeScript. Każde zadanie znajduje się w osobnym katalogu w `tasks/`:

| # | Zadanie | Plik |
|---|---|---|
| 1 | Długość ostatniego słowa | `tasks/01-length-of-last-word/length-of-last-word.ts` |
| 2 | Plus jeden | `tasks/02-plus-one/plus-one.ts` |
| 3 | Poprawny palindrom | `tasks/03-valid-palindrome/valid-palindrome.ts` |
| 4 | Poprawne nawiasy | `tasks/04-valid-parentheses/valid-parentheses.ts` |
| 5 | Wchodzenie po schodach | `tasks/05-climbing-stairs/climbing-stairs.ts` |
| 6 | Trójkąt Pascala | `tasks/06-pascals-triangle/pascals-triangle.ts` |

Treść każdego zadania wraz z przykładami i ograniczeniami znajduje się w komentarzu nad funkcją. Twoim zadaniem jest zaimplementowanie ciała funkcji (zastąp `throw new Error('Not implemented')`). Obok każdego pliku znajduje się plik `*.test.ts` z testami, które powinny przechodzić po poprawnej implementacji.

Na realizację zadania masz 45 minut. Zadania są ułożone mniej więcej od najłatwiejszego do najtrudniejszego, ale możesz je rozwiązywać w dowolnej kolejności.

## Uruchomienie testów

- `npm test` - uruchomienie testów w trybie watch (testy uruchamiają się ponownie po każdej zmianie)
- `npm run test:run` - jednorazowe uruchomienie testów
- `npm run typecheck` - sprawdzenie typów

Możesz uruchomić testy tylko dla jednego zadania, np. `npm test -- plus-one`.

## Zasady
- Nie modyfikuj plików z testami ani sygnatur funkcji.
- Możesz korzystać z dowolnych wbudowanych funkcji języka i dokumentacji (np. MDN), ale nie instaluj dodatkowych bibliotek.

Zdajemy sobie sprawę, że 45 minut to niewiele i najprawdopodobniej nie uda Ci się rozwiązać wszystkich zadań - to zupełnie w porządku i nie jest to warunkiem pozytywnej oceny. Nie stresuj się, daj z siebie wszystko i rozwiąż tyle, ile zdążysz. Jeżeli utkniesz na którymś zadaniu, przejdź do kolejnego.

Będziemy oceniali poprawność rozwiązań (przechodzące testy), czytelność kodu oraz złożoność obliczeniową rozwiązań. Jakość rozwiązań jest dla nas ważniejsza niż ich liczba.

**Swoje rozwiązanie załącz jako nowy branch do tego repozytorium. Aby założyć nowy branch i wypchnąć zmiany:**
- wprowadź swoje zmiany
- git add .
- git commit -m "imie i nazwisko kandydata"
- git push https://github.com/axence-recruitment/frontend_test.git master:attempt/[inicjały kandydata]-[data w formacie RRRR-MM-DD]

  np. `master:attempt/jk-2026-10-14`
