function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const timer = document.querySelector(".time");
console.log(timer);
const rutuliukuVieta = document.querySelector(".left-square");
console.log(rutuliukuVieta);
const btn1 = document.querySelector(".btn1");
console.log(btn1);

btn1.addEventListener("click", () => {
  const rutuliukai = [];
  while (rutuliukai.length < 25) {
    const rutulys = rand(1, 25);
    if (!rutuliukai.includes(rutulys)) {
      rutuliukai.push(rutulys);
    }
  }
  const r = rand(0, 255);
  const g = rand(0, 255);
  const b = rand(0, 255);
  const color = "rgb(" + r + "," + g + "," + b + ")";

  rutuliukai.forEach((ball) => {
    if (rutuliukai.length > 0) {
      const createBall = document.createElement("div");
      const ballText = document.createTextNode(ball);
      createBall.appendChild(ballText);
      rutuliukuVieta.appendChild(createBall);
      createBall.style.borderRadius = "50%";
      createBall.style.textAlign = "center";
      createBall.style.color = "white";
      createBall.style.margin = "10px";
      createBall.style.backgroundColor = color;
    }
    // if (rutuliukai.length > 25) {
    //   rutuliukai = [];
    // }

    console.log(color);
  });

  console.log(rutuliukai);
});
