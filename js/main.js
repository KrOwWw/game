const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

const root = document.querySelector(":root");
const userScore = 0;
const firstCorrectAnswer = document.querySelector("#firstCorrect");
const firstIncorrectAnswer = document.querySelectorAll(".incorrect");
const firstResult = document.querySelector("#firstResult");

firstCorrectAnswer.addEventListener("click", () => {
  firstResult.innerHTML = `Правильно!`;
  root.style.setProperty("--color-correct", "#11ff74");
});

// console.log(firstIncorrectAnswer);

for (let item of firstIncorrectAnswer) {
  item.addEventListener("click", () => {
    firstResult.innerHTML = `Неправильно!`;
    root.style.setProperty("--color-incorrect", "#e63f3f");
  });
}
