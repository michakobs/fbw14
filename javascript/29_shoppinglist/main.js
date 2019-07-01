console.log('hallo world');

const giftObj = document.getElementById('gift');
const addgiftObj = document.getElementById('addgift');
const removelastgiftObj = document.getElementById('removelastgift');
const removefirstObj = document.getElementById('removefirst');
const removeObj = document.getElementById('remove');
const sumObj = document.getElementById('sum');
const shoppinglistObj = document.getElementById('shoppinglist');

addgiftObj.onclick = function() {
    // neues li erzeugen
    const newLiObj = document.createElement('li');
    // den text des li setzen
    newLiObj.innerHTML = giftObj.value;
    // li der liste hinzufügen
    shoppinglistObj.appendChild(newLiObj);
    giftObj.value = '';
}