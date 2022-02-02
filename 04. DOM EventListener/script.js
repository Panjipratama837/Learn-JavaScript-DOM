// EventHandler Element method
const p3 = document.querySelector(".p3");
function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}
p3.onclick = ubahWarnaP3;

// addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Item baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
  alert("Anda berhasil menambakan item baru");
});

// Perbedaan eventHandle dan addEventListener adalah :
// eventHandle hanya akan menjalankan satu event / function. Event yang lain akan di timpa
// Sedangkan addEventListener akan menjalan kan keduanya.

// Contoh eventHandle
// Maka yang dijalankan hanya event terakhir, event 1 & 2 ketimpa

const p1 = document.querySelector(".p1");
p1.onclick = function () {
  p1.style.backgroundColor = "orange";
};

p1.onclick = function () {
  p1.style.color = "green";
};

p1.onclick = function () {
  p1.style.color = "red";
};

// Contoh addEventListener
// Dua dua nya dijalankan
const p2 = document.querySelector(".p2");
p2.addEventListener("click", function () {
  p2.style.backgroundColor = "orange";
  // p2.style.color = "white";
});

p2.addEventListener("click", function () {
  p2.style.color = "white";
});
