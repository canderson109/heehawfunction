

function heehaw() {
    let input = document.getElementById('input');

    if (isNaN(input.value)) {
        console.log("Error: Did not receive numerical input")
        document.write("<h4>Error: You must input a number!</h4>");
    }

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