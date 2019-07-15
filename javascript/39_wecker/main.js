const timerObj = document.getElementById('timer');
const btnSetAlarmObj = document.getElementById('btnSetAlarm');

const clockObj = document.getElementById('clock');
const setalarmObj = document.getElementById('setalarm');

const buttonsclockObj = document.getElementById('buttonsclock');

const buttonssetalarmObj = document.getElementById('buttonssetalarm');

const btnBackObj = document.getElementById('btnBack');

const btnSaveAlarmObj = document.getElementById('btnSaveAlarm');

const newAlarmTimeObj = document.getElementById('newAlarmTime');

let time = null;

setInterval(
    function () {
        // soll jede sekunde
        // ausgeführt werden
        
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        let time = `${hours}:${mins}:${seconds}`;

        timerObj.innerText = time;
    },
    1000
);

btnSetAlarmObj.onclick = function() {
    // uhr verschwinden lassen
    clockObj.style.display = 'none';
    // buttons für alarm stellen verschwinden lassen
    buttonsclockObj.style.display = 'none';
    // inputfeld zum eingeben der zeit zeigen
    setalarmObj.style.display = 'block';
    // buttons zum setzen des weckers zeigen
    buttonssetalarmObj.style.display = 'block';
    
}

btnBackObj.onclick = function() {
    // quasi wie der alarmzeigen button, nur umgekehrt
    clockObj.style.display = 'block';
    buttonsclockObj.style.display = 'block';
    setalarmObj.style.display = 'none';
    buttonssetalarmObj.style.display = 'none';    
}

btnSaveAlarmObj.onclick = function() {
    let str = newAlarmTimeObj.value;

    if(str.length !== 8) {
        alert('Uhrzeit ungültig.');
        return;
    }

    // validieren wir die uhrzeit
    let hours = parseInt(str.charAt(0) + str.charAt(1));

    let mins = parseInt(str.charAt(3) + str.charAt(4));

    let seconds = parseInt(str.charAt(6) + str.charAt(7));

    if(!(hours >= 0 && hours <= 23)) {
        alert('stundenanzahl ungültig.');
        return;
    }

    if(!(mins >= 0 && mins <= 59)) {
        alert('minutenanzahl korrekt');
        return;
    }
    
    if(!(seconds >= 0 && seconds <= 59)) {
        alert('sekundenanzahl korrekt');
        return;
    }    

    if(!(str.charAt(2) === ':' && str.charAt(5) === ':')) {
        alert('doppelpunkte fehlen.');
        return;        
    }

    btnBackObj.onclick();

    time = str;
}