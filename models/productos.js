const { v4 } = require('uuid');

class Producto {
    
    precio = null;

    constructor ( desc ){
        this.id = v4();
        this.desc = desc; 
    }
}

class Combo {
    
    constructor(){
        this._listado = {};
    }

    crearCombo( desc='' ){
        const producto = new Producto( desc );
        this._listado[producto.id] = producto;
    }
}

module.exports = Combo;
