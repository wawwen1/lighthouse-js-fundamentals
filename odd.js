//returns true (odd) otherwise will return false (even) if number has a remainder 

let isOdd = function (num) {
if (num % 2 === 0) {
	return false;
}
return true;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
