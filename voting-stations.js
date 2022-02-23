const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  let goodStations = []; 			//empty good station list
  for (let station of stations) {		//for..of loop for arrays

    let capacity = station[1];		//index of stations
    let type = station[2];
					//eligibility check
    if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
      goodStations.push(station[0]);		//pushed into new array
    }
  }
      return goodStations;
} 

console.log(chooseStations(stations));
