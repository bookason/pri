
var m=document.querySelector("main"),
h=document.querySelector("header"),
hero =document.querySelector(".hero"),
f =document.querySelector("#first"), 
hamburger=document.querySelector(".hamburger"), 
topHeight,
heroHeight;
function setPaddingTop(){
    topHeight=h.offsetHeight;
    heroHeight =hero.offsetHeight;
   /* m.style.paddingTop =topHeight + "px";*/
    m.style.top =heroHeight + "px"
}
function scroller(){
    window.addEventListener("scroll", scrollFunc);
    window.addEventListener("load", scrollFunc);
    function scrollFunc(){
        var x =window.pageYOffset;
        if(x>90){
            h.classList.add("scroll")
        }
        else{
            h.classList.remove("scroll")
        }
    }
    
}
function hide(){
   var x=window.pageYOffset;
   if(x>90) {
       f.style.opacity="0";
   }
   else{
       f.style.opacity="1"
   } 
   window.addEventListener("scroll", function(){
       var x=window.pageYOffset;
       if(x<90){
           f.style.opacity="1"
       }
       else{
           f.style.opacity="0"
       }
   })
}
function showr(){
    var x =window.pageYOffset;
    if(x>100){
        hamburger.style.opacity="1"
    }
    else{
        hamburger.style.opacity="0"
    }
    window.addEventListener("scroll", function(){
        var x =window.pageYOffset;
        if(x>100){
            h.classList.add("scroll")
        }
        else{
            h.classList.remove("scroll")
        }
    })
}

window.onload = function (){
    setPaddingTop();
    scroller();
    hide();
    show ();
}
window.onresize = function (){
        setPaddingTop;
        
    }
//opening toggle menu
function openNav(){
    var w =document.querySelector("#toggle-menu");
    w.style.width="100%";
}
function closeNav(){
    var w =document.querySelector("#toggle-menu");
    w.style.width ="0px";

}

//typing
var _CONTENT = [ 
	"Increasing Leads.", 
	"Building Digital Experience", 
	"Bringing Ideas to the Market", 
	"Designing Beautiful Interfaces"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

