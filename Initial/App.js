const fs = require('fs');
const validator = require('validator');
fs.writeFileSync('notes.txt','Game begins and Live to fight for another day');
console.log("Lose yourself in the process ");
fs.appendFileSync('notes.txt','\t Live to fight or lose yourself in the process',console.log('I am in callback'));
const name = require('./Util');
console.log(validator.isEmail('rishigmail.com'));
