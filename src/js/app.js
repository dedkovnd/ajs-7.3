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

let persons = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80}
]
let raiting = [];
let names = [];
let healthes = [];

persons.forEach((elem)=>{
  names.push(elem.name)
  healthes.push(elem.health)
})

export function getMax (healthes){
  let max = Math.max.apply(null, healthes);
  let index = healthes.indexOf(max);
  healthes.splice(index,1)
  raiting.push(persons[index])
  persons.splice(index,1)
  if (persons.length > 0) {
    getRaiting(persons);
  }
}

export function getRaiting(persons) {
  if (persons.length > 0) {
    getMax(healthes);
  }
}


