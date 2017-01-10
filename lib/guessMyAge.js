'use strict';
const ask = require ('../lib/ask.js');
let answer;
answer = ask('How old are you? ');
if (answer < 10) {
  console.log('Why are you on a computer? Go outside!');
} else if (answer > 90) {
  console.log('You old fart!');
} else {
  console.log('How boring...');
}
