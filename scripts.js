//https://levelup.gitconnected.com/build-an-etch-a-sketch-knock-off-with-plain-js-css-and-html-9ab9e104b43f
let grid = document.querySelector('#grid');
let auto = "auto";

function createGrid(){
    
    //Create necessary number of columns depending on # of squares per row/col
    //Default 16x16 grid
    let prop = "";
    for(let i = 1; i < 17; i++){
        prop += `${auto} `;
    }
    document.getElementById("grid").style['grid-template-columns'] = prop;

    //Create the necessary number of squares
    for(let i = 0; i < 256; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
    return;
}

function updateGrid(){

}

createGrid();






