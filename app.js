function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const timer = document.querySelector(".time");
const rutuliukuVieta = document.querySelector(".left-square");
const btn1 = document.querySelector(".btn1");

let rutuliukai = [];
function start() {
  while (rutuliukai.length < 25) {
    const rutulys = rand(1, 25);

    if (!rutuliukai.includes(rutulys)) {
      rutuliukai.push(rutulys);
      if (rutuliukai.length == 25) {
        rutuliukai.forEach((ball) => {
          const createBall = document.createElement("div");
          createBall.style.borderRadius = "50%";
          createBall.style.textAlign = "center";
          createBall.style.color = "white";
          createBall.style.margin = "2px";
          const r = rand(0, 255);
          const g = rand(0, 255);
          const b = rand(0, 255);
          const color = "rgb(" + r + "," + g + "," + b + ")";
          createBall.style.backgroundColor = color;
          const ballText = document.createTextNode(ball);
          createBall.appendChild(ballText);
          rutuliukuVieta.appendChild(createBall);
          console.log(createBall);
        });
      }
    } else {
      btn1.setAttribute("disabled", "");
    }
  }
}

const timeReset = 3600;
let clockTime = 0;
let my;

function updateClock() {
  if (clockTime === timeReset) {
    clockTime--;
  }
  clockTime++;

  const m = Math.floor(clockTime / 60);
  const s = clockTime % 60;
  timer.innerText = ` ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s}`;
}

// const balls = document.querySelector(".left-square div");
// const newArr = [];
// rutuliukai.forEach((e) => {
//   newArr.push(e);
//   newArr.sort();
// });
// newArr.sort((a, b) => a - b);
// console.log(newArr);

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
  console.log(myStopFunction);
  console.log(rutuliukai);
});

function myStopFunction() {
  clearInterval(my);

  timer.innerText = `Let's start!`;
}

const newPlace = document.querySelector(".right-square");

const ballmoved = document.createElement("div");
