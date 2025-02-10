import { reverseString, capitalizeFirstLetter } from './string.mjs';
import { add, subtract, multiply, divide } from './math.mjs';
import { generateRandomInteger, generateRandomFloat } from './random.mjs';
import { Person } from './class.mjs';
import { findMax, findMin, sumArray } from './arr.mjs';




console.log(reverseString("hello"));  
console.log(capitalizeFirstLetter("hello")); 


console.log(add(5, 10));  
console.log(subtract(10, 5));  
console.log(multiply(5, 10));  
console.log(divide(10, 2));  
console.log(divide(10, 0));  


console.log(generateRandomInteger(1, 100));  
console.log(generateRandomFloat(1, 100));  


const person1 = new Person("John", 30);
console.log(person1.greet());  


const arr = [1, 2, 3, 4, 5];
console.log(findMax(arr));  
console.log(findMin(arr));  
console.log(sumArray(arr));  
