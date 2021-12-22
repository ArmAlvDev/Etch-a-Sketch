
function passoverMouse(e) {
  e.target.style.cssText = 'background: white';
}

function setupSquareGrid(size) {
  const grid = document.querySelector('.grid');
  //grid.style.setProperty('--grid-rows', size);
  grid.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++) {
    const cell = document.createElement("div");
    cell.addEventListener('mouseover', passoverMouse);
    grid.appendChild(cell).className = "grid-item";
  };
};

function reset(e) {
  const userSize = window.prompt('Choose a size');
  document.querySelector('.grid').innerHTML = "";
  setupSquareGrid(userSize);
}

let defaultSize = 16;
const gameReset = document.querySelector('button[class="reset"]');
gameReset.addEventListener('click', reset);

// Trigger creation of grid on DOM content loaded
window.addEventListener('DOMContentLoaded', (event) => {
  setupSquareGrid(defaultSize);
});
