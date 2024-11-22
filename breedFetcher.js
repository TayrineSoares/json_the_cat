const needle = require('needle');

// Allow the user to specify the breed name using command-line arguments.
const args = process.argv;
const breed = args[2];

// Retrieves breed from the command line
const url = ('https://api.thecatapi.com/v1/breeds/search?q=' + breed);



needle.get(url, (error, response) => {

  if (error) {
    console.error('Error:', error);
    
  } else {
    console.log(typeof response.body);
    console.log('Body:', response.body);
  }
});