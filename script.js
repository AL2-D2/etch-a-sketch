const container = document.querySelector("#container");
//default grid size
const DEFAULT_GRID = 16;

// Functions
function setGridSize(desiredNumber) {
    //in the beginning of set, reset every time the parent div...
    container.innerHTML = "";
    for (let i = 0; i < desiredNumber; i++) {
        const newCol = document.createElement('div');
        newCol.classList.add("col");
        for (let j = 0; j < desiredNumber; j++) {
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newCol.appendChild(newBox);
        }
        container.appendChild(newCol);
    }
    addEventsToBoxes();
}

//default grid size
setGridSize(DEFAULT_GRID);

//function that selects random color and returns arr of colors.. because in rgb() you use three different values
function randomColor() {
    const color = [];
    //random rgb values
    const firstRgb = Math.floor(Math.random() * 256);
    const secondRgb = Math.floor(Math.random() * 256);
    const thirdRgb = Math.floor(Math.random() * 256);

    color.push(firstRgb);
    color.push(secondRgb);
    color.push(thirdRgb);

    return color;
}

function addEventsToBoxes() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        /* whenever mouse hovers over the boxes new set of random rgb is assigned to the array and then three 
        rgb values assigned to the background color one by one.*/
        box.addEventListener("mouseover", () => {
            const rgbValuesArr = randomColor();
            const firstRgb = rgbValuesArr[0];
            const secondRgb = rgbValuesArr[1];
            const thirdRgb = rgbValuesArr[2];
            box.style.backgroundColor = `rgb(${firstRgb}, ${secondRgb}, ${thirdRgb})`;
        })
    });
}

//grid change button and its function
function askGridSize() {
    const gridSize = Number(prompt("Please enter your desired grid size: "));
    if (typeof gridSize !== 'undefined' && gridSize !== null) {
        if (gridSize > 100) {
            alert("YOU CANNOT SELECT NUMBER HIGHER THAN 100");
            return DEFAULT_GRID;
        }
        else {
            return gridSize;
        }
    }
    else {
        alert("ERROR... Grid size is now 16 (default)");
        return DEFAULT_GRID;
    }
}
const gridButton = document.querySelector("#grid-btn");

gridButton.addEventListener("click", () => {
    const gridSize = askGridSize();
    setGridSize(gridSize);
});