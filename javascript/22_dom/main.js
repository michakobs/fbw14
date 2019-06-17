const halloWorldObj = document.getElementById('halloworld'); // halloWorldObj connected JS mit dem HTML Button

const allesRotObj = document.getElementById('allesrot');

// onclick Methode überschreiben
halloWorldObj.onclick = function() {
    alert('hallo world');
}

allesRotObj.onclick = function() {
    // wir erstellen object für content div
    // damit wir mit JS das html verändern können
    const contentObj = document.getElementById('content');
    contentObj.style.backgroundColor = 'rgb(255, 0, 0)';
}

// Aufgabe:
//
// 1. Ändere den Titel des Buttons wo draufsteht "Alles Blau" zu "Alle Paragraphen blau" -> im HTML.
// 2. Füge ein neues Click-Event zu diesem Button hinzu.
//    Dafür hole Dir vorher den Button in den JS-Code.
// 3. Wenn der Nutzer auf den Button clickt, sollen alle
//    Paragraphen blau werden. Nutze dafür die Methode
//    getElementsByClassName. Nutze auch Google, um
//    Dir die Funktionswiese dieser Methode gefügig zu machen.

// ich hole mir die verbindung zum html (dom)
const allesBlauObj = document.getElementById('allesblau');

allesBlauObj.onclick = function() {
    // alle paragraphen mit class = blogeintrag
    // ausgewählt 
    const alleParaObj = document.getElementsByClassName('blogeintrag');

    for(let i=0; i<alleParaObj.length; i++) {
        alleParaObj[i].style.backgroundColor = 'blue';
    }
}

const neuerBlogEintragObj = document.getElementById('neuerblogeintrag');

neuerBlogEintragObj.onclick = function() {

    // wir erstellen hier ein neues
    // p-Element
    const newParagraph = document.createElement('p');
    newParagraph.className = 'blogeintrag';
    newParagraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate sequi necessitatibus possimus
    odit earum!`;

    // wir holen das content Div 
    // in den JS code
    const contentObj = document.getElementById('content');

    // wir hängen den neuen Paragraphen
    // an den content Div dran
    contentObj.appendChild(newParagraph);
}