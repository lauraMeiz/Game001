function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const timer = document.querySelector(".time");
const rutuliukuVieta = document.querySelector(".left-square");
const btn1 = document.querySelector(".btn1");
const newPlace = document.querySelector(".right-square");

const ballmoved = document.createElement("div");
const komentarai = document.querySelector(".comments");
const notFine = document.querySelector(".notFine");
let d = new Date();
let text = d.toLocaleDateString();

let scoreSave = localStorage.getItem("save")
  ? JSON.parse(localStorage.getItem("save"))
  : [];

const ulas = document.querySelector(".list");
scoreSave.forEach((el) => {
  const li3 = document.createElement("li");
  const sarasas = document.createTextNode(el);
  li3.appendChild(sarasas);
  ulas.appendChild(li3);
});

function myColor() {
  const r = rand(0, 255);
  const g = rand(0, 255);
  const b = rand(0, 255);
  const color = "rgb(" + r + "," + g + "," + b + ", " + 0.5 + ")";
  komentarai.style.background = ` radial-gradient(circle at ${1.4}vw ${1.4}vw, ${color}, #000)`;
}
let rutuliukai = [];
let newArray = [];

function start() {
  while (rutuliukai.length < 25) {
    const rutulys = rand(1, 25);

    if (!rutuliukai.includes(rutulys)) {
      rutuliukai.push(rutulys);
      if (rutuliukai.length == 25) {
        rutuliukai.forEach((ball) => {
          const createBall = document.createElement("div");
          createBall.classList.add("poviena");
          createBall.style.borderRadius = "50%";
          createBall.style.textAlign = "center";
          createBall.style.color = "white";
          createBall.style.margin = "2px";
          createBall.style.cursor = "pointer";
          const r = rand(0, 255);
          const g = rand(0, 255);
          const b = rand(0, 255);
          const color = "rgb(" + r + "," + g + "," + b + ", " + 0.5 + ")";
          createBall.style.background = ` radial-gradient(circle at ${1.4}vw ${1.4}vw, ${color}, #000)`;
          const ballText = document.createTextNode(ball);
          createBall.appendChild(ballText);
          rutuliukuVieta.appendChild(createBall);
        });
      }
    } else {
      btn1.setAttribute("disabled", "");
    }
  }
  const rutuliukai2 = [...rutuliukai];
  rutuliukai2.sort((a, b) => a - b);

  const visi = document.querySelectorAll(".poviena");

  visi.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();

      if (+el.innerText === rutuliukai2[0]) {
        newArray.push(rutuliukai2[0]);
        newPlace.appendChild(el);
        rutuliukai2.shift([0]);

        console.log("taip", newArray);
        myColor();
      }

      if (rutuliukai2.length === 0) {
        komentarai.innerText = `Done!!! your time is ${timer.innerText}`;
        console.log(timer.innerText);

        if (timer.innerText) {
          const saveT = timer.innerText;

          scoreSave.push(saveT);
          localStorage.setItem("save", JSON.stringify(scoreSave));

          let html = `<li>${saveT}</li>`;
          ulas.insertAdjacentHTML("afterend", html);
        }

        komentarai.style.display = "block";

        myStopFunction();
      }
    });
  });
}
d = new Date();
text = d.toLocaleDateString();
console.log(text);

const timeReset = 3600;
let clockTime = 0;
let my;

function updateClock() {
  if (clockTime === timeReset) {
    clockTime--;
    komentarai.innerText = `Time is over....`;
    komentarai.style.display = "block";
  }
  clockTime++;

  const m = Math.floor(clockTime / 60);
  const s = clockTime % 60;
  timer.innerText = ` ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s}`;
}

btn1.addEventListener("click", (e) => {
  e.stopPropagation();

  start();

  my = setInterval(updateClock, 1000);
  clockTime = 0;
});

const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", (e) => {
  e.stopPropagation();
  myStopFunction();

  btn1.disabled = false;

  rutuliukai = [];
  rutuliukuVieta.innerHTML = "";
  newPlace.innerHTML = "";
  komentarai.innerText = "";
});

function myStopFunction() {
  clearInterval(my);

  timer.innerText = `Retry!!`;
}
