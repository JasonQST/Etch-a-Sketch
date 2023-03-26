//Get Container Object
const gridContainer = document.querySelector('.gridContainer');
//If mouse clicked
let drawEnable = false;

//Function to generate grids
function generateGrid(width){
    for(k=0;k<width;k++){
        let rowDiv = document.createElement('Div');
        rowDiv.classList.add('rowDiv');
        let thisRowID = "row" + k.toString();
        rowDiv.setAttribute('id', thisRowID);
        gridContainer.appendChild(rowDiv);
        let thisRow = document.querySelector('#' + CSS.escape(thisRowID));
        for(i=0;i<width;i++){
            const gridDiv = document.createElement('Div');
            gridDiv.classList.add('gridDiv');
            gridDiv.setAttribute('id', k.toString() + i.toString())
            thisRow.appendChild(gridDiv);
        }
    }
}

//Create 64 * 64 grids initially
generateGrid(128);

//Create change color event
//Get all grids
const grids = [...document.querySelectorAll('.gridDiv')];
//Add event listner to all grids
grids.forEach(gridDiv => {
    gridDiv.addEventListener('mousedown',(e) =>{
        e.target.style.background = "black";
        drawEnable = true;
        console.log("Enable Draw");
    });
    gridDiv.addEventListener('mouseup',() =>{
        drawEnable = false;
        console.log("Disable Draw");
    });
    gridDiv.addEventListener('mouseover',(e) =>{
        if(drawEnable){
            e.target.style.background = "black";
        }
    });
});