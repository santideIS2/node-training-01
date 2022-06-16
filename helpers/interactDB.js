const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerDB = () => {

    if ( fs.existsSync(archivo) ) {
        return JSON.parse( fs.readFileSync(archivo, {encoding: 'utf-8'}))
    } else {
        return null;
    }
}

module.exports = {
    guardarDB,
    leerDB
}