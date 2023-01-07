function buildGrid(perSide = 50){

    // Handle invalid resolution inputs
    let resolution = parseInt(perSide) || 50;

    if (resolution > 50) {
        resolution = 50;
    } else if (resolution < 10) {
        resolution = 10;
    }


    // Set the size of the grid container and define the style rules
    const gridSize = 600;
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

        // Add an event listener to change the cell to black on mouseover
        cell.addEventListener('mouseover', e => {
            cell.style.background = '#000000'
        });
    }
}

buildGrid();

const resInput = document.getElementById('resolution');
resInput.addEventListener('click', e => {
    const newRes = prompt('Enter the Resolution: (10-100)');
    buildGrid(newRes);
});