const needle = require('needle');

const args = process.argv;
const breedName = args[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

needle.get(url, (error, response) => {

  if (!breedName) {
    console.error('Please enter a breed name');
    return;
  }

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  const data = response.body;
  
  if (data.length > 0) {
    const breed = data[0];
    console.log('Description:', breed.description);

  } else {
    console.log('Breed not found');
  }
  
});