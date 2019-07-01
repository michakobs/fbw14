const giftObj = document.getElementById('gift');
const addgiftObj = document.getElementById('addgift');
const removelastgiftObj = document.getElementById('removelastgift');
const removefirstObj = document.getElementById('removefirst');
const removeObj = document.getElementById('remove');
const sumObj = document.getElementById('sum');
const shoppinglistObj = document.getElementById('shoppinglist');
const shoppinglistArrayObj = document.getElementsByTagName('li');

// getElementById - 1 element, keine list
// getElementsByTagName - N elemente, list

addgiftObj.onclick = function() {
    // neues li erzeugen
    const newLiObj = document.createElement('li');
    // den text des li setzen
    newLiObj.innerHTML = giftObj.value;
    // li der liste hinzufügen
    shoppinglistObj.appendChild(newLiObj);
    giftObj.value = '';
}

// Aufgabe:
//
// Implementiere die Buttons removelast und
// removefirst.
// removefirst: entfernt erstes item in der liste
// removelast: entfernt letztes item in der liste
// 
// tipp: nutze google für effizientes selektieren der DOM elemente. schaue dir die methode .remove() an.

removefirstObj.onclick = function() {
    if(shoppinglistObj.length > 0) {
        shoppinglistObj[0].remove();
    }
    else {
        alert('Keine Items zum entfernen');
    }
}
    
removelastgiftObj.onclick = function() { 
    if(shoppinglistObj.length > 0) {
        shoppinglistObj[shoppinglistObj.length - 1].remove();
    }
    else {
        alert('Keine Items zum entfernen');
    }    

    // listObj[listObj.length - 1].remove();
}

// Aufgabe:
//
// 1) Erstelle ein Beispiel-Array von
//    exampleArray = [2,9,10,11,10,12,10,23];
//    
// 2) Schreibe eine Funktion, die alle 10 aus dem
//    Array herauslöscht.
// 
//    Tipp: schaue Dir splice() an (z.b. mit Google)

// const exampleArray = [
//     2,9,10,11,10,12,10,10,23
// ];

// function removeAll10() {
//     for(let i=0; i<exampleArray.length; i++) {
//         if(exampleArray[i] === 10) {
//             exampleArray.splice(i, 1);
//             i--;
//         }
//     }
// }

// removeAll10();

removeObj.onclick = function() {
    for(let i=0; i<shoppinglistArrayObj.length;i++) {
        // bei welchem item bin ich gerade?

        if(giftObj.value === shoppinglistArrayObj[i].innerHTML) {
            shoppinglistArrayObj[i].remove();
            i--;
        }
    }
}

const basket = [];

// Aufgabe:
// 
// Erweitere Die Funktionalität von add gift.
// Jedes mal, wenn ein neues gift in der Liste
// hinzugefügt wird, soll ein neues Objekt in
// das Array basket hinzugefügt werden.
// Jedes Objekt hat einen Namen und einen Zufalls-
// preis. Also wenn der Benutzer eine "Banane" 
// hinzufügt, dann soll ein neues Objekt in 
// das Basket-Array hinzugefügt werden:
// Bsp:
// { name: 'Banane', price: 0.50 }
//
// basket würde bei einem gift so aussehen:
//
// [{ name: 'Banane', price: 0.50 }]