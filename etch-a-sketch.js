function boxHovered(e) {
  console.log(e);
}

// Create etch-a-sketch board
const body = document.getElementById('body');
const board = document.createElement('div');
board.classList.add('board');
body.appendChild(board);


// Create all 16 rows within board.
for (let i = 0; i < 16; i++)
{
  const row = document.createElement('div');
  row.classList.add('board-row');
  board.appendChild(row);

  // Create all 16 boxes within each row.
  for (let j = 0; j < 16; j++)
  {
    const box = document.createElement('div');
    box.classList.add('box');
    box.id = j;
    row.appendChild(box);
  }
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', boxHovered));