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



export function getRaiting(persons) {
  let raiting = [];
  let personsMap = persons.map(person => person);
  let healthes = persons.map(elem => elem.health);

  for (let i = 0; i < personsMap.length + 2; i++) {
    let max = Math.max.apply(null, healthes);
    let index = healthes.indexOf(max);
    healthes.splice(index,1)
    raiting.push(personsMap[index])
    personsMap.splice(index,1)
  }
  return raiting
}

