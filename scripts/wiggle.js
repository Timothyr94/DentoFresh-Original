const elements2 = document.querySelectorAll(
  ".bankAccount__input__title, .customerInput__title, .receiptInput__title"
);
console.log(elements);
const observer2 = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("wiggle");
        observer2.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  }
);
elements2.forEach((el) => {
  observer2.observe(el);
});
