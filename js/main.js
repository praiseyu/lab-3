const resources = document.getElementById("resources");
const showBtn = document.getElementById("show-resources");

showBtn.addEventListener("click", onShowResources);
resources.addEventListener("mouseover", onHover);
resources.addEventListener("mouseout", onMouseOut);
resources.addEventListener("click", onClickItalicize);

function onShowResources(){
    resources.classList.remove("d-none");
}

function onHover(e){
    
    e.target.classList.add("fw-bold");
}

function onMouseOut(e){
    e.target.classList.remove("fw-bold");
    e.target.classList.remove("fst-italic");
}

function onClickItalicize(e){
    e.target.classList.add("fst-italic");
}
