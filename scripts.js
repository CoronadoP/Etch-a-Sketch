//https://levelup.gitconnected.com/build-an-etch-a-sketch-knock-off-with-plain-js-css-and-html-9ab9e104b43f
let clearButton = document.querySelector("#clear");
let sizeButton = document.querySelector("#size");
let grid = document.querySelector('#grid');
let gridSquareId = [];
let auto = "auto";

function createGrid(size = 16){
    //Create necessary number of columns depending on # of squares per row/col
    //Default 16x16 grid
    let prop = "";
    for(let i = 1; i <= size; i++){
        prop += `${auto} `;
    }
    document.getElementById("grid").style['grid-template-columns'] = prop;

    for(let r = 1; r <= size; r++){
        for(let c = 1; c <= size; c++){
            let id = `r${r}c${c}`;
            let gridSquare = document.createElement('div');
            gridSquare.classList.add("grid-square");
            gridSquare.setAttribute('id', id);
            grid.appendChild(gridSquare);
            gridSquareId.push(id);
        }
    }

    return;
}

//Add color changing event on mouseover to each gridSquare
function mouseOver(id, color){
    document.getElementById(id).style['background-color'] = color;
}

function colorChangingEvent(color = "black"){
    for(let i = 0; i < gridSquareId.length; i++){
        document.getElementById(gridSquareId[i]).onmouseover = function() {
            mouseOver(gridSquareId[i], color)};
    }
    return;
}


//Clear Grid Function: Set background of every square back to white
function clearGrid(){
    for(let i = 0; i < gridSquareId.length; i++){
        document.getElementById(gridSquareId[i]).style['background-color'] = "white";
    }
    return;
}

//Initialize Website Function
function initializeWebsite(){
    createGrid();
    colorChangingEvent();
    clearButton.addEventListener('click', clearGrid);

}

initializeWebsite();









