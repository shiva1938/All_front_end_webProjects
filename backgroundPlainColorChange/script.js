document.querySelector("#submit").addEventListener("click", () => {
    var colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var col = "#";

    for (let i = 0; i < 6; i++) {
        var col_id = Math.floor(Math.random() * colors.length);
        col += colors[col_id];
    }
    document.body.style.background = col;
    document.querySelector("#hexcode").textContent = col;

})