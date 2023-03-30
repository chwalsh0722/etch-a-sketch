// highlight box
function mouseInBox(e) {
  this.classList.add('mouse-in');
}

function removeColor(box) {
  if (box.classList.contains('mouse-in')) {
    box.classList.remove('mouse-in');
  }
}

// Generate etch-a-sketch grid.
function createBoard(boxesPerSide = 16) {
  // Reset global variable.
  totalBoxes = 0;

  // Create all 16 rows within board.
  for (let i = 0; i < boxesPerSide; i++)
  {
    const row = document.createElement('div');
    row.classList.add('board-row');
    board.appendChild(row);

    // Create all 16 boxes within each row.
    for (let j = 0; j < boxesPerSide; j++)
    {
      const box = document.createElement('div');
      box.classList.add('box');
      box.id = "box-" + j;
      row.appendChild(box);
      totalBoxes++;
    }
  }
}

function createNewBoard()
{
  let newBoxesPerSide = prompt("Please enter number of boxes per side on new board.");
  
  // Remove current boxes and rows from board.
  boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.remove());
  const rows = document.querySelectorAll('.board-row');
  rows.forEach(row => row.remove());

  // Create new board.
  createBoard(newBoxesPerSide);
  boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.addEventListener('mouseeneter', mouseInBox));
}

// Global variable for keeping track of number of boxes in grid.
let totalBoxes = 256;

// Add board reset button to top of screen
const body = document.getElementById('body');
const resetButton = document.createElement('button');
resetButton.classList.add('new-board-button');
resetButton.textContent = "New Board";
resetButton.addEventListener('click', createNewBoard);
body.appendChild(resetButton);

// Create etch-a-sketch board
const board = document.createElement('div');
board.classList.add('board');
body.appendChild(board);

createBoard();

// Event listener for mouse hover over boxes.
let boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseenter', mouseInBox));