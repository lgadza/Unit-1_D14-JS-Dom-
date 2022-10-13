window.onload = function () {
  createCells();
};

const createCells = function () {
  const cells = document.getElementById("cells");
  for (let i = 0; i < 76; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    cell.appendChild(h3);
    cells.appendChild(cell);
  }
  // const cell = document.querySelectorAll("div")[1];
  // const cell = document.querySelectorAll("h3");
  // return cell;
};

const randomNum = Math.floor(Math.random() * 76 + 1);
const randomCell = document.querySelector("#myBtn");
console.log(randomNum);
randomCell.onclick = function () {
  const h3 = createCells();
  for (let i = 0; i < h3.length; i++) {
    const block = h3.innerText;
    if (randomNum === block) {
      cell.style.backgroudColor = "lightblue";
    }
  }
};
