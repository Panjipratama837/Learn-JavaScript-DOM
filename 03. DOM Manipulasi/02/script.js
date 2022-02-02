// Mengambil scope untuk section dengan id a
const sectionA = document.getElementById("a");

// Mengambil scope untuk section dengan id b
const sectionB = document.getElementById("b");

const link = document.getElementsByTagName("a")[0];

// Menghapus link (a = href)
sectionA.removeChild(link);

// Menambahkan paragraf baru
const pBaru = document.createElement("p");
const textP = document.createTextNode("Paragraf baru");

pBaru.appendChild(textP);
sectionA.appendChild(pBaru);

// Merubah paragraf menjadi heading
const hBaru = document.createElement("h2");
const textH = document.createTextNode("Judul baru !");

hBaru.appendChild(textH);

// Mengambil paragraf 4
const p4 = sectionB.querySelector("p");

sectionB.replaceChild(hBaru, p4);

// Menambahkan li baru
const ul = sectionB.querySelector("ul");

const li2 = sectionB.querySelector("li:nth-child(2)");

const liBaru = document.createElement("li");
const textLi = document.createTextNode("Item baru");

liBaru.appendChild(textLi);

ul.insertBefore(liBaru, li2);

// style
pBaru.style.backgroundColor = "orange";
hBaru.style.backgroundColor = "orange";
liBaru.style.backgroundColor = "orange";

// Nyoba

const pBaru1 = document.createElement("p");
const textP1 = document.createTextNode("Paragraf baru");

pBaru1.appendChild(textP1);

const p2 = sectionA.getElementsByTagName("p")[1];
sectionA.insertBefore(pBaru1, p2);
