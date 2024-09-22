const API_KEY = 'cf2f94f127dabdade6d0c777e44143cd';
const weatherIcon = ['rain.png']

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(lat, lon);

    fetch(url).then(response => response.json()).then(data => {
        //response => response.json : 가져온 url 안에 있는 코드
        //data => : 코드 안에 있는 속성
        const city = document.querySelector('.city');
        const weather = document.querySelector('.temp');
        const icon = document.querySelector('.icon');
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        city.innerText = data.name;
        weather.innerText = `${data.main.temp}°C`;
        iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        icon.appendChild(iconImg);
    });
}

function onGeoError() {
    alert("If you want to get weather information, please accept the location information.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);