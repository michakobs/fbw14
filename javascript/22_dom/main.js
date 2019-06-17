const halloWorld1Obj = document.getElementById('halloworld1'); // halloWorldObj connected JS mit dem HTML Button
const halloWorld2Obj = document.getElementById('halloworld2'); 

halloWorldObj1.addEventListener('click', function() {
    alert('hallo world - 1');
});

halloWorldObj2.addEventListener('click', function() {
    alert('hallo world - 2');
});

// andere Syntax: onclick Methode überschreiben
halloWorld2Obj.onclick = function() {
    alert('hallo world');
}

