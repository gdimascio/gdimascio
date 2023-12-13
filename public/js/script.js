
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


//LANGUAGE FUNCTIONS
function hideLang(lang){
    lang.forEach(lang => {
        lang.style.display = "none";
    })}
function showLang(lang){
    lang.forEach(lang => {
        lang.style.display = "block";
    })}
function chkbxTgl(lblTgl, mrgn){
    lblTgl.forEach(lblTgl => {
        lblTgl.style.setProperty('--labelAfterMargin', mrgn)
    })}
function fontChk(onLang, offLang, colorOn, colorOff ){
    onLang.forEach(onLang => {
        onLang.style.color = colorOn;
    })
    offLang.forEach(offLang => {
        offLang.style.color = colorOff;
    })
}
function switchLang(){
    var langToggle = document.getElementById("lang-toggle");
    var langEn = document.querySelectorAll("#_lang-en");
    var langEs = document.querySelectorAll("#_lang-es");
    var lblTgl = document.querySelectorAll(".label-toggle");
    var onLang = document.querySelectorAll(".on");
    var offLang = document.querySelectorAll(".off");
    if(langToggle.checked == true){
        showLang(langEn);
        hideLang(langEs);
        chkbxTgl(lblTgl, '40px');
        fontChk(onLang, offLang, "#AEF1FF", "#191919");
    }else{
        showLang(langEs);
        hideLang(langEn);
        chkbxTgl(lblTgl, '0px');
        fontChk(onLang, offLang, "#191919", "#AEF1FF");
        }}
