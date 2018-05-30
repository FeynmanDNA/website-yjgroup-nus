// this debounce function is by David Walsh
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Open and close sidebar on mobile screens
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Change style of top container on scroll
// onScroll Event is often fired a lot of times
// so wrap a debounce() around it
window.onscroll = debounce(function() {scrollTopCn()}, 20);
// so limit the onscroll fire limit to N milliseconds
function scrollTopCn() {
  if (document.body.scrollTop > 100
    || document.documentElement.scrollTop > 100)
  {
    document.getElementById("myTop")
      .classList.add("floatbanner", "animate-opacity");
    document.getElementById("myIntro")
      .classList.add("show-inline-block");
  } else {
    document.getElementById("myIntro")
      .classList.remove("show-inline-block");
    document.getElementById("myTop")
      .classList.remove("floatbanner", "animate-opacity");
  }
}

// Accordions in SideBar
/* this is for the accordion panel */
document.querySelectorAll(".accordion")[0].addEventListener("click", showPanel);
document.querySelectorAll(".accordion")[1].addEventListener("click", showPanel);
function showPanel() {
  /* Toggle between adding and removing the "active" class,
   * to toggle the +/- of the panel */
  this.classList.toggle("active");

  /* Toggle between hiding and showing the active panel */
  var accPanel = this.nextElementSibling;
  if (accPanel.style.display === "block") {
    accPanel.style.display = "none";
  } else {
    accPanel.style.display = "block";
  }
}

// Calculator page the gray icon move on hover
function calBtnMove() {
  x = document.getElementById("calculatorAni");
  xleft = x.offsetLeft;
  if (xleft<500) {
    x.style.left = (xleft+100) + "px";
  } else {
    x.style.left = (xleft-300) + "px";
  }
}
