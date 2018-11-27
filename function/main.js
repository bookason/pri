window.addEventListener("load",resize);
function resize(){
    const left =this.getBoundingClientRect().left + window.pageXOffset;
    const top =this.getBoundingClientRect().top + window.pageYOffset;
}
const target =document.querySelector(".underline");
const links = document.querySelectorAll(".first a");
const colors =["deepskyblue", "orange","firebrick", "gold", "magenta", "black", "darkblue"];
for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click", (e) => e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
}
function mouseenterFunc(){
if(!this.parentNode.classList.contains("active")){
for (let i = 0; i < links.length; i++){
if(links[i].parentNode.classList.contains("active")){
    links[i].parentNode.classList.remove("active");
}
links[i].style.opacity="0.25";
}
this.parentNode.classList.add("active");
this.style.opacity="1";
const width= this.getBoundingClientRect().width;
const height =this.getBoundingClientRect().height;
const left =this.getBoundingClientRect().left;
const top =this.getBoundingClientRect().top;
const color =colors[Math.floor(Math.random() * colors.length)];

target.style.width = `${width}px`;
target.style.height =`${height}px`;
target.style.left =`${left}px`;
target.style.top=`${top}px`;
target.style.borderColor=color;
target.style.transform="none";
}
}
/*
const underline =document.querySelector(".underline");
const links = document.querySelectorAll(".first a");
const colors =["cyan", "magenta", "pink", "#333"];
for (let i =0; i< links.length; i++){
    links[i].addEventListener("mouseenter", animate);
    function animate(){
    for(let i =0; i<links.length;i++){}
    }
}*/
