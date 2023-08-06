// This is where I will implement the API

//Finds info about the departments

fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj.departments[0].displayName);
    console.log(obj.departments[1].displayName);
    console.log(obj.departments[8].displayName);
    console.log(obj.departments[10].displayName);

    // American Decorative Arts display
    var name1 = obj.departments[0].displayName;
    document.querySelector(".section1").innerHTML = name1;

    //Ancient Near Eastern Art display
    var name2 = obj.departments[1].displayName;
    document.querySelector(".section2").innerHTML = name2;

    //Egyptian Art
    var name3 = obj.departments[8].displayName;
    document.querySelector(".section3").innerHTML = name3;

    //European Sculpture and Decorative Arts
    var name4 = obj.departments[10].displayName;
    document.querySelector(".section4").innerHTML = name4;
  });

// This function displays the objectIDs of four unique pieces from each of the feature collections

fetch(
  "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1|3|10|12"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    // console.log(obj.objectIDs[1000])
    console.log(obj.objectIDs[61800]);
    console.log(obj.objectIDs[68186]);
    console.log(obj.objectIDs[33151]);
  });




var req1 = "3397"
var req2 = "323912"
var req3 = "56766"

const reqs = [req1, req2, req3]

let i = 0
while (i < reqs.length){
  console.log(reqs[i]);
  i++
}

fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + reqs[i])
  .then (function (response){
    return response.json()
  })


// Promise.any(reqs)
// .then(function (response){
//   return response.data();
// })
// .then(function(obj){
//   console.log(obj)
// })








// var art1 = obj.objectIDs[1000];
// document.querySelector(".item1").innerHTML = art1;

// var art2 = obj.objectIDs[61800];
// document.querySelector(".item2").innerHTML = art2;

// var art3 = obj.objectIDs[68186];
// document.querySelector(".item3").innerHTML = art3;

// var art4 = obj.objectIDs[33151];
// document.querySelector(".item4").innerHTML = art4;

//retrieving information for each of the featured items
// Item from the American Collection
// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/3397").then(function(response){
//   return response.json()
// })
// .then(function (obj){
//   console.log(obj)
//   console.log(obj.title)
//   console.log(obj.primaryImage)
//   console.log(obj.accessionYear)
//   console.log(obj.objectID)

//   var art1 = obj.title;
//   document.querySelector(".item1").innerHTML = art1
// })

// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/323912").then(function(response){
//   return response.json()
// })
// .then(function (obj){
//   console.log(obj)
//   console.log(obj.title)
//   console.log(obj.primaryImage)
//   console.log(obj.accessionYear)
//   console.log(obj.objectID)

//   var art2 = obj.title;
//   document.querySelector(".item2").innerHTML = art2
// })

// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/56766").then(function(response){
//   return response.json()
// })
// .then(function (obj){
//   console.log(obj)
//   console.log(obj.title)
//   console.log(obj.primaryImage)
//   console.log(obj.accessionYear)
//   console.log(obj.objectID)

//   var art3 = obj.title;
//   document.querySelector(".item3").innerHTML = art3
// })
