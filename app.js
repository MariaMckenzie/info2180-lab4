"use strict";

/*
  JAVASCRIPT FOR INDEX.html
  Maria McKenzie
*/

//LOAD THE DOCUMENT
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
    });
  });
});
