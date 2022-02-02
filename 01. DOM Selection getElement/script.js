// DOM Selection
// document.getElementById() -> Element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Sandhika Galih, diubah menggunakan javaScript";

// document.getElementsByTagName() -> HTML Collection
const p = document.getElementsByTagName("p");
// Menyeleksi satu tag p dengan index yang dipilih
p[2].style.backgroundColor = "lightblue";

// Jika ingin menyeleksi semua p, gunakan looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTML Collection
const p1 = document.getElementsByClassName("p3")[0];
p1.innerHTML = "Paragraf diedit dengan javaScript";
