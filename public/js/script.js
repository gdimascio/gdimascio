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

function burger_menu(){
    var x = document.getElementById("_burger-links");
    // if (x.style.display === "flex") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "flex";
    // }
    if (x.style.transform == "translateX(0px)") {
        x.style.transform = "translateX(100%)";
        console.log("0%")
    } else {
        x.style.transform = "translateX(0px)";
        console.log("100%")
    }

}