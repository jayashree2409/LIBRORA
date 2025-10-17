// Select popup elements
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");

// Show popup
addPopupButton.addEventListener("click", function () {
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});

// Select cancel button
var cancelPopup = document.getElementById("cancel-popup");
cancelPopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

// Select container, add button & inputs
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

// Add book
addBook.addEventListener("click", function (event) {
  event.preventDefault();

  // Create book container
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");

  div.innerHTML = `
    <h2>${bookTitleInput.value}</h2>
    <h5>${bookAuthorInput.value}</h5>
    <p>${bookDescriptionInput.value}</p>
    <button onclick="deleteBook(event)">Delete</button>
  `;

  container.append(div);

  // Close popup
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";

  // Clear inputs
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookDescriptionInput.value = "";
});

function deleteBook(event) {
  event.target.parentElement.remove();
}



