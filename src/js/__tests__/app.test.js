import {showHealth} from '../app.js';

test("show person's health", ()=> {
  const wizard = {
    name:"wizard",
    health: 70
  };

  expect(showHealth(wizard)).toBe("wizard healthy")

})

test("show person's health", ()=> {
  const wizard = {
    name:"wizard",
    health: 30
  };

  expect(showHealth(wizard)).toBe("wizard wounded")

})

test("show person's health", ()=> {
  const wizard = {
    name:"wizard",
    health: 8
  };

  expect(showHealth(wizard)).toBe("wizard critical")

})

import {getRaiting} from '../app.js';
import {getMax} from '../app.js';



