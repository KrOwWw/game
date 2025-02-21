const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

const root = document.querySelector(":root");
const quiz = document.querySelector(".quiz");
const inc = document.querySelectorAll(".first-incorrect");
const userScore = 0;

const firstCorrectAnswer = document.querySelector("#firstCorrect");
const doc = document.querySelector("#doc");
const img = document.querySelector("#img");
const audio = document.querySelector("#audio");
const firstResult = document.querySelector("#firstResult");

const secondCorrectAnswer = document.querySelector("#secondCorrect");
const secondIncorrectAnswer = document.querySelectorAll(".second-incorrect");
const secondResult = document.querySelector("#secondResult");


firstCorrectAnswer.addEventListener(
  "click",
  () => {
    firstResult.innerHTML = `Правильно!`;
    root.style.setProperty("--first-color-correct", "#11ff74");
    
    doc.remove()
    img.remove()
    audio.remove()
  }
);

doc.addEventListener('click', () => {
  firstResult.innerHTML = `Неправильно! Правильный ответ "Программа"`;

  firstCorrectAnswer.remove()
  img.remove()
  audio.remove()
})
img.addEventListener('click', () => {
  firstResult.innerHTML = `Неправильно! Правильный ответ "Программа"`;

  firstCorrectAnswer.remove()
  doc.remove()
  audio.remove()
})
audio.addEventListener('click', () => {
  firstResult.innerHTML = `Неправильно! Правильный ответ "Программа"`;
  firstCorrectAnswer.remove()
  img.remove()
  doc.remove()
})


secondCorrectAnswer.addEventListener(
  "click",
  () => {
    secondResult.innerHTML = `Правильно!`;
    root.style.setProperty("--second-color-correct", "#11ff74");
  },
  { once: true }
);

for (let item of secondIncorrectAnswer) {
  item.addEventListener(
    "click",
    () => {
      secondResult.innerHTML = `Неправильно!`;
      root.style.setProperty("--second-color-correct", "#11ff74");
    },
    { once: true }
  );
}
