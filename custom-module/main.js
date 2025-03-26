
import mathOperation from './app.js';
import { addNumber, subtract } from './math.js';

const addition = addNumber(2, 3);
console.log(addition);

const sustraction = subtract(10,3)
console.log(sustraction)

const multiplication = mathOperation.multiply(2,3)

console.log(multiplication)

const division = mathOperation.divide(10,2)

console.log(division)