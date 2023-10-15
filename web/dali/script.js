var icon = document.getElementById("icon")

icon.onclick = function() {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        icon.src = "on.png"
    } else {
        icon.src = "off.png"
    }
}