const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=fd155a92174458bb0f9703dcbc70deef`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}