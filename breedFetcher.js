const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {

  if (!breedName) {
    callback('Please enter a breed name', null);
    return;
  }

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  needle.get(url, (error, response) => {

    if (error) {
      callback(error, null);
      return;
    }

    const data = response.body;
    
    if (data.length > 0) {
      const breed = data[0];
      callback(null, breed.description);

    } else {
      callback('Breed not found', null);
    }

  });
};

module.exports = { fetchBreedDescription };
