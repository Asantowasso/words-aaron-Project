// This is where I will implement the API

//Finds info about the departments

// fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (obj) {
//     console.log(obj)
//     console.log(obj.departments[0].displayName);
//     console.log(obj.departments[1].displayName);
//     console.log(obj.departments[8].displayName);
//     console.log(obj.departments[10].displayName);

//     // American Decorative Arts display
//     var name1 = obj.departments[0].displayName;
//     document.querySelector(".section1").innerHTML = name1;

//     //Ancient Near Eastern Art display
//     var name2 = obj.departments[1].displayName;
//     document.querySelector(".section2").innerHTML = name2;

//     //Egyptian Art
//     var name3 = obj.departments[8].displayName;
//     document.querySelector(".section3").innerHTML = name3;

//     //European Sculpture and Decorative Arts
//     var name4 = obj.departments[10].displayName;
//     document.querySelector(".section4").innerHTML = name4;
//   });


fetch("https://api.le-systeme-solaire.net/rest/bodies/ ")
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    console.log(data)
  })
  

// var req1 = "468379";
// var req2 = "323912"
// var req3 = "56766";

// const reqs = [req1, req2, req3];

// for (let i = 0; i < reqs.length; i++) {
//   console.log(reqs[i]);
//   fetch(
//     "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
//       reqs[i]
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (obj) {

//       console.log(obj);
//       console.log(obj.title)
     
//       var titles = obj.title
//       const names =[titles]

//       console.log(names)
      
      

      // console.log(obj.primaryImage)
      // console.log(obj.objectID)
      // console.log(obj.department)

      //display titles
      // var title1 = obj.title
      // document.querySelector(".section1").innerHTML = title1
      // console.log(title1)

      
      
//     });
// }

// console.log(reqs);
