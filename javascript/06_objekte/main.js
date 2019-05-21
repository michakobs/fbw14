console.log('hallo world');

var info = [];
info[0] = 'Jan'; // vorname
info[1] = 'Schulz'; // nachname
info[2] = 'Berlin'; // wohnort
info[3] = 33; // alter

console.log(info);


// Aufgabe:
// Stelle Dir wieder einen Baum vor. Finde 5 Key-Value Paare
// über Deinen ausgedachten Baum. (z.B. anzahlAeste, ...)

var treeInfo = {
    treeSpecies: 'Oak',
    treeOver10Years: true,
    numberStamp: 1,
    numberBranch: 10,
    numberTwig: 225,
    numberLeaf: 50000
};

// console.log(objInfo.city); // variante 1
// console.log(objInfo['city']); // variante 2

// Aufgabe:
//
// Schreibe eine Funktion meinBaum die als Parameter objBaum ein Objekt
// erwartet. Die Funktion soll einen Text ausgeben der einen
// Baum beschreibt und für den Text die key-value Paare des Parameter-Objects benutzt.

function meinBaum(objBaum) {
    console.log(`
    Die Eiche ${objBaum.treeSpecies} hat ${objBaum.numberStamp} 
    Stämme und ${objBaum.numberBranch} Äste, ${objBaum.numberTwig} Zweige, ${objBaum.numberLeaf} Blätter. 
    `);
}

meinBaum(treeInfo);

var objInfo = {
    // key   :  value
    firstname: 'Jan',
    lastname: 'Schulz',
    city: 'Berlin',
    age: 33
};

function intro(objPerson) {
    console.log(`
        Hallo, mein Name ist ${objPerson.firstname} ${objPerson.lastname}
        Ich wohne in ${objPerson.city} und ich bin ${objPerson.age} Jahre alt.
    `)
}

intro(objInfo);

function printXundY(obj) {
    console.log(`
        ${obj.x} und ${obj.y}
    `);
}

var o1 = {
    x: 1,
    y: 2
};

printXundY(o1); // variante 1: objekt wurde vorher definiert
printXundY({
    x: 1,
    y: 2
}); // variante 2: objekt wird direkt in der parameterliste definiert

// Aufgabe:
//
// Schreibe eine Funktion incXundY die ein Parameter obj erwartet.
// In der Funktion wird obj.x um 1 erhöht, und obj.y wird mit 5 multipliziert. Danach wird obj ausgegeben (nicht returned).
// Rufe die Funktion incXundY mit einem Beispiel-Objekt
// o2 = {x: 8, y: 5} auf, einmal indirekt per Variable und einmal
// direkt in der Parameterliste.

function incXundY(obj) {
    ++obj.x;
    obj.y = obj.y * 5;
    console.log(`${obj.x}, ${obj.y}`);
}

var o2 = {
    x: 8,
    y: 5
};

incXundY(o2);
incXundY({
    x: 8,
    y: 5
});

// Aufgabe:
//
// Analysiere den folgenden Code und beschreibe mit eigenen Worten,
// was er tut. Gehe dafür Zeile für Zeile vor.

function lichtSchalter(objHaus) {
    if (objHaus.licht === true) {
        objHaus.licht = false;
    } else {
        objHaus.licht = true;
    }
}

var meinHaus = {
    zimmer: 3,
    flaeche: 90,
    licht: false
}

lichtSchalter(meinHaus);

// arrays von objekten

// "normales" array
var arrayNumbers = [
    1, // 0
    2, // 1
    3, // 2
    4 // 3
];

// array aus objekten
var autos = [{
        typ: 'Audi',
        baujahr: 1998
    }, // 0 
    {
        typ: 'BMW',
        baujahr: 2002
    }, // 1
    {
        typ: 'Skoda',
        baujahr: 2001
    }, // 2
    {
        typ: 'Peugeot',
        baujahr: 1997
    } // 3
];

console.log(autos[2].typ); // Skoda
console.log(autos[1].baujahr); // 2002
console.log(autos[3].baujahr + ' ' + autos[3].typ) // 1997 Peugeot

var cocktail = {
    alkoholGehalt: 0.2,
    name: 'Long Island',
    zutaten: [
        // 0         1         2          3       4 -> length = 5
        'Limette', 'Tee', 'Eiswürfel', 'Minze', 'Rum'
    ]
}

console.log(
    cocktail.zutaten[1] // Tee
);

// letzte Zutat
console.log(
    // cocktail.zutaten[5 - 1]
    cocktail.zutaten[cocktail.zutaten.length - 1]
);

// letzte Zutat entfernen als Return-Value von pop();
var letzteElement = cocktail.zutaten.pop();
console.log(`
        entferntes Element: ${letzteElement}
        `);

// neue letzte Zutat
console.log(
    // cocktail.zutaten[5 - 1]
    cocktail.zutaten[cocktail.zutaten.length - 1]
);

// Aufgabe:
//
// Erstelle ein Array fruechte aus den folgenden Objekten.
// Versuche zwei verschiedene Lösungswege zu finden.

var apfel = {
    farbe: 'rot',
    gewicht: 50,
    geschmack: 'suess'
};

var kiwi = {
    farbe: 'gruen',
    gewicht: 100,
    geschmack: 'suess'
};

var zitrone = {
    farbe: 'gelb',
    gewicht: 70,
    geschmack: 'sauer'
};

// lösungsweg 1
var fruechte1 = [
    apfel, 
    kiwi, 
    zitrone
];
console.log(fruechte1);

// lösungsweg 2 - copy & paste
var fruechte2 = [
    {
        farbe: 'gelb',
        gewicht: 70,
        geschmack: 'sauer'
    },
    {
        farbe: 'gruen',
        gewicht: 100,
        geschmack: 'suess'
    },
    {
        farbe: 'rot',
        gewicht: 50,
        geschmack: 'suess'
    }    
];

// console.log( fruechte2[0].farbe );

// lösungsweg 3
var fruechte3 = [];
fruechte3[0] = apfel;
fruechte3[1] = kiwi;
fruechte3[2] = zitrone;

// lösungsweg 4
var fruechte4 = [];
fruechte4.push(apfel);
fruechte4.push(kiwi);
fruechte4.push(zitrone);

// methoden - funktionen in einem objekt
var meinRechteck = {
    breite: 200,
    hoehe: 500
};

// flaeche ist eine externe funktion
function flaeche(obj) {
    console.log(`externe Funktion flaeche()`);
    var a = obj.breite * obj.hoehe;
    console.log(`die flaeche ist ${a} quadratmeter`);
}


// ein schritt in richtung OOP -> Objektorientiertes Programmieren
var meinZweitesRechteck = {
    // key    value ist eine number
    breite: 200,
    // key    value ist wieder eine number
    hoehe: 500,
    // key    value ist eine function
    // flaeche ist ein mitglied des objekts meinZweitesRechteck
    flaeche: function() {
        console.log(`interne Funktion flaeche() von meinZweitesDreieck`);        
        var a = this.breite * this.hoehe;
        console.log(`die flaeche ist ${a} quadratmeter (zweites Rechteck)`);
    }
}

// info:
// eine funktion kann auch ein wert sein, so wie 
// var x = 1
// var bla = 'hallo'
// var foo = function() { console.log('hallo world'); }

console.log( meinZweitesRechteck.breite );
flaeche(meinRechteck);
meinZweitesRechteck.flaeche();
