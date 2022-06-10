

const main = async() => {
    console.log('1. Crear tarea');
    console.log('1. Listar tareas');
    console.log('1. Completar tareas');
    console.log('1. Borrar tareas');
    console.log('1. Salir');

    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Seleccione una opcion: ', (opt) => {
        console.log({ opt })
        rl.close();
    })
}

main();