const Productos = require('./models/productos.js');
const { iMenu, 
        pausa,
        leerIn,
        listDeleteProds,
        confirmar
} = require('./helpers/inquirer.js');
const { leerDB, guardarDB } = require('./helpers/interactDB.js');


const main = async() => {

    let seleccion = '';
    const prodList = new Productos();
    const prodDB = leerDB();

    if (prodDB) prodList.loadProdList(prodDB);

    do {
        seleccion = await iMenu();

        switch ( seleccion ) {
            case 1:
                const prodName = await leerIn( 'Nuevo producto:');
                prodList.addProdList(prodName);
            break;
    
            case 2:
                prodList.listarProds();
            break;
    
            case 3:
                const id = await listDeleteProds(prodList.listadoArr);
                if ( id !== 0 ) {
                    if (await confirmar('Seguro que quiere borrar el producto?')) {
                        prodList.deleteProduct(id);
                        console.log('Producto borrado');
                    }
                }
            break;
    
            case 4:
            break;

            default:
            break;
        }
    
        await pausa();

        guardarDB(prodList.listadoArr);

    } while ( seleccion !== 4 );

}

main();