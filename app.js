const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad y Pais',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

console.log(argv.direccion);

lugar.getLugarLongAndLat(argv.direccion)
    .then(console.log)
    .catch(console.log);

clima.getClima(37, -1)
    .then(console.log)
    .catch(console.log);