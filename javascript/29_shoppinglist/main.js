const giftObj = document.getElementById('gift');
const addgiftObj = document.getElementById('addgift');
const removelastgiftObj = document.getElementById('removelastgift');
const removefirstObj = document.getElementById('removefirst');
const removeObj = document.getElementById('remove');
const sumObj = document.getElementById('sum');
const shoppinglistObj = document.getElementsByTagName('li');

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