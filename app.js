"use strict";

/*
  JAVASCRIPT FOR INDEX.html
  Maria McKenzie
*/

//LOAD THE DOCUMENT
$(document).ready(function() {
  var btn = $('.btn');
  var result = $('.result');
  var keyword = document.getElementById("s_name").value;

  btn.on('click', function() {
    $.ajax('superheroes.php', {
      method: 'GET'
    }).done(function(response) {
      result.html(response);
    }).fail(function() {
      alert('There was a problem with the request.');
    });
  });
});
