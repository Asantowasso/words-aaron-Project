// This is where I will implement the API


const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';
const display = document.querySelector("#display-data")

const getData = async () => {
  const res = await fetch (apiEndpoint);
  const data = await res.json();
  return data
}

// getData()

const displayJokes = async () => {
  const payload  = await getData();
  console.log(payload)

  let dataDisplay = payload.map((object) => {
    const {name, username} = object;

    return `
    <div>
    <div class="container">
    <p>name: ${name}</p>
    <p>username: ${username}</p>
    </div>
    `

  });

  display.innerHTML = dataDisplay

}
displayJokes();
  






