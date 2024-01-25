
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function scrollWin() {
    window.scrollTo(0,0);
  }

