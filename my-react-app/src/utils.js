//Week 1 Challenges

//Day 1 In Class Challenge

/*

Sign up for an OMDb API key at 
http://www.omdbapi.com. Write an arrow 
function called getMoviesByName that 
takes a string as input and uses fetch 
and async/await to get an array of movies 
with a matching title from OMDb API.
Write another arrow function called 
getMovieDetailsById that takes a valid 
OMDb movie id as input and uses fetch 
and async/await to get an object of 
detailed information about the specified movie.

*/

const API_KEY = prompt("Enter api key")

/*const getMoviesByName = async () => {
  console.log('Get Movies By Name');
  const user = prompt(`Please enter a movie you would like to search`)
  const URL = `https://www.omdbapi.com/?s=${user}&apikey=${API_KEY}`;
  const result = await fetch(URL);
  const json = await result.json();

  for(let i = 0; i < json.Search.length;i++) {
    console.log(json.Search[i].Title)
  }
  //console.log(json);
};
getMoviesByName(); */


const getMovieDetailsById = async () => {
    console.log("Get Movies By I.D.")
    const user = prompt(`Please enter a movie I.D. you would like to search`)
    const URL = `https://www.omdbapi.com/?i=${user}&apikey=${API_KEY}`;
    const result = await fetch(URL);
    const json = await result.json();
    
    console.log(`Title: ${json.Title} Genre: ${json.Genre} \nIMBD Rating: ${json.imdbRating} \nBoxOffice: ${json.BoxOffice} + RunTime: ${json.Runtime}`);
    
    console.log(json.Plot);
};
getMovieDetailsById();
