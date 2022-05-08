function burger_button() {
    if (document.getElementById("hamburger_bar1").style.display === "none") {
        document.getElementById("hamburger_bar1").style.display = "inline-block";
        document.getElementById("hamburger_bar2").style.display = "inline-block";
        document.getElementById("hamburger_bar3").style.display = "inline-block";
        var listener = window.matchMedia("(min-width: 700px)")
        Hider(listener)
        listener.addListener(Hider)
    } else {
        document.getElementById("hamburger_bar1").style.display = "none";
        document.getElementById("hamburger_bar2").style.display = "none";
        document.getElementById("hamburger_bar3").style.display = "none";
        }
    }

function Hider(x) {
    if (x.matches) {
        document.getElementById("hamburger_bar1").style.display = "none";
        document.getElementById("hamburger_bar2").style.display = "none";
        document.getElementById("hamburger_bar3").style.display = "none";
    } else {
        document.getElementById("hamburger_bar1").style.display = "inline-block";
        document.getElementById("hamburger_bar2").style.display = "inline-block";
        document.getElementById("hamburger_bar3").style.display = "inline-block";
    }
}