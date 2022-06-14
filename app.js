const { iMenu, 
        pausa,
        leerIn
} = require('./helpers/inquirer.js');
const Combo = require('./models/productos.js');

const main = async() => {

    let opelegida = '';
    const combo = new Combo();
    // console.log( {opelegida });

    do {
        opelegida = await iMenu();

        switch ( opelegida ) {
            case 1:
                const msj = await leerIn( 'Nuevo producto:');
                combo.crearCombo(msj);
            break;
    
            case 2:
                console.log( combo._listado );
            break;
    
            case 3:
            break;
    
            default:
                break;
        }
    
        await pausa();

    } while ( opelegida !== 3 );

}

main();