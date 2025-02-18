
import countFirstLetterOccurrence from './string.js';


import { toUpperCase, reverseString as reverseStr } from './stringUtils.js'; 

const exampleString = "banana";

console.log(`"${exampleString}" -ში პირველი ასო გვხვდება:`, countFirstLetterOccurrence(exampleString));
console.log(`"${exampleString}" დიდ ასოებად:`, toUpperCase(exampleString));
console.log(`"${exampleString}" შებრუნებული:`, reverseStr(exampleString)); 
