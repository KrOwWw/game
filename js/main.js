const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

const root = document.querySelector(":root");
const userScore = 0;
const firstResult = document.querySelector("#firstResult");
const secondResult = document.querySelector("#secondResult");

const firstAnswers = document.querySelectorAll(".first-answers");
const secondAnswers = document.querySelectorAll(".second-answers");

// FIRST QUESTION

for (let item of firstAnswers) {
  item.addEventListener("click", () => {
    if (item.innerText === "Программа") {
      firstResult.innerHTML = `Правильно!`;
      root.style.setProperty("--first-color-correct", "#11ff74");
      item.classList.add("user-choice");
      for (let item2 of firstAnswers) {
        if (!item2.classList.contains("user-choice")) item2.remove();
      }
    } else {
      firstResult.innerHTML = `Неправильно! Правильный ответ "Программа"`;
      item.classList.add("user-choice");
      for (let item2 of firstAnswers) {
        if (!item2.classList.contains("user-choice")) item2.remove();
      }
    }
  });
}

// SECOND QUESTION

for (let item of secondAnswers) {
  item.addEventListener("click", () => {
    if (item.innerText === "Программное обеспечение") {
      secondResult.innerHTML = `Правильно!`;
      root.style.setProperty("--second-color-correct", "#11ff74");
      item.classList.add("user-choice");
      for (let item2 of secondAnswers) {
        if (!item2.classList.contains("user-choice")) item2.remove();
      }
    } else {
      secondResult.innerHTML = `Неправильно! Правильный ответ "Программное обеспечение"`;
      item.classList.add("user-choice");
      for (let item2 of secondAnswers) {
        if (!item2.classList.contains("user-choice")) item2.remove();
      }
    }
  });
}
