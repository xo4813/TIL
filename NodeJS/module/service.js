
// const fs = require('fs')
// const express = require('express');
const sum = require('./utility');
// const routes = require('./routes')
// const dbconfig = require('./configs/database.json');

const total = sum([100, 200, 300]);

console.log(total);
console.log(sum([1,2,3]));

const greetings = require('./greetings');

console.log(
  `Korean: ${greetings.sayHelloInKorean()}
  & English: ${greetings.sayHelloInEnglish()}
  & Swedish: ${greetings.sayHelloInSwedish()}`
);

// 메모리
const os = require('os');

const totalMemory = os.totalmem() / 1024 / 1024 / 1024;
const freeMemory = os.freemem() / 1024 / 1024;

console.log("Total Mememory: " + totalMemory + 'gb');
console.log(`Free Memory: ${freeMemory}mb`);