// takes an array of countries and number of options
// and returns an array of "numOfOptions" random countries

export function getOptions(countriesArray, numOfOptions) {
  let newOptions = [];
  for (let i = 0; newOptions.length < numOfOptions; i++) {
    let index = Math.floor(Math.random() * countriesArray.length);
    if (!newOptions.includes(countriesArray[index])) {
      newOptions.push(countriesArray[index]);
    }
  }
  return newOptions;
}
