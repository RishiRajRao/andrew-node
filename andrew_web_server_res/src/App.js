const express = require('express');
const path = require('path');
// console.log(path.join(__dirname , '../public/index'))


const app = express();
const publicDirectory = path.join(__dirname, '../public');

app.get('/',(req,res,next)=>{
  res.send('coding is fun and game begins');
})
app.get('/help',(req,res,next)=>{
  res.send('<h1>only loosers ask for help</h1>');
})

app.use(express.static(publicDirectory));

app.listen(8080,()=>{
  console.log('server started');
})

