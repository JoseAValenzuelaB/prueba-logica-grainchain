const WALL = '1';
const EMPTY = '0';
const LIGHT_BULB = '*';
const LIGHTED = '-';

const solve = (room) => {
  const placeBulb = (y, x) => {
    const fillLeft = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB) {
          room[y][x] = LIGHTED;
          fillLeft(y, x - 1);
        }
      }
    }
    
    const fillRight = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB) {
          room[y][x] = LIGHTED;
          fillRight(y, x + 1);
        }
      }
    }
    
    const fillUp = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB) {
          room[y][x] = LIGHTED;
          fillUp(y - 1, x);
        }
      }
    }
    
    const fillDown = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB) {
          room[y][x] = LIGHTED;
          fillDown(y + 1, x);
        }
      }
    }
  
    fillLeft(y, x);
    fillRight(y, x);
    fillUp(y, x);
    fillDown(y, x);
    room[y][x] = LIGHT_BULB;
  }
  
  const getScore = (y, x) => {
    const scoreLeft = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB && room[y][x] !== LIGHTED) {
          return 1 + scoreLeft(y, x - 1);
        }
        return 0;
      }
      return 0;
    }
    
    const scoreRight = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB && room[y][x] !== LIGHTED) {
          return 1 + scoreRight(y, x + 1);
        }
        return 0;
      }
      return 0;
    }
    
    const scoreUp = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB && room[y][x] !== LIGHTED) {
          return 1 + scoreUp(y - 1, x);
        }
        return 0;
      }
      return 0;
    }
    
    const scoreDown = (y, x) => {
      if (room[y] && room[y][x]) {
        if (room[y][x] !== WALL && room[y][x] !== LIGHT_BULB && room[y][x] !== LIGHTED) {
          return 1 + scoreDown(y + 1, x);
        }
        return 0;
      }
      return 0;
    }
    const downScore = scoreDown(y, x);
    const upScore = scoreUp(y, x);
    const rightScore = scoreRight(y, x);
    const leftScore = scoreLeft(y, x);
    const total = downScore + upScore + rightScore + leftScore;
    return total;
  }
  
  const getTopScoreCoordinates = () => {
    let bestScore = 0;
    const coordinates = { y: -1, x: -1};
    for (let y = 0; y < room.length; y++) {
      for (let x = 0; x < room[0].length; x++) {
        if (room[y][x] === EMPTY) {
          const score = getScore(y, x);
          if (score > bestScore) {
            bestScore = score;
            coordinates.y = y;
            coordinates.x = x;
          }
        }
      }
    }
    return coordinates;
  }

  if (room && room.length) {
    let lightBulbs = 0;
    console.table(room)
    while(true) {
      const { y, x } = getTopScoreCoordinates();
      if (y < 0 || x < 0) break;
      placeBulb(y, x);
      lightBulbs++;
    }

    console.table(room);
    console.log('Número mínimo de bombillas: '.green, lightBulbs);
  } else {
    console.log('\nEs necesario cargar una Habitación antes.'.red);
  }
};

module.exports = {
  solve
};
