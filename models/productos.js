const { v4 } = require('uuid');

class Producto {
    
    precio = null;

    constructor ( desc ){
        this.id = v4();
        this.desc = desc; 
    }
}

class Productos {
    
    get listadoArr(){
        return Object.values(this._listado);
    }

    constructor(){
        this._listado = {};
    }

    addProdList( desc='' ){
        const producto = new Producto( desc );
        this._listado[producto.id] = producto;
    }

    loadProdList( prods = [] ){
        prods.forEach( prod => {this._listado[prod.id] = prod});
    }

    listarProds(){
        this.listadoArr.forEach( (producto, i) => {

            const { desc, precio } = producto;
            const p = ( precio )? precio : 'gratis';
            console.log(`\n${ i+1 }) ${ desc } :: ${ p } €`);

        });
    }

    deleteProduct( id ) {
        (this._listado[id])
            ? delete this._listado[id]
            : console.log('No se pudo eliminar producto');
    }
}

module.exports = Productos;
