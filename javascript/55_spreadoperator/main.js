// Der Spread-Operator kann 1) Arrays in Argumentlisten
// konvertieren

// Funktion mit unendlicher Anzahl an Parametern
// z.B. console.log
console.log('hallo', 'world', 'wie', 'gehts');

const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
];

console.log( numbers[0], numbers[1], numbers[2] );

// Array wird in eine Argumentliste konvertiert
console.log( ...numbers );

const sum = (x,y,z) => {
    return x + y + z;
}

console.log(
    sum(...numbers)
);

// Objekt-Referenzen
let array1 = [4,2,6,9];
let array2 = array1;

console.log(array1);

array2[0] = 7;

console.log(array1);

// Der Spread-Operator kann 2) Neue Arrays aus
// bestehenden Arrays erstellen

let cloneOfArray1 = [...array1];
let array3 = [10, 12, 14, 16];

let concat1and3 = [...array1, ...array3];
console.log( concat1and3 );

let additional = [...concat1and3, ...[20,30,40], ...[-5]];
console.log(additional);

// Aufgabe:
//
// Erstelle eine Funktion increasingNumbers mit einem
// Parameter n. increasingNumbers erzeugt ein Array
// mit n Elementen, Zahlen von 0 bis n.
//
// Bsp:
//
// increasingNumbers(5):
// 
// [0, 1, 2, 3, 4];
// 
// Restriktion: verwende dafür NUR den Spread-Operator und kein Push. Schleifen sind erlaubt. 


const increasingNumbers = (n) => {
    let newarray = [];
    for (let i=0; i<n; i++) {
        newarray=[...newarray, i] 
        // newarray=[...newarray, ...[i]] // geht auch

    }
    return newarray;
}

console.log(increasingNumbers(5));









// Aufgabe Schwer:
//
// Erstelle eine Funktion cube mit einem parameter
// length. Cube returned ein 3-dimensionales Array
// der Länge n und soll von der Struktur her an 
// einen Würfel erinnern. Jedes Element des Cubes
// soll abwechselnd eine 0 und eine 1 sein.
// z.B.
//
// cube(3):
//
// [ 
//   [ [0, 1, 0], [1, 0, 1], [0, 1, 0] ],
//   [ [1, 0, 1], [0, 1, 0], [1, 0, 1] ],
//   [ [0, 1, 0], [1, 0, 1], [0, 1, 0] ]
// ];
//
// Restriktion: verwende dafür den Spread-Operator.