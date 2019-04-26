

$.get("/api/drinks/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("drink");

      row.append("<p>" + data[i].title + "</p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>" + data[i].catergory + "</p>");
      

      $("#HTMLPAGE").prepend(row);

    }

  }

});

// When user chirps (clicks addBtn)
// $("#drink-submit").on("click", function(event) {
//   event.preventDefault();

//   // Make a newChirp object
//   var newDrink = {
//     title: $("#title").val().trim(),
//     body: $("#drinks-box").val().trim(),
//     catergory: $("#drinks-box").val().trim(),
//   };

//   console.log(newDrink);

//   // Send an AJAX POST-request with jQuery
//   $.post("/api/drink", newDrink)
//     // On success, run the following code
//     .then(function() {

//       var row = $("<div>");
//       row.addClass("drink");

//       row.append("<p>" + newDrink.title + "</p>");
//       row.append("<p>" + newDrink.body + "</p>");
//       row.append("<p>" + newDrink.catergory + "</p>");
     

//       $("#drinks-area").prepend(row);

//     });

//   // Empty each input box by replacing the value with an empty string
//   $("#title").val("");
//   $("#drinks-box").val("");
// });
