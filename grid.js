const gridContainer = document.querySelector('.gridContainer');
//gridDiv.setAttribute('style','background-color:blue');
for(k=0;k<16;k++){
    let rowDiv = document.createElement('Div');
    rowDiv.classList.add('rowDiv');
    let thisRowID = "row" + k.toString();
    rowDiv.setAttribute('id', thisRowID);
    gridContainer.appendChild(rowDiv);
    let thisRow = document.querySelector('#' + CSS.escape(thisRowID));
    for(i=0;i<16;i++){
        console.log(i);
        const gridDiv = document.createElement('Div');
        gridDiv.classList.add('gridDiv');
        gridDiv.setAttribute('id', k.toString() + i.toString())
        thisRow.appendChild(gridDiv);
    }
}
