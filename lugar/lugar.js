//AXIOS construye peticiones URL
const axios = require('axios');

const getLugarLongAndLat = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 5000,
        headers: {
            'x-rapidapi-key': '8414c5f7f9msh341e133488e3fe0p19d721jsn0b81fd26753f',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length == 0) {
        throw new error(`El lugar ${direccion} no existe en la base de datos`);
    }

    const data = respuesta.data.Results[0];
    const nombre = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        nombre,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLongAndLat
}