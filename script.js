const generateBtn = document.querySelector("#generate-palette");
const palette = document.querySelector(".colors-container")

function handleGeneratePalette(){
    const colors = []

    for(let i = 0; i < 5; i++){
        colors.push(generateColors())
    }

    updatePaletteDisplay(colors)
}

palette.addEventListener("click", function(e) {
    if(e.target.classList.contains("copiar")){
        const colorName = e.target.previousElementSibling.textContent

        navigator.clipboard.writeText(colorName)
    }
})

function generateColors(){
    const letters = "0123456789ABCDEF"

    let color = "#"

    for(let i = 0; i <6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
}

generateBtn.addEventListener("click", handleGeneratePalette)

function updatePaletteDisplay(colors){
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((box, index) => {
        const color = colors[index];
        const colorBox = box.querySelector(".color");
        const colorName = box.querySelector(".color-name");

        colorBox.style.backgroundColor = color;
        colorName.textContent = color;
    });
}

