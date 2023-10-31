import { capitalize } from './functions/capitalize';
import { reverseString } from './functions/reverseString';
import { calculator } from './functions/calculator';
import { caesarCipher } from './functions/caesarCipher';
import { analyzeArray } from './functions/analyzeArray';

console.log(capitalize('hello')); // Should log: 'Hello'
console.log(reverseString('world')); // Should log: 'dlrow'
console.log(calculator.add(5, 3)); // Should log: 8
console.log(calculator.subtract(5, 3)); // Should log: 2
console.log(caesarCipher('Hello, World!', 3)); // Should log: 'Khoor, Zruog!'
console.log(analyzeArray([1, 8, 3, 4, 2, 6])); // Should log the analysis object
