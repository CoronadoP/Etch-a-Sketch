let grid = document.querySelector('#grid');
let gridWidth = grid.clientWidth;

let clearButton = document.querySelector("#clear");
let sizeButton = document.querySelector("#size");
let colorInput = document.querySelector("#chosen-color");

let gridSquareId = [];
let auto = "auto";



window.addEventListener("load", initializeWebsite, false);

function createGridSquare(size, id){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add("grid-square");
    gridSquare.setAttribute('id', id);
    gridSquare.style.width = `${size}px`;
    gridSquare.style.height = `${size}px`;
    return gridSquare;
}


function createGrid(gridSize = 16){
    //Create necessary number of columns depending on # of squares per row/col
    //Default 16x16 grid
    let prop = "";
    for(let i = 1; i <= gridSize; i++){
        prop += `${auto} `;
    }
    document.getElementById("grid").style['grid-template-columns'] = prop;

    for(let r = 1; r <= gridSize; r++){
        for(let c = 1; c <= gridSize; c++){
            let id = `r${r}c${c}`;
            grid.appendChild(createGridSquare(gridWidth / gridSize, id));
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

//Function called when color picker changes value
function updateColor(event){
    let color = event.target.value;
    colorChangingEvent(color);
    return;
}

function changeGridSize(){
    let sizeInput = parseInt(prompt("Please Enter Desired Grid Size Max 64"));

    if(!Number.isInteger(sizeInput) || sizeInput == 0 || sizeInput > 64){
        alert("Invalid Input. Setting Size to 16");
        grid.textContent = '';
        createGrid();
        colorInput.value = "#000000";
    } else {
        grid.textContent = '';
        createGrid(sizeInput);
        colorInput.value = "#000000";
    }
    colorChangingEvent();
    

    return;
}

//Initialize Website Function
function initializeWebsite(){
    createGrid();
    colorChangingEvent();
    clearButton.addEventListener('click', clearGrid);
    colorInput.addEventListener("input", updateColor);
    sizeButton.addEventListener('click', changeGridSize)

}













