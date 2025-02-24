const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

const root = document.querySelector(":root");
const userScore = 0;

// VIDEO

const pausedVideo = document.querySelector(".paused__video");
const video = document.querySelector(".video");
video.volume = 0.1;
pausedVideo.addEventListener("click", () => {
  video.pause();
});

// SECOND QUESTION

const firstResult = document.querySelector("#firstResult");
const firstAnswers = document.querySelectorAll(".first-answers");

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

// THIRD QUESTION

const secondResult = document.querySelector("#secondResult");
const secondAnswers = document.querySelectorAll(".second-answers");

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

// FOURTH QUESTION

const items = document.querySelectorAll(".device");
const columns = document.querySelectorAll(".column");
const blocksInput = document.querySelector(".blocks__input");
const blocksOutput = document.querySelector(".blocks__output");
const mouse = document.querySelector(".mouse");
const screen = document.querySelector(".screen");
const headphones = document.querySelector(".headphones");
const microphone = document.querySelector(".microphone");
const scanner = document.querySelector(".scanner");
const gamepad = document.querySelector(".gamepad");
const printer = document.querySelector(".printer");
const acoustics = document.querySelector(".acoustics");
const fourthCheck = document.querySelector(".fourth__check");
const fourthResult = document.querySelector("#fourthResult");

let dragItem = null;
let isDragging = true;

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("drop", dragDrop);
});

function dragStart() {
  dragItem = this;
  columns.forEach((column) => {
    column.style.boxShadow = "0 0 10px #6f85ff";
  });
}

function dragEnd() {
  dragItem = null;
  columns.forEach((column) => {
    column.style.boxShadow = "none";
  });
}

function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {
  this.append(dragItem);
}

fourthCheck.addEventListener("click", () => {
  if (
    blocksInput.contains(mouse) &&
    blocksInput.contains(microphone) &&
    blocksInput.contains(scanner) &&
    blocksInput.contains(gamepad) &&
    blocksOutput.contains(printer) &&
    blocksOutput.contains(screen) &&
    blocksOutput.contains(acoustics) &&
    blocksOutput.contains(headphones)
  ) {
    fourthResult.innerHTML = `Правильно`;
  } else {
    fourthResult.innerHTML = `Неправильно`;
  }
});

// FIFTH QUESTION

const projects = document.querySelectorAll(".project");
const peoples = document.querySelectorAll(".people");
const durov = document.querySelector(".durov");
const gates = document.querySelector(".gates");
const zuckerberg = document.querySelector(".zuckerberg");
const jobs = document.querySelector(".jobs");
const apple = document.querySelector(".apple");
const facebook = document.querySelector(".facebook");
const telegram = document.querySelector(".telegram");
const microsoft = document.querySelector(".microsoft");
const fifthCheck = document.querySelector(".fifth__check");
const fifthResult = document.querySelector("#fifthResult");

let dragItem2 = null;
let isDragging2 = true;

projects.forEach((project) => {
  project.addEventListener("dragstart", dragStart);
  project.addEventListener("dragend", dragEnd);
});

peoples.forEach((people) => {
  people.addEventListener("dragover", dragOver);
  people.addEventListener("drop", dragDrop);
});

function dragStart() {
  dragItem2 = this;
  peoples.forEach((people) => {
    people.style.boxShadow = "0 0 10px #6f85ff";
  });
}

function dragEnd() {
  dragItem2 = null;
  peoples.forEach((people) => {
    people.style.boxShadow = "none";
  });
}

function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {
  this.append(dragItem2);
}

fifthCheck.addEventListener("click", () => {
  if (
    durov.contains(telegram) &&
    gates.contains(microsoft) &&
    zuckerberg.contains(facebook) &&
    jobs.contains(apple)
  ) {
    fifthResult.innerHTML = `Правильно`;
  } else {
    fifthResult.innerHTML = `Неправильно`;
  }
});
