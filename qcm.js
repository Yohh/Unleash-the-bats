const q1 = document.querySelector("#question1");
const q2 = document.querySelector("#question2");
const q3 = document.querySelector("#question3");
const q4 = document.querySelector("#question4");
const q5 = document.querySelector("#question5");
const q6 = document.querySelector("#question6");
const q7 = document.querySelector("#question7");
const q8 = document.querySelector("#question8");
const q9 = document.querySelector("#question9");
const q10 = document.querySelector("#question10");
const q11 = document.querySelector("#question11");
const q12 = document.querySelector("#question12");
const q13 = document.querySelector("#question13");
const q14 = document.querySelector("#question14");
const q15 = document.querySelector("#question15");
const q16 = document.querySelector("#question16");
const q17 = document.querySelector("#question17");
const q18 = document.querySelector("#question18");
const q19 = document.querySelector("#question19");
const q20 = document.querySelector("#question20");
const q21 = document.querySelector("#question21");
const q22 = document.querySelector("#question22");
const q23 = document.querySelector("#question23");
const q24 = document.querySelector("#question24");
const q25 = document.querySelector("#question25");
const answer = document.querySelector(".answer");
const answerb = document.querySelector(".answerb");
const answera = document.querySelector(".answera");
answer.style.display = "none";

const check = () => {
  console.log();
  let count = 0;
  if (q1.checked) {
    count++;
  }
  if (q2.checked) {
    count++;
  }
  if (q3.checked) {
    count++;
  }
  if (q4.checked) {
    count++;
  }
  if (q5.checked) {
    count++;
  }
  if (q6.checked) {
    count++;
  }
  if (q7.checked) {
    count++;
  }
  if (q8.checked) {
    count++;
  }
  if (q9.checked) {
    count++;
  }
  if (q10.checked) {
    count++;
  }
  if (q11.checked) {
    count++;
  }
  if (q12.checked) {
    count++;
  }
  if (q13.checked) {
    count++;
  }
  if (q14.checked) {
    count++;
  }
  if (q15.checked) {
    count++;
  }
  if (q16.checked) {
    count++;
  }
  if (q17.checked) {
    count++;
  }
  if (q1.checked) {
    count++;
  }
  if (q18.checked) {
    count++;
  }
  if (q19.checked) {
    count++;
  }
  if (q20.checked) {
    count++;
  }
  if (q21.checked) {
    count++;
  }
  if (q22.checked) {
    count++;
  }
  if (q23.checked) {
    count++;
  }
  if (q24.checked) {
    count++;
  }
  if (q25.checked) {
    count++;
  }

  if (count < 10) {
    answer.style.display = "flex";
    answera.textContent =
      "mecreant... tu ne merites pas de danser dans nos tenebres!";
    answerb.textContent = "punissez-moi!";
  } else if (count > 20) {
    answer.style.display = "flex";
    answera.textContent =
      "les grands anciens te benissent, ton ame est aussi noire que le jais";
    answerb.textContent = "je n'en attendais pas moins";
  } else {
    answer.style.display = "flex";
    answera.textContent =
      "c'est un bon debut, va donc sacrifier quelques chatons";
    answerb.textContent = "oui maître";
  }
};

const refresh = () => (window.location.href = window.location.href);
