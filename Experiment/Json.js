const book = {
  title:'ego is enemy',
  author:'Ryan holid'
}

const bookJson = JSON.stringify(book);
const book1 = JSON.parse(bookJson);
console.log(bookJson);
console.log(book);
console.log(book1);
const fs  = require('fs');
fs.writeFileSync('bookJSON.json',bookJson);

const data = fs.readFileSync('bookJSON.json');
console.log('dataBuffer',data.toString());