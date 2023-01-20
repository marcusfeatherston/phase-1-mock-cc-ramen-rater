// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div.

// The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

const URL = "http://localhost:3000";
const detailMenu = document.getElementById("ramen-menu");
const detailImage = document.querySelector(".detail-image");
const ramenName = document.querySelector(".name");
const detailRestaurant = document.querySelector(".restaurant");
const detailRating = document.querySelector("#rating-display");
const detailComment = document.querySelector("#comment-display");
const ramenForm = document.querySelector("#new-ramen");

const renderTheRamen = (ramen) => {
  const ramenImg = document.createElement("img");
  ramenImg.src = ramen.image;
  detailMenu.append(ramenImg);

  ramenImg.addEventListener("click", (event) => {
    detailImage.src = ramen.image;
    ramenName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailRating.textContent = ramen.rating;
    detailComment.textContent = ramen.comment;
  });
};

fetch(URL + "/ramens")
  .then((response) => response.json())
  .then((ramenList) => {
    ramenList.forEach(renderTheRamen);
  });

ramenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target);
  const newRamen = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target["new-comment"].value,
  };
  renderTheRamen(newRamen);
});
