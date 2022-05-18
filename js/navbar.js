function burger_button() {
    var x = document.getElementById("navbar");
    if (x.className === "desktop_navbar") {
        x.className += " responsive";
    } else {
        x.className = "desktop_navbar";
    }
}