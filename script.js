const container = document.querySelector("#container");

// Functions

function setGridSize(desiredNumber) {
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
}

//default grid size
setGridSize(16);

//function that selects random color and returns arr of colors.. because in rgb() you use three different values
function randomColor() {
    const color = [];
    //random rgb values
    const firstRgb = Math.floor(Math.random() * 255);
    const secondRgb = Math.floor(Math.random() * 255);
    const thirdRgb = Math.floor(Math.random() * 255);

    color.push(firstRgb);
    color.push(secondRgb);
    color.push(thirdRgb);

    return color;
}

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