document.getElementById("Nyan").addEventListener('click', nyanRain, hideShow);

function nyanRain() {
    var elem = document.getElementById("cat");
    var pos = -100;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 700) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
function hideShow() {
    if (document.getElementById("cat").style.display === "none") {
        document.getElementById("cat").style.display = "block";
    }
}
