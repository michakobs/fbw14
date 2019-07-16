// Aufgabe:
//
// Erstelle eine grundlegende Navigationsfunktion. D.h.
// Wenn der Nutzer af Show Users klickt, soll der String "Show Users" im container Div angezeigt werden. Wenn er auf "Add User" klickt, dann "Add User", usw.

const btnShowUsersObj = document.getElementById('btnShowUsers');
const btnAddUserObj = document.getElementById('btnAddUser');
const btnShowCommentsObj = document.getElementById('btnShowComments');
const btnAddCommentObj = document.getElementById('btnAddComment');
const containerObj = document.getElementById('container');

// DRY - Dont repeat yourself
// Aufgabe:
//
// Schreibe eine Funktion createTable(field1, field2, field3, field4, data)
// die eine Tabelle erzeugt mit dem Tabellenkopf aus field1, field2, field,3, field4. 
// Der fünfte Parameter data soll gleichd dem responseText des XMLHttpRequest-Objects sein.

function createTable(field1, field2, field3, field4, data) {
    // Aufgabe:
    //
    // Basierend auf den Daten, baue eine Tabelle.

    const tableObj = document.createElement('table');
    const trObj = document.createElement('tr');
    const th1Obj = document.createElement('th');
    const th2Obj = document.createElement('th');
    const th3Obj = document.createElement('th');
    const th4Obj = document.createElement('th');

    th1Obj.innerText = field1;
    th2Obj.innerText = field2;
    th3Obj.innerText = field3;
    th4Obj.innerText = field4;

    trObj.appendChild(th1Obj);
    trObj.appendChild(th2Obj);
    trObj.appendChild(th3Obj);
    trObj.appendChild(th4Obj);

    tableObj.appendChild(trObj);

    containerObj.innerText = '';

    const responseObj = JSON.parse(data);

    // älterer iterator
    // for(let i=0; i<responseObj.length; i++) {
    //     console.log( responseObj[i].name );
    // }

    // neuerer iterator für arrays
    for (let e of responseObj) {
        const trNewObj = document.createElement('tr');

        const td1Obj = document.createElement('td');
        const td2Obj = document.createElement('td');
        const td3Obj = document.createElement('td');
        const td4Obj = document.createElement('td');

        td1Obj.innerText = e[field1];
        td2Obj.innerText = e[field2];
        td3Obj.innerText = e[field3];
        td4Obj.innerText = e[field4];

        trNewObj.appendChild(td1Obj);
        trNewObj.appendChild(td2Obj);
        trNewObj.appendChild(td3Obj);
        trNewObj.appendChild(td4Obj);

        tableObj.appendChild(trNewObj);
    }

    containerObj.appendChild(tableObj);
}

btnShowUsersObj.onclick = function () {
    let url = 'http://cileria.com:3050/users';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            createTable('_id', 'name', 'username', 'email', xhr.responseText);
        } else {

        }
    }
    xhr.send();
}

btnAddUserObj.onclick = function () {
    containerObj.innerText = 'Add User';
}

btnShowCommentsObj.onclick = function () {
    let url = 'http://cileria.com:3050/comments';

    // Aufgabe: Baue eine Tabelle auf Basis
    // der comments-Daten

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            createTable('_id', 'name', 'email', 'body', xhr.responseText);
        } else {

        }
    }
    xhr.send();
}

btnAddCommentObj.onclick = function () {
    containerObj.innerText = 'Add Comment';
}