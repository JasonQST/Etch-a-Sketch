const gridContainer = document.querySelector('.gridContainer');
//gridDiv.setAttribute('style','background-color:blue');
for(k=0;k<16;k++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('')
    for(i=0;i<16;i++){
        console.log(i);
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridDiv.setAttribute('id', k.toString() + i.toString())
        gridContainer.appendChild(gridDiv);
    }
}
