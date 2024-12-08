const elements = document.querySelectorAll(".actionsteps__description");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});
elements.forEach((el) => {
  observer.observe(el);
});
