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

setGridSize(16);

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "purple";
    })
});