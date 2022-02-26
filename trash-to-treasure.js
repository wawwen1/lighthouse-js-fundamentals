function smartGarbage (trash, bins) {
  Object.keys(bins);      //returns array of object's properties
  bins[trash]++           
  console.log(bins);
  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
