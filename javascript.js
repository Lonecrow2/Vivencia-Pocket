function copyright() {
    var list = document.getElementById("copyright-list");
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}
