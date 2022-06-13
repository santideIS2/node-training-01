const { iMenu } = require('./helpers/inquirer.js');

const main = async() => {

    let opelegida = '';

    opelegida = await iMenu();
    console.log( {opelegida });

}

main();