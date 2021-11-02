"use strict";

/*
  JAVASCRIPT FOR INDEX.html
  Maria McKenzie
*/

//LOAD THE DOCUMENT
<<<<<<< HEAD
window.addEventListener("load", function() {
    let btn = document.querySelector(".btn");
    let wrd = document.querySelector("#s_name").value;

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        let res1 = '<ul>';
        let res2 = '';
        let wrd = document.querySelector("#s_name").value;
        let txt = wrd.replace( /(<([^>]+)>)/ig, '');

        //capitalises the first letter of each word
        if (txt.length > 0) {
          txt = fixInput(txt);
        }

        fetch("superheroes.php?query=" + txt)
            .then(response => {
                if (response.ok) {
                  return response.json();

                } else {
                    return Promise.reject("Error!");
                }
            })
            .then(data => {
                let result = document.querySelector(".result");
                result.innerHTML = data;
                if (data.length == 1) {
                  result.innerHTML ='<p style="color:red;font-weight:bold;text-transform:uppercase;;">'+ data[0]+'</p>';
                }
                else if (data.length == 3) {
                  // alias - <h3>
                  // Name - <h4>
                  // biography - <p>
                  res2 = '<h3>'+data[1]+'</h3>' + '<h4>'+data[0]+'</h4>' + '<p>'+data[2]+'</p>';
                  result.innerHTML = res2;
                }
                else {
                    for (let i = 0; i < data.length; i++) {
                      res1 += '<li>' + data[i] + '</li>';
                    }
                    result.innerHTML =res1 + '</ul>';
                }
            })
            .catch(error => console.log(error))
=======
$(document).ready(function() {
  let btn = $('.btn');
  let result = $('.result');
    let allObj = "<ul>";

  btn.on('click', function(e) {
    e.preventDefault();
    $.ajax('superheroes.php', {
      method: 'GET'
    }).done(function(response) {
      let heroesJSON = JSON.parse(response);
      let keyword = document.querySelector("#s_name").value;
      //console.log(typeof keyword);
      //console.log(keyword);
      console.log(keyword);
      //if (keyword.length == 0){
        for (let i = 0; i < heroesJSON.length; i++){
          allObj += "<li>"+ heroesJSON[i]["alias"].toString() + "</li>";
          result.html(allObj + "</ul>");
          console.log(allObj);
      }//}
      //for (let i = 0; i < heroesJSON.length; i++){
        //if (keyword == i){
          //result.html(heroesJSON[i]["id"]);}
      //}
      ///result.html(heroesJSON.length);

      //result
    }).fail(function() {
      alert('There was a problem with the request.');
>>>>>>> 0f4d9f5044679bda0cbc34c5891f1fadca93ef4d
    });
});

//fucntion to capitalise the words - for search purposes
function fixInput(input) {
  let input_lst = input.split(' ');
  let input_with_caps = [];

  input_lst.forEach(element => {
    input_with_caps.push(element[0].toUpperCase() + element.slice(1, element.length));
  });

  return input_with_caps.join(' ');
}
