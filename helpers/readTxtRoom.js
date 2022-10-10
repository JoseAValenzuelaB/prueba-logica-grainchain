const { readFileSync } = require('fs');

const getRoom = () => {
  const fileContent = readFileSync('room.txt', 'utf8');

  const strRoom = fileContent.split(/\r?\n/);
  const room = [];
  for (let i = 0; i < strRoom.length; i++) {
    const row = strRoom[i];
    room.push(row.split(','));
  }
  return room;
};

module.exports = {
  getRoom
}