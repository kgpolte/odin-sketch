function buildGrid(perSide = 25){

    // Handle invalid resolution inputs
    let resolution = parseInt(perSide) || 50;

    if (resolution > 50) {
        resolution = 50;
    } else if (resolution < 10) {
        resolution = 10;
    }

    // Set the size of the grid container and define the style rules
    const gridSize = 720;
    const grid = document.querySelector('.grid');
    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
    grid.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;

    // Delete any previous cells
    const cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.remove());

    // Create the given number of grid cells
    for (let i = 0; i < resolution ** 2; i++) {

        // Make the cell
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        cell.addEventListener('mouseover', e => addBlack(e.target));
    }
}

function addBlack(cell, amount) {
    const computedStyle = String(getComputedStyle(cell).background);
    const color = computedStyle.split(')')[0].split('(')[1];
    const colorSplit = color.split(',')

    const rCode = parseInt(colorSplit[0].trim()) - 26;
    const gCode = parseInt(colorSplit[1].trim()) - 26;
    const bCode = parseInt(colorSplit[2].trim()) - 26;
    
    if (rCode < 0) rCode = 0;
    if (gCode < 0) gCode = 0;
    if (bCode < 0) bCode = 0;

    cell.style.background = `rgb(${rCode}, ${gCode}, ${bCode})`;
    
}

buildGrid();

const resInput = document.getElementById('resolution');
resInput.addEventListener('click', e => {
    const newRes = prompt('Enter the Resolution: (10-100)');
    buildGrid(newRes);
});