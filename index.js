require('colors');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const { getRoom } = require('./helpers/readTxtRoom');
const { solve } = require('./algorithm');

const main = async () => {
  let opt = '';
  let room = [];

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case '1':
        // TODO: Load the room from txt file.
        room = getRoom();
        console.table(room);
        break;
      case '2':
        // TODO: Solve room algorithm.
        solve(room);
        break;
      default:
        break;
    }

    await pause();
  } while (opt !== '0');
};

main();