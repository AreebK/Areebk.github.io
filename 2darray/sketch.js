let grid;
let rows = 5;
let cols = 5;
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2DArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x ++){
      if (grid[y][x] === 0) {
        fill(0);
      }
      else{
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}




function createRandom2DArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < cols; y++){
    randomGrid.push([]);
    for (let x = 0; x < rows; x++){
      if (random(100) < 50) {
        randomGrid[y].push(0);
      }
      else {
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}


function mousePressed(){
  let x = floor(mouseX/mouseY);
  let y = floor(mouseY/mouseX);

  if (grid[y][x] === 1){
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0){
    grid[y][x] = 1;
  }
}
