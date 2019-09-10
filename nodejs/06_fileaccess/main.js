const fs = require('fs');

// datei lesen
const buffer = fs.readFileSync('./blabla.txt', 'utf-8');
console.log(
    buffer
);

// datei schreiben
const newTxt = 'Sehr geehrte Damen und Herren';
fs.writeFileSync('./new_blabla.txt', newTxt);

// Aufgabe:
// 
// 1.) Gehe auf http://bytesizematters.com/
// 2.) Erstelle einen String von 1000 Bytes 
// 3.) 1000 Bytes ist 1 KB.
// 4.) Erstelle einen Algorithmus, der eine Datei von 512 MB erzeugt
//     und erzeuge damit eine Datei dummy.txt 

let fourBytes = 'aaaa';
fs.writeFileSync('./fourBytes.txt', fourBytes);

let oneKilobyte = '';

for(let i=0; i<1000/4; i++) {
    oneKilobyte += fourBytes;
}

fs.writeFileSync('./oneKilobyte.txt', oneKilobyte);

let fivehundredtwelveMB = '';
for(let i=0; i<512*1000; i++) {
    fivehundredtwelveMB += oneKilobyte;
}

fs.writeFileSync('./fivehundredtwelveMB.txt', fivehundredtwelveMB);