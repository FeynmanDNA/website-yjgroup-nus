// People current member page, show all by default
filterSelection("all", "btnAll");
function filterSelection(classFilter, btnName) {
    var flipC, i, btns;
    flipC = document.getElementsByClassName("flip-container");
    if (classFilter == "all") {
        classFilter =  "";
    }
    // Add the "showpeople" class (display:block) to the filtered elements
    // and remove the "showpeople" class from unselected
    for (i = 0; i < flipC.length; i++) {
        flipC[i].classList.remove("showpeople");
        if (flipC[i].className.indexOf(classFilter) > -1) {
            flipC[i].className += " showpeople";
        }
    }
    btns = document.getElementById("myBtnContainer").getElementsByClassName("sortbutton");
    for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove("btnactive");
    }
    document.getElementById(btnName).classList.add("btnactive");
}
