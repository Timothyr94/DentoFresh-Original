//pop up on click events
const popup = document.getElementById("popup");
const openPopup = document.getElementById("qustion__popup");
const closePopup = document.getElementById("close-popup");
function preventScroll(event) {
  event.preventDefault();
}
openPopup.addEventListener("click", function () {
  popup.style.display = "flex";
  document.body.classList.add("no-scroll");
  document.body.addEventListener("touchmove", preventScroll, {
    passive: false,
  });
});
closePopup.addEventListener("click", function () {
  popup.style.display = "none";
  document.body.classList.remove("no-scroll");
  document.body.removeEventListener("touchmove", preventScroll);
});
popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
    document.body.classList.remove("no-scroll");
    document.body.removeEventListener("touchmove", preventScroll);
  }
});
