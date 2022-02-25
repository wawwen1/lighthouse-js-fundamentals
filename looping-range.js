function range (start, end, step) {
let finalArray = [];

  if (step <= 0) {
    return finalArray;
  } else if (start > end) {
    return finalArray;
  } else if (start === false || end === false || step === false) {
    return finalArray;
  }
  
  for (let i = start; i <= end; i += step) {
    finalArray.push(i);
  }
  return finalArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
