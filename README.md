# table-generator [https://jundymek.github.io/table_generator/](https://jundymek.github.io/table_generator/)
Moja wersja zadania rekrutacyjnego na stanowisko Junior Front End Developer. Zadanie znalezione w sieci - wykonane w ramach nauki.

## Treść zadania
**Na podstawie danej listy obiektów napisz skrypt w języku JavaScript (bez użycia zewnętrznych frameworków i bibliotek JS), który wygeneruje tabelę z danymi zawartymi w tablicy.**

Tabea powinna przedstawiać wszystkie dane zawarte w obiekcie oprócz pola *id*. Załóż, że pole *id* będzie zawsze unikalne. Pola typu boolean powinny być interpretowane jako:
- true: "Yes"
- false: "No"

Pod tabelą powinien zostać wygenerowany formularz pozwalający na edycję wszystkich pól obiektu (oprócz pola *id*). Po kliknięciu na dany wiersz tabeli, dane z niego powinny zostać załadowane do formularza: pola typu *string* oraz *number* do inputów typu *text* lub *number*, pola typu *boolean* do inputów typu *checkbox*. Formularz powinien umożliwiać edycję danego obiektu. Po kliknięciu przycisku *save*, zarówno dane w tabeli, jak i tabica obiektów powinny zostać zaktualizowane. W przypadku przypisania dodatkowego pola do wszystkich obiektów w tablicy, skrypt powinien automatycznie dodawać nową kolumnę w tabeli oraz dodatkowy element formularza do edycji. Do stylowania można użyć dowolnego frameworka CSS.

## Oceniane będą:
- Poprawność i czytelność skryptu
- Działanie programu
- Wydajność działania
- Wygląd interfejsu

## Przykładowe dane:
```js 
let users = [
  {
    id: 1,
    name: "Kevin",
    surname: "Durant",
    age: 30,
    retired: false
  },
  {
    id: 2,
    name: "Chris",
    surname: "Paul",
    age: 34,
    retired: false
  },
  {
    id: 3,
    name: "Tracy",
    surname: "McGrady",
    age: 40,
    retired: true
  },
  {
    id: 4,
    name: "Allen",
    surname: "Iverson",
    age: 44,
    retired: true
  }
];
```
