// Aufgabe 1:
// 
// Erstelle ein Modul "countdown.js".
// Dieses soll eine Funktion exportieren,
// welche alle Zahlen von 0 bis 20
// ausgibt.

const countdown = require('./countdown.js');
countdown();

// Aufgabe 2:
//
// Erstelle in Modul "introduction.js"
// welches eine Funktion intro exportiert.
// intro erwartet ein Parameter userInfo
// userInfo soll ein Objekt sein mit den
// keys firstname, lastname, email und
// birthYear.
//
// intro soll einen text ausgeben, der
// so ungefähr aussieht wie der folgende:
//
// "Hi, mein Name ist FIRSTNAME LASTNAME
// und meine Email ist EMAIL. Ich wurde
// geboren am BIRTHYEAR."

const obj = {
    firstname: 'Zohir',
    lastname: 'Almond',
    email: 'almond@gmx.net',
    birthYear: 1989
};

const intro = require('./introduction.js');
intro(obj);