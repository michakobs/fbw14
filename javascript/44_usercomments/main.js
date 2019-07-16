// Aufgabe:
//
// Erstelle eine grundlegende Navigationsfunktion. D.h.
// Wenn der Nutzer af Show Users klickt, soll der String "Show Users" im container Div angezeigt werden. Wenn er auf "Add User" klickt, dann "Add User", usw.

const btnShowUsersObj = document.getElementById('btnShowUsers');
const btnAddUserObj = document.getElementById('btnAddUser');
const btnShowCommentsObj = document.getElementById('btnShowComments');
const btnAddCommentObj = document.getElementById('btnAddComment');
const containerObj = document.getElementById('container');

btnShowUsersObj.onclick = function() {
    let url = 'http://cileria.com:3050/users';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if(xhr.status === 200) {
            // Aufgabe:
            //
            // Basierend auf den Daten, baue eine Tabelle.

            const tableObj = document.createElement('table');
                        

            console.log(xhr.responseText);
            const responseObj = JSON.parse(xhr.responseText);

            // älterer iterator
            // for(let i=0; i<responseObj.length; i++) {
            //     console.log( responseObj[i].name );
            // }

            // neuerer iterator für arrays
            for(let e of responseObj) {
                
            }
        }
        else {

        }
    }
    xhr.send();
}

btnAddUserObj.onclick = function() {
    containerObj.innerText = 'Add User';
}

btnShowCommentsObj.onclick = function() {
    containerObj.innerText = 'Show Comments';
}

btnAddCommentObj.onclick = function() {
    containerObj.innerText = 'Add Comment';
}