const APIkey = 'e39bc5a6993c2905865bdc7fc3aa2a52';

document.getElementById('botonBuscar').addEventListener('click', () => {
    const ciudad = document.getElementById('inputCiudad').value || alert('Por favor, ingresa una ciudad, no soy adivino!! >:('); // Usa la ciudad ingresada o Montevideo por defecto
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${APIkey}&units=metric`;

    fetch(urlAPI)
        .then(respuesta => respuesta.json())
        .then(datos => {
            const clima = datos.weather[0].main;
            const descripcion = datos.weather[0].description;
            const temperatura = datos.main.temp;
            const direccionViento = datos.wind.deg;
            const humedad = datos.main.humidity;
            const codigoIcono = datos.weather[0].icon;

            const urlIcono = `http://openweathermap.org/img/wn/${codigoIcono}@2x.png`;

            document.getElementById('clima').classList = 'd-block';
            document.getElementById('nombreCiudad').textContent = ciudad;
            document.getElementById('nombreClima').textContent = clima + ' ' + descripcion;
            document.getElementById('temperatura').textContent = temperatura + ' °C';
            document.getElementById('viento').textContent = direccionViento + ' °';
            document.getElementById('humedad').textContent = humedad + ' %';
            document.getElementById('icono').src = urlIcono;
        })
        .catch(error => {
            console.error('Error al obtener los datos del clima', error);
        });
});
