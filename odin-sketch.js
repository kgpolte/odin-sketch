function buildGrid(squaresPerSide = 24){

    if (squaresPerSide > 50) {
        squaresPerSide = 50;
    } else if (squaresPerSide < 1) {
        squaresPerSide = 1;
    }

    const gridSize = 720;
    const grid = document.querySelector('.grid');

    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
    grid.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 0; i < squaresPerSide ** 2; i++) {

        const gridItem = document.createElement('div');
        gridItem.classList.add('cell');
        grid.appendChild(gridItem);

        gridItem.addEventListener('mouseover', e => gridItem.style.background = '#000000');

    }
}

buildGrid();