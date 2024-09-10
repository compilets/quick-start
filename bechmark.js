#!/usr/bin/env node --experimental-strip-types

let sieveOfEratosthenesJs =
  require('./eratosthenes.ts').sieveOfEratosthenes;
let sieveOfEratosthenesNative =
  require('./cpp-project/out/Release/quick-start.node').sieveOfEratosthenes;

console.time('sieveOfEratosthenes in JS');
const jsPrimes = sieveOfEratosthenesJs(1000 * 1000);
console.timeEnd('sieveOfEratosthenes in JS');

console.time('sieveOfEratosthenes in C++');
const nativePrimes = sieveOfEratosthenesNative(1000 * 1000);
console.timeEnd('sieveOfEratosthenes in C++');

const {deepStrictEqual} = require('node:assert');
deepStrictEqual(jsPrimes, nativePrimes);

let isPrimeNumberJS =
  require('./eratosthenes.ts').isPrimeNumber;
let isPrimeNumberNative =
  require('./cpp-project/out/Release/quick-start.node').isPrimeNumber;

console.time('isPrimeNumber in JS');
isPrimeNumberJS(9007199254740881);
console.timeEnd('isPrimeNumber in JS');

console.time('isPrimeNumber in C++');
isPrimeNumberNative(9007199254740881);
console.timeEnd('isPrimeNumber in C++');
