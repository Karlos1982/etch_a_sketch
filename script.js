// Set defaults
let color = 'black';
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Creating the drawing grid
function createGrid(n) {
let board = document.querySelector(".board");
let cells = board.querySelectorAll('div');
cells.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
board.style.gridTemplateRows = `repeat(${n}, 1fr)`;

let amount = n * n
    for (i = 0; i < amount; i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', colorCell);
        cell.addEventListener('mousedown', colorCell);
        cell.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", cell);
    }
}

// Default size
createGrid(16)

// User changing size of grid
function changeSize(){
    input = prompt('Input grid size (2-100)')
    if (input >= 2 && input <=100){
    createGrid(input);
    } else {
        alert('Input must be between 2 & 100');
    }
}

function colorCell(e) {
    if (e.type ==='mouseover' && !mouseDown) return 
        if (color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = color;
        }
    }

function changeColor(choice){
    color = choice;
}

function reset(){
    let board = document.querySelector(".board");
    let cells = board.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = 'white');
}