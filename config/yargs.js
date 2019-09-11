//comandos:
//  · crear: --descripcion / -d
//  · actualizar: --descripcion / -d | --completado -c {default true}

//YARGS
const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Cambia el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            demand: false,
            alias: 'c',
            default: true
        }
    })
    .command('listar', 'Obtiene una lista de las tareas y su estado', {

    })
    .help()
    .argv;


module.exports = {
    argv
}