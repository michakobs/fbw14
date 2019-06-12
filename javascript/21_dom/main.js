var points = [40, 1, 100, 5];

// points.sort();
points.sort(
    function (a, b) {
        //console.log(a);
        //console.log(b);
        //console.log(b-a);
        console.log(points);
        return b - a;
    }
    // return 39 (false), -99 (true), -99 (true), -60 (true), 35 (false), -4 (true)
)
console.log(points);

let pets = ['Mooxie', 'Pickle', 'Hootchie'];

pets.forEach(function (element) { // forEach Schleife, extra für Arrays ohne index
    console.log(element);
});

let myObject = {
    // key : value Pärchen
    name: 'Martina',
    age: 35,
    city: 'Berlin'
};

for (let eigenschaft in myObject) { // for...in Schleife
    //console.log(myObject[eigenschaft]); // values only
    console.log(eigenschaft + " : " + myObject[eigenschaft]); // key: value ausgabe
}

for (let key in myObject) { // for...in Schleife 
    console.log(key); // keys only
}

// Per ID einen Button auswählen
let btn = document.getElementById('btn'); // Singular!!!
console.log(btn);

// Wir wollen eine Liste haben!!!
let list = document.getElementsByTagName('li'); // Plural
console.log(list);

btn.addEventListener('click', function (event) {
    console.log(event);
    console.log(btn.style);
    if (btn.style.background !== 'aquamarine') {
        btn.style.background = 'aquamarine';
        btn.innerText = 'Get them out of here';
        btn.style.color = 'white';
        for (let i = 0; i < list.length; i++) {
            // meistens über Listen iterieren
            console.log(list[i]);

        };
        //list.style.display = 'block'; // einblenden
    } else {
        btn.style.background = 'red';
        btn.innerText = 'Show favorite destinations';
        btn.style.color = 'black';
        //list.style.display = 'none'; // ausblenden
    }
});