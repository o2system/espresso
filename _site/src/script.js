import './style.css'
// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
import Espresso from './Espresso'
import { tambah, kali } from './sample/math'
import {sayHello} from './sample/hello';

console.log("hello, world");

console.log(tambah(10,20))
console.log(kali(3,4))


const resultGreeting = document.getElementById('resultGreeting');
const resultSum = document.getElementById('resultSum');
const resultProduct = document.getElementById('resultProduct');


resultGreeting.textContent = sayHello('Nice to see you! ');
resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}. `;
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}. `;

espresso = new Espresso();

