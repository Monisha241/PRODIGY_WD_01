window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "blue";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#333";
  }
}