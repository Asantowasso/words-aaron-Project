// This is where I will implement the API

console.log("is it here");
fetch("https://official-joke-api.appspot.com/random_joke", {
  method: "GET",
})
  .then(res => {return  res.json()})
  .then((data) => console.log(data))
  
  // Extracting the information

  async function getJokeData() {
    const data = await fetchData('https://official-joke-api.appspot.com/random_joke');
    const jokeData = {
      setup: data.setup,
      punchline: data.punchline
    }
    return jokeData
  }


  console.log(getJokeData)

  function showJokes(setup, punchline) {
    document.getElementById('setup').textContent = setup;
    document.getElementById('punchline').textContent = punchline;
  }

    console.log(showJokes)




