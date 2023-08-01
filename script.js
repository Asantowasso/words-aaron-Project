// This is where I will implement the API

fetch ('https://collectionapi.metmuseum.org/public/collection/v1/departments').then(function (response) {
  return response.json();
}).then(function (obj){
  console.log(obj.departments);
})
















