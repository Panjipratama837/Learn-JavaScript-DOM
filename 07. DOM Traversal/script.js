const close = document.querySelectorAll(".close");

close.forEach((element) => {
  element.addEventListener("click", function (e) {
    // Parent element nya adalah div dengan class (card)
    e.target.parentElement.style.display = "none";
    e.preventDefaulta();
  });
});
