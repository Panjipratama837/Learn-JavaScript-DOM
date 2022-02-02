// Mengubah html
const judul = document.getElementById("judul");
judul.innerHTML = "Panji Pratama, di edit dengan javascript";
judul.style.color = "salmon";

const btn = document.querySelector("section#a button");

// Menambahkan attribute
btn.setAttribute("id", "tombol");

// Menambahkan class
btn.classList.add("btn-primary");

// Menghapus class
btn.classList.remove("secondary");

// toggle = Jika ada nama class tersebut maka dihapus, jika tidak ada maka class tersebut ditambahkan.
btn.classList.toggle("btn-orange");
