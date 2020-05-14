import {showHealth} from '../app.js';
import {getRaiting} from '../app.js';
import {getMax} from '../app.js';
import {raiting} from '../app.js';

test("show person's health", ()=> {
  const swordsman = {
    name:"swordsman",
    health: 70
  };

  expect(showHealth(swordsman)).toBe("swordsman healthy")

  const archer = {
    name:"archer",
    health: 30
  };
  expect(showHealth(archer)).toBe("archer wounded")

  const wizard = {
    name:"wizard",
    health: 8
  };
  expect(showHealth(wizard)).toBe("wizard critical")
})

test ("function can change object", ()=>{
  let persons = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
  ]
  expect(getRaiting(persons)).toBe(raiting)
})

test("getMax don't take string",()=> {
  let persons = [
    {name: 'мечник', health: "jjj"},
  ]
  let healthes = persons.map(elem => elem.health);

  expect(getMax(healthes)).toBeUndefined();
})




