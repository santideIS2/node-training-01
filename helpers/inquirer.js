const inquirer = require('inquirer');

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿que desea?',
        choices: [
            {
                value: 1,
                name: '1. Crear Combo'
            },
            {
                value: 2,
                name: '2. Ver Combo(s)'
            },
            {
                value: 3,
                name: '3. Salir'
            }

        ]
    }
];

const iMenu = async() => {

    console.log(`#############################
    selecione una opción:
    `);

    const { opcion } = await inquirer.prompt( menuOpt );
    return opcion;
}

const pausa = async() => {

    const paus = [
        {
            type: 'input',
            name: 'pausa',
            message: 'ENTER para continuar'
        }
    ]

    await inquirer.prompt( paus );

}

const leerIn = async( msj ) => {

    const pregunta = [
        {
            type: 'input',
            name: 'mensaje',
            msj,
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'no pollo'
                }
                return true;
            }
        }
    ]

    const { mensaje } = await inquirer.prompt( pregunta );
    return mensaje;

}


module.exports = {
    iMenu,
    pausa,
    leerIn
}
