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
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myTop").classList.add("floatbanner", "animate-opacity");
        document.getElementById("myIntro").classList.add("show-inline-block");
    } else {
        document.getElementById("myIntro").classList.remove("show-inline-block");
        document.getElementById("myTop").classList.remove("floatbanner", "animate-opacity");
    }
}

// Accordions
/* this is for the accordion panel */
document.querySelectorAll(".accordion")[0].addEventListener("click", showPanel);
document.querySelectorAll(".accordion")[1].addEventListener("click", showPanel);
function showPanel() {
    /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var accPanel = this.nextElementSibling;
    if (accPanel.style.display === "block") {
        accPanel.style.display = "none";
    } else {
        accPanel.style.display = "block";
    }
}

// Publications Table Search
function searchPubTable() {
    // Declare variables 
    var input, filter, table, tr, td, i, td0nam, td0aut, td0jou;
    var td0HTML, index;
    input = document.getElementById("pubSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("pubTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows and both column 0 and column 1 
    // Uppercase Column 0 to be case insensitive
    // and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td0 = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        if (td0 || td1) {
            td0nam = td0.childNodes[0].nextElementSibling.childNodes[0].nodeValue;
            td0aut = td0.childNodes[1].nextElementSibling.childNodes[0].nodeValue;
            td0jou = td0.childNodes[3].nextElementSibling.childNodes[0].nodeValue;
            td0HTML = td0nam.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase() + td0aut.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase() + td0jou.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
            index = td0HTML.indexOf(filter);
            if (index > -1) {
                tr[i].style.display = "";
            } else if (td1.innerHTML.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
}
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    var td0x, td0y;
    table = document.getElementById("pubTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("tr");
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            tdnx = rows[i].getElementsByTagName("td")[n];
            tdny = rows[i + 1].getElementsByTagName("td")[n];
            // for n=0 Title Column or n=1 Year Column
            if (n==0) {
                tdnamX = tdnx.childNodes[0].nextElementSibling.childNodes[0].nodeValue.toLowerCase();
                tdnamY = tdny.childNodes[0].nextElementSibling.childNodes[0].nodeValue.toLowerCase();
            } else {
                tdnamX = tdnx.innerHTML;
                tdnamY = tdny.innerHTML;
            }
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (tdnamX > tdnamY) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (tdnamX < tdnamY) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++; 
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
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

// Research pages snackbar
function showSnackbar() {
// Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "snackshow" class to DIV
    x.className = "snackshow";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
