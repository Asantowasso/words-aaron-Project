// This is where I will implement the API

//Finds info about the departments

fetch ('https://collectionapi.metmuseum.org/public/collection/v1/departments').then(function (response) {
  return response.json();
}).then(function (obj){
  console.log(obj.departments[0].displayName);
  console.log(obj.departments[1].displayName)
  console.log(obj.departments[8].displayName)
  console.log(obj.departments[10].displayName)
})
















