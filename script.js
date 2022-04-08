// 1. Tangkap dulu tombolnya

const tUbahWarna = document.getElementById("tUbahWarna");

// 2. Tangkap element yg dituju, dalam hal ini body
tUbahWarna.onclick = function () {
  //   document.body.style.backgroundColor = "lightblue"; // khusus untuk body kita tidak perlu menyeleksi
  //   document.body.setAttribute("class", "biru-muda");
  // 3. Manipulasi class, karna pada saat diklik berulang-ulang ingin backgroundnya ganti. Pakai toggle
  document.body.classList.toggle("biru-muda");
};

// 4. Membuat tombol baru

const tAcakWarna = document.createElement("button");
// tAcakWarna.classList.add("tombol");

const textTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute("type", "button");
// tAcakWarna.setAttribute("id", "tombol");

tUbahWarna.after(tAcakWarna);
// document.getElementById("tombol").style.cssText = "backgroundColor: red; margin: 20px;";

// Tombol tAcakWarna kita kasih event

tAcakWarna.addEventListener("click", function () {
  // menentukan warna random
  // menggunakan math random
  const r = Math.round(Math.random() * 255 + 1); // ini itu mendapatkan nilairgb antara 1 - 255, untuk membulatkannya kita butuhkan math round

  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// menangkap slider

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// menentukan posisi mouse

// menangkap body
document.body.addEventListener("mousemove", function (event) {
  // // cari tau 2 hal
  // // posisi mouse, sumbu x dan y
  // event.clientX;

  // // ukuran browser

  // window.innerWidth;

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", " + 100 + ")";
});
