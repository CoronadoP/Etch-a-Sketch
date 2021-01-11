let gridContainer = document.querySelector('#grid');

function createGrid(){

    for(let i = 1; i <= 16; i++){
        for(let j = 1; j <= 16; j++){
            let gridSquare = document.createElement('div');
            let squareId = `row-${i}col-${j}`;
            gridSquare.classList.add("grid-square");
            gridSquare.setAttribute('id', squareId);
            gridContainer.appendChild(gridSquare);
        }
    }
    return;
}


createGrid();
