// Your base URL for your API will be: http://localhost:3000

// The endpoints you may need are:

// GET /ramens
// GET /ramens/:id
// Feel free to add any additional classes or ids to any elements in the HTML file as you see fit.

// write your code here
// Core Deliverables
// As a user, I can:

// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

const menu = document.getElementById("ramen-menu");
const detailImg = document.querySelector(".detail-image");
const ramenName = document.querySelector(".name");
const detailRestaurant = document.querySelector(".restaurant");
const detailRating = document.getElementById("rating-display");
const detailComment = document.getElementById("comment-display");
const ramenForm = document.getElementById("new-ramen");

const renderARamen = (ramen) => {
  const ramenElement = document.createElement("img");
  ramenElement.src = ramen.image;

  ramenElement.addEventListener("click", () => {
    detailImg.src = ramen.image;
    detailRestaurant.textContent = ramen.restaurant;
    ramenName.textContent = ramen.name;
  });

  menu.append(ramenElement);
};

fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((ramen) => renderARamen(ramen));
  });

ramenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const restaurant = event.target.restaurant.value;
  const image = event.target.image.value;
  const rating = event.target.rating.value;
  const comment = event.target["new-comment"].value;

  const newRamen = {
    name,
    restaurant,
    image,
    rating,
    comment,
  };

  renderARamen(newRamen);
});
