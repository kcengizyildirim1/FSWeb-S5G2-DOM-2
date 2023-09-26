import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

const navmenu = document.querySelector(".nav-link");

window.addEventListener("load", function (event) {
  navmenu.style.color = "red";
});

document.querySelectorAll("img").forEach((photo) => {
  photo.addEventListener("dblclick", (event) => {
    photo.style.filter = "grayscale(100%)";
  });
});

document.querySelectorAll("p").forEach((metin) => {
  metin.addEventListener("mouseover", (event) => {
    metin.style.color = "blue";
  });
});

document.querySelectorAll("p").forEach((metin) => {
  metin.addEventListener("mouseout", (event) => {
    metin.style.color = "black";
  });
});

document.querySelector("h2").addEventListener("keydown", (event) => {
  h2.textContent = "selam";
});

window.addEventListener("resize", (e) => {
  log.textContent = window.innerWidth;
});

const input = document.createElement("input");
const footer = document.querySelector(".footer");
input.type = "text";
input.placeholder = "text";
input.height = "20px";

footer.appendChild(input);

document.querySelectorAll("input").forEach((metin) => {
  metin.addEventListener("focus", (event) => {
    event.target.style.background = "blue";
  });
});

const lastPic = document.querySelector(".content-section .img-content img");
lastPic.addEventListener("wheel", (event) => {
  event.preventDefault();
  let boyut = parseInt(getComputedStyle(lastPic).width);
  if (event.deltaY < 0) {
    boyut = Math.min(window.innerWidth, boyut + 10);
  } else {
    boyut = Math.max(50, boyut - 10);
  }
  lastPic.style.width = `${boyut}px`;
});
