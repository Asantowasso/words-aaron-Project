// This is where I will implement the API

console.log("is it here")
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/narrow')
  .then(res => res.json())
  .then(data =>console.log(data))




















