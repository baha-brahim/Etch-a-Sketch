
function setNewGrid(dimension) {
    let container = document.querySelector(".container");
    for (let i = 0 ; i<dimension*dimension; i++) {
        let div = document.createElement("div");
        div.setAttribute("id" , "square" + (i+1));
        div.setAttribute("class" , "square");
        div.style.border = "solid 1px black";
        div.style.height = "57px";
        div.style.width = "50px";
        container.appendChild(div);   
        
        div.addEventListener("mouseover" , () => {
            div.style.backgroundColor = "pink";
        });
    }
};
window.onload  = () => {
    setNewGrid(16);
}

let newPageSpecs = document.querySelector(".newPageSpecs");
newPageSpecs.addEventListener("click" , () => {
    let dimension = prompt("Please provide dimensions of the new page : ")
    setNewGrid(dimension);
});