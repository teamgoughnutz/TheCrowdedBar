// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveSober: function (results) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/staysober",
      data: JSON.stringify(results)
    });
  },
  saveDrink: function (results) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/getdrunk",
      data: JSON.stringify(results)
    });
  },
  getSober: function () {
    return $.ajax({
      url: "api/staysober",
      type: "GET"
    });
  },
  getDrink: function () {
    return $.ajax({
      url: "api/getdrunk",
      type: "GET"
    });
  },
  deleteSober: function (id) {
    return $.ajax({
      url: "api/staysober/" + id,
      type: "DELETE"
    });
  },
  deleteDrink: function (id) {
    return $.ajax({
      url: "api/getdrunk/" + id,
      type: "DELETE"
    });
  }
};

