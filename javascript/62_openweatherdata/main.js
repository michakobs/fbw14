let btnObj = document.getElementById('btn');
//console.log(btnObj);

btnObj.onclick = () => {
    //console.log('wetter');
    event.preventDefault();
    let inputValueObj = document.getElementById('input').value;
    let locArray = inputValueObj.split(',');
    let locArrayTrimmed = [];
    for (element of locArray) {
        console.log(element);
        locArrayTrimmed.push(element.trim());
    }
    for (element of locArrayTrimmed) {
        loadCityData(element);
    }
    //console.log(inputValueObj);
}

const colorTemperatures = [{
        limitTemp: 40,
        color: 'red'
    },
    {
        limitTemp: 35,
        color: 'orange'
    },
    {
        limitTemp: 30,
        color: 'yellow'
    },
    {
        limitTemp: 20,
        color: 'deepskyblue'
    },
    {
        limitTemp: 10,
        color: 'purple'
    },
    {
        limitTemp: 0,
        color: 'grey'
    },
    {
        limitTemp: -Infinity,
        color: 'white'
    }
];

const showCityData = (cityToSearch, temp, description, icon) => {
    const containerObj = document.getElementById('container');
    const newDivObj = document.createElement('div');
    newDivObj.classList.add('box');
    newDivObj.innerHTML = `<h2 class="city-name">${cityToSearch}</h2>
    <div class="temp">${temp}</div>
    <div class="description">${description}</div>
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
    //newDivObj.style.background = styleBackground(temp);
    newDivObj.style.background = colorTemperatures.find(entry => temp > entry.limitTemp).color;
    containerObj.append(newDivObj);
}

const styleBackground = (temp) => {
    if (temp > 40) {
        return 'red';
    } else if (temp > 35) {
        return 'orange';
    } else if (temp > 30) {
        return 'yellow';
    } else if (temp > 20) {
        return 'deepskyblue';
    } else if (temp > 10) {
        return 'purple';
    } else if (temp > 0) {
        return 'grey';
    } else {
        return 'white';
    }
}

const loadCityData = async (inputValue) => {
    try {
        let authToken = '16d4785f9c10724266053adb3c29dcfd';
        let cityToSearch = inputValue;
        let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&APPID=${authToken}&lang=de&units=metric`;
        let res = await fetch(urlServiceAddress);
        let weatherData = await res.json();
        console.table(weatherData);
        //let temp = (weatherData.main.temp - 273.15).toFixed(1);
        let temp = weatherData.main.temp;
        let description = weatherData.weather[0].description;
        let icon = weatherData.weather[0].icon;
        showCityData(cityToSearch, temp, description, icon);
    } catch (error) {
        console.warn(error);
    }
}