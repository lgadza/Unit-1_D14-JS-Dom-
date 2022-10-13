window.onload = function () {
  createCells();
};
const arr = [];
const createCells = function () {
  const cells = document.getElementById("cells");
  for (let i = 0; i < 76; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    arr.push(h3);
    cell.appendChild(h3);
    cells.appendChild(cell);
  }
  const cell = document.querySelectorAll("h3");
  return cell;
};

// const block = h3.innerText;
// console.log(block);

const randomNum = Math.floor(Math.random() * 76 + 1);
const randomCell = document.querySelector("#myBtn");
console.log(randomNum);
randomCell.addEventListener("click", () => {
  const h3 = arr;
  for (let i = 0; i < h3.length; i++) {
    // const block = h3.innerText;
    if (randomNum == arr[i]) {
      const cell = document.querySelectorAll("h3")[i];
      cell.style.backgroudColor = "lightblue";
    }
  }
});
randomCell.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 76 + 1);
  return randomNum;
});
