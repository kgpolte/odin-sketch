function buildGrid(resolution = 24){

    // Handle invalid inputs
    if (resolution > 50) {
        resolution = 50;
    } else if (resolution < 1) {
        resolution = 1;
    } else if (typeof resolution != 'number') {
        resolution = 24;
    }

    // Set the size of the grid container and define the style rules
    const gridSize = 600;
    const grid = document.querySelector('.grid');
    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
    grid.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;

    // Create grid elements in the DOM
    for (let i = 0; i < resolution ** 2; i++) {

        const gridItem = document.createElement('div');
        gridItem.classList.add('cell');
        grid.appendChild(gridItem);

        gridItem.addEventListener('mouseover', e => gridItem.style.background = '#000000');

    }

    // Set the default value of the resolution input field
    const resInput = document.getElementById('resolution');
    resInput.value = resolution;
}

buildGrid();