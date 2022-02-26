function carPassing (cars, speed) {

  let newCars = {       //create new object
    time: Date.now(),
    speed: speed 
  };

  cars.push(newCars);       //push new object into existing array
  console.log(cars);
  return cars;        //return existing array
}

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)