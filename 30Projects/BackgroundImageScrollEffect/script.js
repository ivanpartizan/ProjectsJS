const bgImageEl = document.getElementById("bg-image");

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}

window.addEventListener("scroll", () => {
  updateImage();
});
