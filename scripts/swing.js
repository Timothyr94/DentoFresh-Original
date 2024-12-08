const elements3 = document.querySelectorAll(
  ".actionsteps__box__icon__question"
);
console.log(elements);
const observer3 = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("swing");
        observer3.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  }
);
elements3.forEach((el) => {
  observer3.observe(el);
});
