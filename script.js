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

  // Now I want to access specific pieces 

  fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj){
    console.log(obj)
  }) 
