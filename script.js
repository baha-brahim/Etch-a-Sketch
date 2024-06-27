let container = document.querySelector(".container");
function setNewGrid(dimension) {
    for (let i = 0; i < dimension * dimension; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "square" + (i + 1));
        div.setAttribute("class", "square");
        div.style.border = "solid 1px black";
        div.style.height = "57px";
        div.style.width = "50px";
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "pink";
        });
    }
};
window.onload = () => {
    setNewGrid(16);
}

let newPageSpecs = document.querySelector(".newPageSpecs");
newPageSpecs.addEventListener("click", () => {
    container.innerHTML = "";
    let dimension;
    do {
        dimension = prompt("Please provide dimensions of the new page : ");
    } while (dimension <= 0 || dimension > 60);
    setNewGrid((dimension == 0) ? 16 : dimension);
});

let eraser = document.querySelector(".eraser");
eraser.addEventListener("click" , () => {
    let divs = document.querySelectorAll(".square");
    divs.forEach(div => {
        div.addEventListener("mouseover" , () => {
            div.style.backgroundColor = "white";
        })
    })
})