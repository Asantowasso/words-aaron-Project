// This is where I will implement the API


const API_JOKE_SPEW = 'https://official-joke-api.appspot.com/random_joke';

async function fetchData(url) {
  const response = await fetch (url);
  const data = await response.json();
  return data;
}

async function getJOKEData() {
  const data = await fetchData(API_JOKE_SPEW);
  const jokeData = {
    set: data.setup,
    punch: data.punchline

  };
  return jokeData;
}
  
  






