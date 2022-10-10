const inquirer = require('inquirer');
require('colors');

const menuOpts = [
  {
    type: 'list',
    name: 'option',
    message: 'Prueba de Lógica GrainChain.',
    choices: [
      {
        name: `${'1.'.green} Cargar "habitación" desde archivo room.txt.`,
        value: '1',
      },
      {
        name: `${'2.'.green} Colocar el mínimo de lamparas en la habitación.`,
        value: '2',
      },
      {
        name: `${'0.'.green} Salir`,
        value: '0',
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('============================================================'.green);
  console.log('                   Selecciona una  opción:');
  console.log('============================================================\n'.green);

  const { option } = await inquirer.prompt(menuOpts);
  return option;
};

const pause = async() => {
  console.log('\n');
  await inquirer.prompt([
    {
      type: 'input',
      name: 'enter',
      message: `\nPresiona ${ 'ENTER'.green } to continue\n`
    }
  ]);
};

const readInput = async (message) => {
  const question = [{
    type: 'input',
    name: 'desc',
    message,
    validate(value) {
      if (value.length === 0) {
        return 'Please add a value';
      }
      return true;
    }
  }]

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const confirm = async (confirmMessage) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message: confirmMessage
    }
  ]

  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  confirm
};
