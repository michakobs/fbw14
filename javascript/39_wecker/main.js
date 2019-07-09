const timerObj = document.getElementById('timer');

setInterval(
    function() {
        // soll jede sekunde
        // ausgeführt werden
        
        let date = new Date();
        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;
        let seconds = date.getSeconds();
        if(seconds < 10) seconds = '0' + seconds;
        let time = `${hours}:${mins}:${seconds}`;    

        timerObj.innerText = time;
    },
    1000
);