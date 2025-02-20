const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

const root = document.querySelector(":root");
const userScore = 0;

const firstCorrectAnswer = document.querySelector("#firstCorrect");
const firstIncorrectAnswer = document.querySelectorAll(".first-incorrect");
const firstResult = document.querySelector("#firstResult");

const secondCorrectAnswer = document.querySelector("#secondCorrect");
const secondIncorrectAnswer = document.querySelectorAll(".second-incorrect");
const secondResult = document.querySelector("#secondResult");

// const correct = document.querySelector(".correct");
// const zResult = document.querySelector(".result");

let me = true;

firstCorrectAnswer.addEventListener(
  "click",
  () => {
    firstResult.innerHTML = `Правильно!`;
    root.style.setProperty("--first-color-correct", "#11ff74");
  },
  { once: true }
);

for (let item of firstIncorrectAnswer) {
  item.addEventListener(
    "click",
    () => {
      firstResult.innerHTML = `Неправильно!`;
      root.style.setProperty("--first-color-correct", "#11ff74");
    },
    { once: true }
  );
  break;
}

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
