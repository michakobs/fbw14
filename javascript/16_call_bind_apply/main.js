// normale funktion

function halloWelt() {
    console.log('hallo world');
}

// halloWelt(); // ausführung
// wir können es auch so ausführen ... 
// Funktionen sind auch Objekte.
halloWelt.call();


let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
    hallo: function() {
        console.log(`
            Hallo, ich bin ${this.name}. Ich bin ${this.age} Jahre alt.
            Ich arbeite als ${this.job}.
        `);
    }
};

emily.hallo(); 
// bei dem normalen methodenaufruf, verweist das this-keyword
// auf das objekt der methode.

emily.hallo.call(); 
// das this-keyword verweist auf den ersten parameter von call()
// = undefined

emily.hallo.call(emily);  
// erster parameter von call: this = emily

let steffen = {
    name: 'Steffen',
    age: 42,
    job: 'unternehmer'
};

// Aufgabe:
//
// Führe die Methode hallo von emily bei steffen aus mit call.

emily.hallo.call(steffen);

function whatIsThis() {
    console.log(this); 
    // this verweist bei normalen aufruf/ausführung auf
    // globalen execution context, bzw. Window object
}

whatIsThis();