function lastIndexOf (lastArray, index) {

  for (let i = lastArray.length - 1; i >= 0; i--) {    //backwards loop to find last index
    if (index === lastArray[i]) {
      index = i;
      return index;   
    } 
  }
  return -1;    //return -1 unless value is found
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);