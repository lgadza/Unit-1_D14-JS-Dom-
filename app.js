window.onload = function () {
  createCells();
};

const createCells = function () {
  const cells = document.getElementById("cells");
  for (let i = 0; i < 72; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    cell.appendChild(h3);
    cells.appendChild(cell);
  }
};
const randomNum=Math.