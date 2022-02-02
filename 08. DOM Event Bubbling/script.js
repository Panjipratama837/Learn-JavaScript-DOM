// // Event Traversal
// const close = document.querySelectorAll(".close");

// close.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     // Parent element nya adalah div dengan class (card)
//     e.target.parentElement.style.display = "none";
//     e.preventDefaulta();
//     e.propaganition();
//   });
// });

// Event Bubbling
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});