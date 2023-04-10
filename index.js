drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, string){
  return drivers.filter(drivers => drivers.toUpperCase() === string.toUpperCase());
}

console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "bobby"));
console.log(findMatching(drivers, "Susan"));


function fuzzyMatch(drivers, string){
  return drivers.filter(elem => {
    return elem.startsWith(string)
  })
}

console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'y'));
console.log(fuzzyMatch(drivers, 'mm'));


const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(driversObj, string) {
    return driversObj.filter(driversObj => driversObj.name === string)
  
  }

 
    
  



