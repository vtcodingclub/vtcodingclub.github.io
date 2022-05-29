function burger_button() {
    var x = document.getElementById("navbar");
    if (x.className === "desktop_navbar") {
        x.className += " responsive";
    } else {
        x.className = "desktop_navbar";
    }
}

function reverseNavbar() {
    var navbar = document.getElementById("navbar");
    var li = navbar.getElementsByClassName("navbar_li_right");
    for (var i = li.length - 1; i >= 0; i--) {
        navbar.appendChild(li[i]);
    }
}

function widthChange() {
    if (mq.matches) {
        // Viewport's width is less or equal to 1800px  
        let firstLi = "Home";
        let navbar = document.getElementById("navbar");
        let li = navbar.getElementsByClassName("navbar_li_right");
        if (li[0].textContent != firstLi) {
            reverseNavbar();
        }
    } else {
        // Viewport's width is greater than 1800px
        let firstLi = "Join Our Club!";
        let navbar = document.getElementById("navbar");
        let li = navbar.getElementsByClassName("navbar_li_right");
        if (li[0].textContent != firstLi) {
            reverseNavbar();
        }
    }
}

const mq = window.matchMedia("(max-width: 1080px)");
mq.addEventListener("change", () => {
    widthChange();
});

widthChange();