// Ubah bg
const tombol = document.querySelector("section#a button");

tombol.addEventListener("click", function () {
  // document.body.style.backgroundColor = "orange";
  document.body.classList.toggle("bg-color");
});

// Tambah tombol baru untuk acak warna bg
const btnBaru = document.createElement("button");
const textBtn = document.createTextNode("Random Background Color");
btnBaru.appendChild(textBtn);
btnBaru.setAttribute("type", "button");
tombol.after(btnBaru);

btnBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// Slider Color
function sColor() {
  const r = sRed.value;
  const b = sBlue.value;
  const g = sGreen.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

const sRed = document.querySelector("input[name=sRed]");
sRed.addEventListener("input", sColor);

const sGreen = document.querySelector("input[name=sGreen]");
sGreen.addEventListener("input", sColor);

const sBlue = document.querySelector("input[name=sBlue]");
sBlue.addEventListener("input", sColor);

// Change background color with mouse cursor
document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);

  const yPos = Math.round((event.clientY / window.innerWidth) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
