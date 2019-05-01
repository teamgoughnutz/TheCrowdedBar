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

refreshExamples gets new examples from the db and repopulates the list
var refreshsoberDrinks = function() {
  API.getsoberDrink().then(function(data) {
    var $nonDrink = data.map(function(results) {
      var $a = $("<a>")
        .text(nonDrink.text)
        .attr("href", "/drink/" + results.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": results.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $nonDrinkList.empty();
    $nonDrinkList.append($nonDrink);
  });
};
var refreshdrunkDrink = function() {
  API.getdrunkDrink().then(function(data) {
    var $drunkDrink = data.map(function(results) {
      var $a = $("<a>")
        .text(results.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": results.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $drunkDrinkList.empty();
    $drunkDrinkList.append($drunkDrink);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var newNonDrink = {
    name: $nonDrinkName.val().trim(),
    body: $nonDrinkbody.val().trim()
  };

  if (!(newNonDrink.name && newNonDrink.body)) {
    alert("You must enter an example name and body!");
    return;
  }

  API.saveNewNonDrink(newNonDrink).then(function() {
    refreshsoberDrinks();
  });

  $newNonDrink.name.val("");
  $newNonDrink.body.val("");
};
var handleFormSubmit = function(event) {
  event.preventDefault();

  var newDrink = {
    name: $drinkName.val().trim(),
    body: $drinkBody.val().trim()
  };

  if (!(newDrink.name && newDrink.body)) {
    alert("You must enter an example Name and Body!");
    return;
  }

  API.saveNewDrink(newDrink).then(function() {
    refreshdrunkDrinks();
  });

  $newDrink.name.val("");
  $newDrink.body.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletesoberDrink(idToDelete).then(function() {
    refreshsoberDrinks();
  });

  API.deletedrunkDrink(idToDelete).then(function(){
    refreshdrunkDrink();
  });
  
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$drunkDrinkList.on("click", ".delete", handleDeleteBtnClick);
$nonDrinkList.on("click", ".delete", handleDeleteBtnClick);
