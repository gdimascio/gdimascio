
// Scroll to top function
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "inline-block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Displays the navbar in lower media
function burger_menu(){
    var x = document.getElementById("_burger-links");
    if (x.style.transform == "translateX(0px)") {
        x.style.transform = "translateX(100%)";
    } else {
        x.style.transform = "translateX(0px)";
    }
}

// Drift function for the images in Tecnilogies
function driftImage() {
    imgs.forEach(img => {
        img.style.top = (Math.random() * 440) + 60 + 'px';
        img.style.left = (Math.random() * 70) + 10 + 'vw';
    })
}
