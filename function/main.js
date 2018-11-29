var m=document.querySelector("main"),
h=document.querySelector("header"),
topHeight;
function setPaddingTop(){
    topHeight=h.offsetHeight;
    m.style.paddingTop =topHeight + "px";
}
function scroller(){
    window.addEventListener("scroll", scrollFunc);
    function scrollFunc(){
        var x =window.pageYOffset;
        if(x>150){
            h.classList.add("scroll")
        }
        else{
            h.class.remove("scroll")
        }
    }
}
window.onload = function (){
    setPaddingTop();
    scroller();
}
window.onresize = function (){
        setPaddingTop
    }

