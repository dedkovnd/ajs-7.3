// TODO: write your code here
import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));
export function showHealth(person) {
  if (person.health > 50) {
    return(`${person.name} healthy`)
  } else if (person.health < 51 && person.health > 15) {
    return(`${person.name} wounded`)
  } else if (person.health < 15) {
    return(`${person.name} critical`)
  }
}

let persons = [];
let personsMap = persons.map(person => person);
let raiting = [];
let healthes = persons.map(elem => elem.health);

export function getMax (healthes){
  let max = Math.max.apply(null, healthes);
  let index = healthes.indexOf(max);
  healthes.splice(index,1)
  raiting.push(personsMap[index])
  personsMap.splice(index,1)
  if (personsMap.length > 0) {
    getRaiting(personsMap);
  }
}

export function getRaiting(personsMap) {
  if (personsMap.length > 0) {
    getMax(healthes);
  }
}


