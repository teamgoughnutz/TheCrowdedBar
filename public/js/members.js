$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
 

var blogContainer = $("#drunkCards");
// Click events for the edit and delete buttons
$(document).on("click", "button.delete", handlePostDelete);
$(document).on("click", "button.edit", handlePostEdit);
var posts;

// This function grabs posts from the database and updates the view
function getDrinks() {
  $.get("/api/getdrunk", function (data) {
    console.log("Drinks", data);
    posts = data;

    if (!posts || !posts.length) {
      displayEmpty();
    }
    else {
      initializeRows();
    }
  });
}

// This function does an API call to delete posts
function deletePost(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/posts/" + id
  })
    .then(function () {
      getDrinks();
    });
}

// Getting the initial list of posts

getDrinks();
// InitializeRows handles appending all of our constructed post HTML inside
// blogContainer
function initializeRows() {
  blogContainer.empty();
  var postsToAdd = [];
  for (var i = 0; i < posts.length; i++) {
    postsToAdd.push(createNewRow(posts[i]));
  }
  blogContainer.append(postsToAdd);
}

// This function constructs a post's HTML
function createNewRow(post) {
  var newPostCard = $("<div>");
  newPostCard.addClass("card");
  var newPostCardHeading = $("<div>");
  newPostCardHeading.addClass("card-header");
  var deleteBtn = $("<button>");
  deleteBtn.text("x");
  deleteBtn.addClass("delete btn btn-danger");
  var editBtn = $("<button>");
  editBtn.text("EDIT");
  editBtn.addClass("edit btn btn-default");
  var newPostTitle = $("<h2>");
  var newPostCategory = $("<h5>");
  newPostCategory.text(post.category);
  newPostCategory.css({
    float: "right",
    "font-weight": "700",
    "margin-top":
      "-15px"
  });
  var newPostCardBody = $("<div>");
  newPostCardBody.addClass("card-body");
  var newPostBody = $("<p>");
  newPostTitle.text(post.name);
  newPostBody.text(post.body);
  newPostCardHeading.append(deleteBtn);
  newPostCardHeading.append(editBtn);
  newPostCardHeading.append(newPostTitle);
  newPostCardHeading.append(newPostCategory);
  newPostCardBody.append(newPostBody);
  newPostCard.append(newPostCardHeading);
  newPostCard.append(newPostCardBody);
  newPostCard.data("post", post);
  return newPostCard;
}

// This function figures out which post we want to delete and then calls
// deletePost
function handlePostDelete() {
  var currentPost = $(this)
    .parent()
    .parent()
    .data("post");
  deletePost(currentPost.id);
}

// This function figures out which post we want to edit and takes it to the
// Appropriate url
function handlePostEdit() {
  var currentPost = $(this)
    .parent()
    .parent()
    .data("post");
  window.location.href = "/cms?post_id=" + currentPost.id;
}

// This function displays a message when there are no posts
function displayEmpty() {
  blogContainer.empty();
  var messageH2 = $("<h2>");
  messageH2.css({ "text-align": "center", "margin-top": "50px" });
  messageH2.html("Welcome to our bar! please add a drink above or browse our Bartender!");
  blogContainer.append(messageH2);
}
});