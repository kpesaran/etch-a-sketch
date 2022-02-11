const gridContainer = document.querySelector('.gridContainer');
let color = 'black'
//const cell = document.createElement('div');
//cell.classList.add('cell')
//container.appendChild(cell)
;
//Function to create grid & allow grid to be fillled in black
function makeGrid(size) {
    gridArea = size * size
    for (let i = 0; i < gridArea; i++) {
        let cell = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        cell.classList.add('cell');
        cell.addEventListener('mouseover', function () {
            this.style.backgroundColor = color;
        });
        
        let resetButton = document.querySelector('#reset')
        resetButton.addEventListener('click', function () {
            cell.style.backgroundColor = 'white'
        });
        gridContainer.appendChild(cell);

        let gridCells = gridContainer.querySelectorAll('.cell')
        gridCells.forEach(gridCellColor => gridCellColor.addEventListener('mouseover', changeColor));

        let singleCell = gridContainer.querySelector('.cell')
        singleCell.addEventListener('mouseover', rainbow)

       
        
    }
}

function rainbow() {
    buttonRainbow.addEventListener('click', (e) => {
        
        let r = (Math.floor(Math.random() * 256 + 1))
        let g = (Math.floor(Math.random() * 256 + 1))
        let b = (Math.floor(Math.random() * 256 + 1))
        let rgb = `rgb(${r},${g},${b})`;
        color = rgb
        console.log(rgb)
    });
}


function changeColor() {
    let gridCells = gridContainer.querySelectorAll('.cell')
    
    buttonBlue.addEventListener('click', () => {
        console.log('One day will change cell color to Blue')
        
        color = 'blue'
    });

    buttonBlack.addEventListener('click', () => {
        
        color = 'black'

    });

    buttonEraser.addEventListener('click', () => {
        color = 'white'
    });
    buttonRandom.addEventListener('click', () => {
        let r = (Math.floor(Math.random() * 256 + 1))
        let g = (Math.floor(Math.random() * 256 + 1))
        let b = (Math.floor(Math.random() * 256 + 1))
        let rgb = `rgb(${r},${g},${b})`;
        color = rgb
        console.log(rgb)
    });
    buttonRainbow.addEventListener('click', () => {
    
        let r = (Math.floor(Math.random() * 256 + 1))
        let g = (Math.floor(Math.random() * 256 + 1))
        let b = (Math.floor(Math.random() * 256 + 1))
        let rgb = `rgb(${r},${g},${b})`;
        color = rgb
        console.log(rgb)
    });
}

let buttonBlue = document.getElementById('blue')
let buttonBlack = document.getElementById('black')
let buttonEraser = document.getElementById('eraser')
let buttonRainbow = document.getElementById('rainbow')
let buttonRandom = document.getElementById('random')




let bigger32 = document.getElementById('bigger32');

makeGrid(16)