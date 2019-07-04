// Vorher eine TABLE Element kreiren
let tableObject = document.createElement('TABLE');
// Hänge an den Body an
document.body.append(tableObject);

// Kreire ein TR Element 
let tableRowObject = document.createElement('TR');
// Hänge an den TableObject an
tableObject.append(tableRowObject);
// genausogut wie tableObject.appendChild(tableRowObject);

// Fülle mit HTML
tableRowObject.innerHTML = 'Name ID';
// Klasse mit classList
tableRowObject.classList.add('tablerow');

let myString = "I am a Web Developer!";
let h1 = document.getElementsByTagName('h1')[0];
let i = 0;

let showString = setInterval(function () {
        let spanObject = document.createElement('SPAN');
        spanObject.innerHTML = myString.charAt(i);
        h1.insertAdjacentElement('beforeend', spanObject); // rückwärts einfügen
        //h1.append(spanObject);
        i++;

        if (i > myString.length) {
                i = 0;
                h1.innerHTML = '';
                // Solange h1 noch innere Knoten hat
                //        while (h1.lastChild) {
                //            h1.removeChild(h1.lastChild);
                //        }
                //clearInterval(showString);
        }
}, 100);