function buildGrid(squaresPerSide = 24){

    const gridSize = 720;
    const grid = document.querySelector('.grid');
    
    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
    grid.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 0; i < squaresPerSide ** 2; i++) {

        const gridItem = document.createElement('div');
        gridItem.classList.add('cell');
        grid.appendChild(gridItem);
    }
}

buildGrid();