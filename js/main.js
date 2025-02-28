const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

const root = document.querySelector(":root");
let userScore = 0;
let userMoney = document.querySelector(".money__number");
let money = 100000;
userMoney.innerHTML = money;
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
const secondQuiz = document.querySelector(".second__quiz");
const attention2 = document.querySelector(".second__attention");

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
      money = money - 10000;
      userMoney.innerHTML = money;
      for (let item2 of firstAnswers) {
        if (!item2.classList.contains("user-choice")) item2.remove();
      }
    }

    attention2.classList.add("hidden");
    secondQuiz.classList.remove("hidden");
  });
}

// THIRD QUESTION

const secondResult = document.querySelector("#secondResult");
const secondAnswers = document.querySelectorAll(".second-answers");
const secondQuestion = document.querySelector(".second__question");
const quizAnswer = document.querySelector(".quiz__answers");

const attention3 = document.querySelector(".third__attention");
const thirdQuiz = document.querySelector(".third__quiz");

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
      money = money - 10000;
      userMoney.innerHTML = money;
      for (let item2 of secondAnswers) {
        if (!item2.classList.contains("user-choice")) item2.remove();
      }
    }
    attention3.classList.add("hidden");
    thirdQuiz.classList.remove("hidden");
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

const fourthQuiz = document.querySelector(".fourth__quiz");
const attention4 = document.querySelector(".fourth__attention");

let dragItem = null;
let isDragging = true;
let minus = 10000;

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
    money = money - 10000;
    userMoney.innerHTML = money;
  }
  attention4.classList.add("hidden");
  fourthQuiz.classList.remove("hidden");
});

// FIFTH QUESTION

const fifthQuiz = document.querySelector(".fifth__quiz");
const attention5 = document.querySelector(".fifth__attention");

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
let minus2 = 10000;

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
    money = money - minus2;
    userMoney.innerHTML = money;
    minus2 = 0;
  }
  attention5.classList.add("hidden");
  fifthQuiz.classList.remove("hidden");
});

// SIXTH QUESTION

const sixthCheck = document.querySelector(".sixth__check");
const quizInput = document.querySelector(".quiz__input");
const sixthResult = document.querySelector("#sixthResult");
const sixthQuiz = document.querySelector(".final__quiz");
const attentionFinal = document.querySelector(".final__attention");
let attempts = 2;

sixthCheck.addEventListener("click", () => {
  if (quizInput.value === "Coder" || 
    quizInput.value === "coder"
  ) {
    sixthResult.innerHTML = `Правильно`;
    attentionFinal.classList.add("hidden");
    sixthQuiz.classList.remove("hidden");
  } else {
    if (attempts === 0) {
      sixthResult.innerHTML = `Неправильно`;
      money = money - 10000;
      userMoney.innerHTML = money;
      attentionFinal.classList.add("hidden");
      sixthQuiz.classList.remove("hidden");
    }
    sixthResult.innerHTML = `Неправильно`;
    attempts--;
  }
});

// FINAL QUESTION

const buildingPc = document.querySelector(".quiz__building-pc");
const noComponents = document.querySelector(".no-components");

const boughtComponentCpu = document.querySelector(".component__img-cpu");
const boughtComponentRam = document.querySelector(".component__img-ram");
const boughtComponentHdd = document.querySelector(".component__img-hdd");
const boughtComponentSsd = document.querySelector(".component__img-ssd");
const boughtComponentSamsung = document.querySelector(
  ".component__img-samsung"
);
const boughtComponentGpu = document.querySelector(".component__img-gpu");
const boughtComponentPowerUnit = document.querySelector(
  ".component__img-power-unit"
);

const componentCpuDown = document.querySelector(".cpu-down");
const componentGpuDown = document.querySelector(".gpu-down");
const componentRamDown = document.querySelector(".ram-down");
const componentRomDown = document.querySelector(".rom-down");
const componentPowerUnitDown = document.querySelector(".power-unit-down");
const componentsUp = document.querySelectorAll(".component__img");

let dragItem3 = null;
let isDragging3 = true;

const componentsCpu = document.querySelectorAll(".cpu__pay");
const componentsRam = document.querySelectorAll(".ram__pay");
const componentsRom = document.querySelectorAll(".rom__pay");
const componentsGpu = document.querySelectorAll(".gpu__pay");
const componentsPowerUnit = document.querySelectorAll(".power-unit__pay");
const shopMoney = document.querySelector(".shop__money-number");

const workPc = document.querySelector(".work");
const noWorkPc = document.querySelector(".no-work");

const openShop = document.querySelector(".open-shop");
const startPc = document.querySelector(".pc");
const startPcMobile = document.querySelector(".mobile");
const reset = document.querySelector(".reset");
const shop = document.querySelector(".shop");

let moneySpent = 0;
let opened = false;

componentCpuDown.addEventListener("dragover", dragOver);
componentCpuDown.addEventListener("drop", dragDrop);
componentGpuDown.addEventListener("dragover", dragOver);
componentGpuDown.addEventListener("drop", dragDrop);
componentRamDown.addEventListener("dragover", dragOver);
componentRamDown.addEventListener("drop", dragDrop);
componentRomDown.addEventListener("dragover", dragOver);
componentRomDown.addEventListener("drop", dragDrop);
componentPowerUnitDown.addEventListener("dragover", dragOver);
componentPowerUnitDown.addEventListener("drop", dragDrop);

componentsUp.forEach((componentUp) => {
  componentUp.addEventListener("dragstart", dragStart);
  componentUp.addEventListener("dragend", dragEnd);
});

// const boughtComponents = document.querySelector(".bought-components")
// const componentsImg = document.querySelectorAll(".component__img")

function dragStart() {
  dragItem3 = this;
}

function dragEnd() {
  dragItem3 = null;
}

function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {
  this.append(dragItem3);
}

componentsCpu.forEach((componentCpu) => {
  componentCpu.addEventListener("click", () => {
    if (componentCpu.classList.contains("pay-10400")) {
      if (money > 9000) {
        money = money - 9000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentCpu.setAttribute("disabled", "");
        componentCpu.innerHTML = `Куплено!`;
        noComponents.classList.add("hidden");
        buildingPc.classList.remove("hidden");
        
        
        boughtComponentCpu.classList.remove("hidden");

        moneySpent += 9000;

        componentsCpu.forEach((componentCpu) => {
          componentCpu.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentCpu.classList.contains("pay-11400")) {
      if (money > 11500) {
        money = money - 11500;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentCpu.setAttribute("disabled", "");
        componentCpu.innerHTML = `Куплено!`;
        noComponents.classList.add("hidden");
        buildingPc.classList.remove("hidden");
        
        boughtComponentCpu.classList.remove("hidden");

        moneySpent += 11500;

        componentsCpu.forEach((componentCpu) => {
          componentCpu.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentCpu.classList.contains("pay-10600")) {
      if (money > 12500) {
        money = money - 12500;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentCpu.setAttribute("disabled", "");
        componentCpu.innerHTML = `Куплено!`;
        noComponents.classList.add("hidden");
        buildingPc.classList.remove("hidden");
                
        boughtComponentCpu.classList.remove("hidden");

        moneySpent += 12500;

        componentsCpu.forEach((componentCpu) => {
          componentCpu.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
  });
});
componentsRom.forEach((componentRom) => {
  componentRom.addEventListener("click", () => {
    if (componentRom.classList.contains("pay-hdd")) {
      if (money > 3000) {
        money = money - 3000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        boughtComponentHdd.classList.remove("hidden");
        componentRom.setAttribute("disabled", "");
        componentRom.innerHTML = `Куплено!`;
        noComponents.classList.add("hidden");
        
        buildingPc.classList.remove("hidden");

        moneySpent += 3000;

        componentsRom.forEach((componentRom) => {
          componentRom.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentRom.classList.contains("pay-ssd")) {
      if (money > 5000) {
        money = money - 5000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        boughtComponentSsd.classList.remove("hidden");
        componentRom.setAttribute("disabled", "");
        componentRom.innerHTML = `Куплено!`;
        noComponents.classList.add("hidden");
        
        buildingPc.classList.remove("hidden");

        moneySpent += 5000;

        componentsRom.forEach((componentRom) => {
          componentRom.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentRom.classList.contains("pay-samsung")) {
      if (money > 9000) {
        money = money - 9000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        boughtComponentSamsung.classList.remove("hidden");
        componentRom.setAttribute("disabled", "");
        componentRom.innerHTML = `Куплено!`;
        noComponents.classList.add("hidden");
                
        buildingPc.classList.remove("hidden");

        moneySpent += 9000;

        componentsRom.forEach((componentRom) => {
          componentRom.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
  });
});
componentsPowerUnit.forEach((componentPowerUnit) => {
  componentPowerUnit.addEventListener("click", () => {
    if (componentPowerUnit.classList.contains("pay-iwongou")) {
      if (money > 2000) {
        money = money - 2000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;
        
        componentPowerUnit.setAttribute("disabled", "");
        componentPowerUnit.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentPowerUnit.classList.remove("hidden");

        moneySpent += 2000;

        componentsPowerUnit.forEach((componentPowerUnit) => {
          componentPowerUnit.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentPowerUnit.classList.contains("pay-deepcool")) {
      if (money > 5000) {
        money = money - 5000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentPowerUnit.setAttribute("disabled", "");
        componentPowerUnit.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentPowerUnit.classList.remove("hidden");

        moneySpent += 5000;

        componentsPowerUnit.forEach((componentPowerUnit) => {
          componentPowerUnit.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentPowerUnit.classList.contains("pay-pccooler")) {
      if (money > 10000) {
        money = money - 10000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentPowerUnit.setAttribute("disabled", "");
        componentPowerUnit.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentPowerUnit.classList.remove("hidden");

        moneySpent += 10000;

        componentsPowerUnit.forEach((componentPowerUnit) => {
          componentPowerUnit.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
  });
});
componentsGpu.forEach((componentGpu) => {
  componentGpu.addEventListener("click", () => {
    if (componentGpu.classList.contains("pay-2060")) {
      if (money > 26000) {
        money = money - 26000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentGpu.setAttribute("disabled", "");
        componentGpu.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentGpu.classList.remove("hidden");

        moneySpent += 26000;

        componentsGpu.forEach((componentGpu) => {
          componentGpu.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentGpu.classList.contains("pay-3060")) {
      if (money > 38000) {
        money = money - 38000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentGpu.setAttribute("disabled", "");
        componentGpu.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentGpu.classList.remove("hidden");

        moneySpent += 38000;

        componentsGpu.forEach((componentGpu) => {
          componentGpu.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentGpu.classList.contains("pay-4060")) {
      if (money > 63000) {
        money = money - 63000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentGpu.setAttribute("disabled", "");
        componentGpu.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentGpu.classList.remove("hidden");

        moneySpent += 63000;

        componentsGpu.forEach((componentGpu) => {
          componentGpu.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
  });
});
componentsRam.forEach((componentRam) => {
  componentRam.addEventListener("click", () => {
    if (componentRam.classList.contains("pay-8gb")) {
      if (money > 2000) {
        money = money - 2000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentRam.setAttribute("disabled", "");
        componentRam.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentRam.classList.remove("hidden");

        moneySpent += 2000;

        componentsRam.forEach((componentRam) => {
          componentRam.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentRam.classList.contains("pay-16gb")) {
      if (money > 3000) {
        money = money - 3000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentRam.setAttribute("disabled", "");
        componentRam.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentRam.classList.remove("hidden");

        moneySpent += 3000;

        componentsRam.forEach((componentRam) => {
          componentRam.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
    if (componentRam.classList.contains("pay-32gb")) {
      if (money > 5000) {
        money = money - 5000;
        userMoney.innerHTML = money;
        shopMoney.innerHTML = money;

        componentRam.setAttribute("disabled", "");
        componentRam.innerHTML = `Куплено!`;
        buildingPc.classList.remove("hidden");
        noComponents.classList.add("hidden");
        
        
        boughtComponentRam.classList.remove("hidden");

        moneySpent += 5000;

        componentsRam.forEach((componentRam) => {
          componentRam.setAttribute("disabled", "");
        });
      } else {
        noComponents.classList.remove("hidden");
        noComponents.innerHTML = `Недостаточно средств. Вы можете нажать на "отменить покупки", чтобы вернуть деньги и комплектующие`;
      }
    }
  });
});

startPcMobile.addEventListener("click", () => {
  if (
    componentCpuDown.contains(boughtComponentCpu) &&
    componentGpuDown.contains(boughtComponentGpu) &&
    componentRamDown.contains(boughtComponentRam) &&
    componentPowerUnitDown.contains(boughtComponentPowerUnit)
  ) {
    if (
      componentRomDown.contains(boughtComponentHdd) ||
      componentRomDown.contains(boughtComponentSsd) ||
      componentRomDown.contains(boughtComponentSamsung)
    ) {
      workPc.classList.add("hidden");
      noWorkPc.classList.remove("hidden");
    }
  }
});
startPc.addEventListener("click", () => {
  if (
    componentCpuDown.contains(boughtComponentCpu) &&
    componentGpuDown.contains(boughtComponentGpu) &&
    componentRamDown.contains(boughtComponentRam) &&
    componentPowerUnitDown.contains(boughtComponentPowerUnit)
  ) {
    if (
      componentRomDown.contains(boughtComponentHdd) ||
      componentRomDown.contains(boughtComponentSsd) ||
      componentRomDown.contains(boughtComponentSamsung)
    ) {
      workPc.classList.add("hidden");
      noWorkPc.classList.remove("hidden");
    }
  }
});

openShop.addEventListener("click", () => {
  if (opened === false) {
    shop.classList.remove("hidden");
    opened = true;
  } else {
    shop.classList.add("hidden");
    opened = false;
  }
});

reset.addEventListener("click", () => {
  money += moneySpent;
  userMoney.innerHTML = money;
  shopMoney.innerHTML = money;
  moneySpent = 0;

  workPc.classList.remove("hidden");
  noWorkPc.classList.add("hidden");

  boughtComponentCpu.classList.add("hidden");
  boughtComponentRam.classList.add("hidden");
  boughtComponentHdd.classList.add("hidden");
  boughtComponentSsd.classList.add("hidden");
  boughtComponentSamsung.classList.add("hidden");
  boughtComponentGpu.classList.add("hidden");
  boughtComponentPowerUnit.classList.add("hidden");

  componentsCpu.forEach((componentCpu) => {
    componentCpu.removeAttribute("disabled", "");
    componentCpu.innerHTML = `Купить`;
  });
  componentsRom.forEach((componentRom) => {
    componentRom.removeAttribute("disabled", "");
    componentRom.innerHTML = `Купить`;
  });
  componentsPowerUnit.forEach((componentPowerUnit) => {
    componentPowerUnit.removeAttribute("disabled", "");
    componentPowerUnit.innerHTML = `Купить`;
  });
  componentsGpu.forEach((componentGpu) => {
    componentGpu.removeAttribute("disabled", "");
    componentGpu.innerHTML = `Купить`;
  });
  componentsRam.forEach((componentRam) => {
    componentRam.removeAttribute("disabled", "");
    componentRam.innerHTML = `Купить`;
  });
});
