document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const columns = 7;
    const rows = 6;
    let currentPlayer = 'red';

    // Initialize board
    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.column = i % columns;
        board.appendChild(cell);
    }

    // Add event listeners
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const column = cell.dataset.column;
            const columnCells = Array.from(cells).filter(c => c.dataset.column === column);
            const emptyCell = columnCells.reverse().find(c => !c.classList.contains('red') && !c.classList.contains('yellow'));

            if (emptyCell) {
                emptyCell.classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
            }
        });
    });
});
