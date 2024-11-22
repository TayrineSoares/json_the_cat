const needle = require('needle');

// Allow the user to specify the breed name using command-line arguments.
const args = process.argv;
const breedName = args[2];

// Retrieves breed from the command line
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


needle.get(url, (error, response) => {

  if (error) {
    console.error('Error fetching data:', error);
    return; //The return statement ensures the script stops further execution in the event of an error.
  }

  const data = response.body; 
  // console.log(typeof data); // it is an object
  // console.log(data);  //it is an array of objects

  
  if (data.length > 0) { 
    const breed = data[0]; // the object that we want is the index 0 of the array
    console.log('Description:', breed.description);
    } else {
      console.log('Breed not found');
    }
});