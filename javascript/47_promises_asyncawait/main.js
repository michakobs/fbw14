const addNumberBtnObj = document.getElementById('addNumberBtn');
const addSomeNumbersDelayedCallbackBtnObj = document.getElementById('addSomeNumbersDelayedCallbackBtn');
const addSomeNumbersDelayedPromiseBtnObj = document.getElementById('addSomeNumbersDelayedPromiseBtn');


let count = 1;

const addNumber = () => {
    const h3Obj = document.createElement('h3');
    h3Obj.innerHTML = count;

    const numbersObj = document.getElementById('numbers');
    numbersObj.appendChild(h3Obj);

    count++;
}

// callback of hell
const addSomeNumbersDelayedCallback = () => {
    setTimeout(
        () => { // rufe diese funktion auf nach 1 sek
            addNumber();
            setTimeout(
                () => { // rufe diese funktion auf nach 1 sek
                    addNumber();
                    setTimeout(
                        () => {
                            addNumber();
                            setTimeout(
                                () => {
                                    addNumber();
                                    setTimeout(
                                        () => {
                                            addNumber();
                                        },
                                        1000
                                    );
                                },
                                1000
                            );                            
                        },
                        1000
                    );                    
                },
                1000
            );
        },
        1000
    );
}

addNumberBtnObj.onclick = () => {
    addNumber();
}

addSomeNumbersDelayedCallbackBtnObj.onclick = () => {
    addSomeNumbersDelayedCallback();
}

addSomeNumbersDelayedPromiseBtnObj.onclick = () => {
    addSomeNumbersDelayedPromise();
}

// Promise ist ein Container für eine asynchrone Funktion
addNumberDelayedPromise = () => {
    // Promise-Container
    return new Promise((resolve, reject) => {
        // die Asynchrone-Funktion
        setTimeout(
            () => {
                addNumber();
                resolve();
                
                // if(Math.random() > 0.5) {
                //     reject();
                // }
                // else {
                //     resolve();
                // }
            },
            1000
        );
    });
}

const addSomeNumbersDelayedPromise = () => {
    // addNumberDelayedPromise() // returned einen Promise
    // .then(() => { alert('Ok, hat geklappt') }) // then returned nochmal das Promise-Object
    // .catch((err) => {
    //     alert('es gab einen fehler: ' + err);
    // })

    addNumberDelayedPromise() // returned einen Promise
    .then(() => { alert('Ok, hat geklappt') }) // then returned nochmal das Promise-Object
    .catch((err) => {
        alert('es gab einen fehler: ' + err);
    })

}