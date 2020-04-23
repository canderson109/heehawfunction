

function heehaw() {
    let input = document.getElementById('input');

    console.log("test")

    for (i = 1; i <= input.value; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write("<h4>Hee Haw!</h4>");
        } else if (i % 3 == 0) {
            document.write("<h4>Hee!</h4>");
        } else if (i % 5 == 0) {
            document.write("<h4>Haw!</h4>");
        } else {
            document.write("<h4>" + i + "</h4>");
        }
    }
}