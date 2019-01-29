const GRID_ROWS = 5;
const GRID_COLS = 5;

//loop that makes cells appended to container
const container = document.getElementById('container');
console.log(GRID_COLS);
for (let i = 0; i < GRID_ROWS; i++) {
  for (let j = 0; j < GRID_COLS; j++) {
    const cell = document.createElement('button');
    cell.classList.add("button");
    cell.style.gridRow = i + 1;
    cell.style.gridColumn = j + 1;
    cell.textContent = i + " " + j;
    container.appendChild(cell);



  }
}
