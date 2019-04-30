// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $drinkList = $("#drink-list");
var $nonDrinkList = $("#nonDrink-list");
// The API object contains methods for each kind of request we'll make
var API = {
  savesoberDrink: function(results) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/staysober",
      data: JSON.stringify(results)
    });
  },
  savedrunkDrink: function(results) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/getdrunk",
      data: JSON.stringify(results)
    });
  },
  getsoberDrink: function() {
    return $.ajax({
      url: "api/staysober",
      type: "GET"
    });
  },
  getdrunkDrink: function() {
    return $.ajax({
      url: "api/getdrunk",
      type: "GET"
    });
  },
  deletesoberDrink: function(id) {
    return $.ajax({
      url: "api/staysober/" + id,
      type: "DELETE"
    });
  },
  deletedrunkDrink: function(id) {
    return $.ajax({
      url: "api/getdrunk/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshDrinks = function() {
//   API.getsoberDrink().then(function(data) {
//     var $nonDrink = data.map(function(results) {
//       var $a = $("<a>")
//         .text(nonDrink.text)
//         .attr("href", "/drink/" + results.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": results.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
