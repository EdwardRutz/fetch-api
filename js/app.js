const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())      //response method converts the raw data to json
    .then(data => console.log(data.message))
    // .then(response => console.log(response))     //returns the data in the raw format


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

