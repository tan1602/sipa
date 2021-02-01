console.log("js loadeddddddddddddddddddddddddddddddddddddddd")
let isMenuOpen = false
document.querySelector(".checkbtn").onclick = function (){
    if(!isMenuOpen){
        document.getElementById("menuList").style.height = "228px"
        isMenuOpen = true
    }
    else{
        document.getElementById("menuList").style.height = "0"
        isMenuOpen = false
    }
}

document.onclick = function (e){
    console.log(e.target)
    console.log(document.querySelector(".fa-bars"))
    if (isMenuOpen && e.target != document.querySelector(".fa-bars")){
        document.getElementById("menuList").style.height = "0"
        isMenuOpen = false
    }
}



var mybutton = document.getElementById("goUpButton");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}