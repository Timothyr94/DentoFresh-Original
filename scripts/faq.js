document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("../data/faqENG.json");
  const faqData = await response.json();
  let html = "";
  function generateFaq(faqData) {
    faqData.questions.forEach((questionData, index) => {
      let questionText = questionData.question;
      questionData.placeholder.forEach((value, index) => {
        questionText = questionText.replace(faqData.placeholder_value, value);
      });
      html += `<div class="question">
                <h3 class="question__title" >${questionText}</h3>`;
      if (index < faqData.questions.length - 1) {
        html += "<hr>";
      }
      questionData.answer.forEach((answer) => {
        let answerText = answer;
        questionData.placeholder.forEach((value, index) => {
          answerText = answerText.replace(faqData.placeholder_value, value);
        });
        html += `<p class="answer" style="display:none;">${answerText}</p>`;
      });
      html += `</div>`;
    });
    console.log(html);
    return html;
  }
  document.getElementById("footer__faq").innerHTML = generateFaq(faqData);
  document.querySelectorAll(".question").forEach(function (questionElement) {
    questionElement.addEventListener("click", function () {
      const currentAnswer = questionElement.querySelector(".answer");
      const currentHr = questionElement.querySelector("hr");
      const isVisible = currentAnswer.style.display === "block";
      document.querySelectorAll(".answer").forEach((answer) => {
        answer.style.display = "none";
      });
      document.querySelectorAll(".question hr").forEach((hr) => {
        if (
          hr.parentElement.querySelector(".answer").style.display === "none"
        ) {
          hr.style.marginBottom = "0";
          hr.parentElement.querySelector("h3").after(hr);
        }
      });
      currentAnswer.style.display = isVisible ? "none" : "block";
      if (!isVisible) {
        currentHr.style.marginBottom = "1em";
        questionElement.appendChild(currentHr);
      }
    });
  });
});
