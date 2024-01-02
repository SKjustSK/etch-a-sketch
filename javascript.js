const GRID_BG_COLOR = "#FDB0C0";
const GRID_BG_COLOR_HOVER = "#CB00F5";

// Initial Grid Generation
let GRID_LENGTH = 16;
gridGeneration(GRID_LENGTH);

// Clear button
const clear = document.querySelector('.clear');
clear.addEventListener('click', gridRegenerate);

// Size button
const size = document.querySelector('.size');
size.addEventListener('click', changeSize);


// Removes Grid
function gridClear(GRID_LENGTH)
{
    let NUMBER_OF_DIVS = Math.pow(GRID_LENGTH, 2);
    for (let i = 0 ; i < NUMBER_OF_DIVS ; i++)
    {
        let div = document.querySelector(`.element${i + 1}`);
        div.remove();
    }
}

// Generates Grid based on GRID_LENGTH
function gridGeneration(GRID_LENGTH)
{   
    let NUMBER_OF_DIVS = Math.pow(GRID_LENGTH, 2);
    let FLEX_BASIS = 100 / (Math.sqrt(NUMBER_OF_DIVS));
    
    const container = document.querySelector('#container');
    for (let i = 0 ; i < NUMBER_OF_DIVS ; i++)
    {
        let div = document.createElement('div');
        div.setAttribute('class', `draw element${i+1}`);
        
        // Sizes boxes accordingly, for 16*16, 16 boxes per layer, for 8*8, 8 boxes per layer
        div.style.flexBasis = `${FLEX_BASIS}%`;
        
        div.style.backgroundColor = GRID_BG_COLOR;
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = GRID_BG_COLOR_HOVER;
        });
        container.appendChild(div);
    }
}

// Changes size of grid
function changeSize()
{
    let old_GRID_LENGTH = GRID_LENGTH;
    do {
        GRID_LENGTH = prompt("Canvas size? (Max limit: 100)");
    }
    while (GRID_LENGTH > 100 || typeof GRID_LENGTH === "number");
    
    gridClear(old_GRID_LENGTH);
    gridGeneration(GRID_LENGTH);
}

function gridRegenerate()
{
    gridClear(GRID_LENGTH);
    gridGeneration(GRID_LENGTH);
}