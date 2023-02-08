const url = "http://localhost:3000/ramens";

const ramenMenu = document.querySelector("#ramen-menu");

const imageDetail = document.querySelector(".detail-image");

const ramenName = document.querySelector(".name");

const restaurantName = document.querySelector(".restaurant");

const ratingDetail = document.querySelector("#rating-display");

const commentDetail = document.querySelector("#comment-display");

const form = document.querySelector("#new-ramen");

const renderRamen = (ramen) => {
  const menuImage = document.createElement("img");
  menuImage.src = ramen.image;
  ramenMenu.append(menuImage);
  menuImage.addEventListener("click", (event) => {
    event.preventDefault();
    imageDetail.src = ramen.image;
    ramenName.textContent = ramen.name;
    restaurantName.textContent = ramen.restaurant;
    ratingDetail.textContent = ramen.rating;
    commentDetail.textContent = ramen.comment;
  });
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach(renderRamen);
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newRamen = {
    comment: event.target["new-comment"].value,
    image: event.target.image.value,
    name: event.target.name.value,
    rating: event.target.rating.value,
    restaurant: event.target.restaurant.value,
  };
  renderRamen(newRamen);
});
