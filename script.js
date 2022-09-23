fetch('http://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=0a3e39700de10ccefe4bfd7e5f9715cc')
    .then(function(resp){
        return resp.json()
    })
    .then(function(data) {
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function() {

    })
