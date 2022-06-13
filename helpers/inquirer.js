const inquirer = require('inquirer');

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿que desea?',
        choices: ['op1', 'op2', 'op3']
    }
];

const iMenu = async() => {

    console.log(`###############
    selecione una opción:
    `);

    return await inquirer.prompt( menuOpt );
}

module.exports = { iMenu }
