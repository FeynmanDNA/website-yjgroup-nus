//Detecting arrow key presses in lightbox
//if arros left and right, navigate the slideshow
document.onkeydown = checkKey;
function checkKey(e) {
    // handling Internet Explorer stupidity with window.event
    // @see http://stackoverflow.com/a/3985882/517705
    e = e || window.event;
    if (e.keyCode == '37') {
        // left arrow
        plusSlides(-1);
    } else if (e.keyCode == '39') {
        // right arrow
        plusSlides(1);
    } else if (e.keyCode == '81' || e.keyCode == '27') {
        // q key
        closeModal();
    }
}

/* These are for the lightbox in the group photo */
// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
}
// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    // loop back to the first slide
    if (n > slides.length) {slideIndex = 1}
    // loop back to last slide
    if (n < 1) {slideIndex = slides.length}

    // hide all slides initially
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    // slides[n-1].childNodes[3].nextSibling is the img tag
    captionText.innerHTML = slideIndex + "/" + slides.length + "<br />" + slides[slideIndex -1].childNodes[1].nextSibling.alt;
}

// mouseover the lightbox image, show the navi arrow
function showPhotoArrow() {
    document.getElementById("showarrow1").style.display = "block";
    document.getElementById("showarrow2").style.display = "block";
}
function hidePhotoArrow() {
    document.getElementById("showarrow1").style.display = "none";
    document.getElementById("showarrow2").style.display = "none";
}
