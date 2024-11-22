const needle = require('needle');

const url = 'https://api.thecatapi.com/v1/breeds/search'; 

needle.get(url, (error, response) => {

  if (error) {
    console.error('Error:', error);
    
  } else {
    console.log(typeof response.body);
    console.log('Body:', response.body);
    // console.log('Status Code:', response.statusCode);
    // console.log('Response Headers:', response.headers);
  }
});