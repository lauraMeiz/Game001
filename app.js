function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const timer = document.querySelector(".time");
const rutuliukuVieta = document.querySelector(".left-square");
const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
  const rutuliukai = [];

  while (rutuliukai.length < 25) {
    const rutulys = rand(1, 25);
    if (!rutuliukai.includes(rutulys)) {
      rutuliukai.push(rutulys);
    } else {
      btn1.setAttribute("disabled", "");
    }
  }

  rutuliukai.forEach((ball) => {
    if (rutuliukai.length > 0) {
      const createBall = document.createElement("div");
      const ballText = document.createTextNode(ball);
      createBall.appendChild(ballText);
      rutuliukuVieta.appendChild(createBall);
      createBall.style.borderRadius = "50%";
      createBall.style.textAlign = "center";
      createBall.style.color = "white";
      createBall.style.margin = "2px";
      const r = rand(0, 255);
      const g = rand(0, 255);
      const b = rand(0, 255);
      const color = "rgb(" + r + "," + g + "," + b + ")";
      createBall.style.backgroundColor = color;
    }

    const timeReset = 3600;
    let clockTime = 0;
    function updateClock() {
      if (clockTime === timeReset) {
        clockTime--;
      }
      clockTime++;
      const m = Math.floor(clockTime / 60);
      const s = clockTime % 60;
      timer.innerText = ` ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s}`;
    }
    const my = setInterval(updateClock, 1000);

    const btn2 = document.querySelector(".btn2");

    btn2.addEventListener("click", () => {
      removeBalls();
      myStopFunction();
    });

    //console.log(rutuliukai);

    function removeBalls() {
      rutuliukuVieta.style.display = "none";
    }

    function myStopFunction() {
      clearInterval(my);
      timer.innerText = `00 : 00`;
    }
  });
});
