const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; //[1,4]

function finalPosition (moves) {
  let x = 0
  let y = 0

//loop for entire array  
  for (let i = 0; i < moves.length; i++) {

//coordinates calculation    
    if (moves[i] === 'north') {
      y++;
    } else if (moves[i] === 'south') {
      y--;
    } else if (moves[i] === 'east') {
      x++;
    } else if (moves[i] === 'west') {
      x--;
    }
  }   
//final coordinates -> array
  let coord = [x, y]
  return coord;
}

console.log(finalPosition(moves));
