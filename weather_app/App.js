const request = require('request');
 
const url = 'http://api.weatherstack.com/current?access_key=e263346507bd3644a16a918d21af6400&query=New York';

request({url:url,json:true},(error,response)=>{
  // const data = JSON.parse(response.body);
  console.log('res',response.body.current);
})