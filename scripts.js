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
    /*
    for(let i = 0; i < 256; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
    */
    for(let r = 1; r < 17; r++){
        for(let c = 1; c < 17; c++){
            let gridSquare = document.createElement('div');
            gridSquare.classList.add("grid-square");
            gridSquare.setAttribute('id', `r${r}c${c}`);
            grid.appendChild(gridSquare);
        }
    }

    return;
}



createGrid();

//Use this to get started on changing color of grid square
document.getElementById("r1c1").onmouseover = function() {
    mouseOver()
};

function mouseOver(){
    document.getElementById("r1c1").style['background-color'] = "black";
}







