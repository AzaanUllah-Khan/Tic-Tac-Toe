var turn = "X";
document.getElementById(turn).style.outline = "2px solid #6648c2"
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
function game(btn) {
    document.getElementById("X").style.outline = "none"
    document.getElementById("O").style.outline = "none"
    if (btn.innerText == "") {
        btn.innerHTML = turn;
        updateVariables();
        changeBtnCol()
        check();
        turn = turn == "X" ? "O" : "X";
        document.getElementById(turn).style.outline = "2px solid #6648c2"
    } else {
        turn = turn
        document.getElementById(turn).style.outline = "2px solid #6648c2"
        return;
    }
}

function updateVariables() {
    one = document.getElementById("1").innerHTML;
    two = document.getElementById("2").innerHTML;
    three = document.getElementById("3").innerHTML;
    four = document.getElementById("4").innerHTML;
    five = document.getElementById("5").innerHTML;
    six = document.getElementById("6").innerHTML;
    seven = document.getElementById("7").innerHTML;
    eight = document.getElementById("8").innerHTML;
    nine = document.getElementById("9").innerHTML;
}

function check() {
    if ((one == "X" && two == "X" && three == "X") || (one == "O" && two == "O" && three == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if ((four == "X" && five == "X" && six == "X") || (four == "O" && five == "O" && six == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if ((seven == "X" && eight == "X" && nine == "X") || (seven == "O" && eight == "O" && nine == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if ((one == "X" && four == "X" && seven == "X") || (one == "O" && four == "O" && seven == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if ((two == "X" && five == "X" && eight == "X") || (two == "O" && five == "O" && eight == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if ((three == "X" && six == "X" && nine == "X") || (three == "O" && six == "O" && nine == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if ((one == "X" && five == "X" && nine == "X") || (one == "O" && five == "O" && nine == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if ((three == "X" && five == "X" && seven == "X") || (three == "O" && five == "O" && seven == "O")) {
        Swal.fire({
            title: turn + " Won",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });
    } else if (
        (one == "X" || one == "O") &&
        (two == "X" || two == "O") &&
        (three == "X" || three == "O") &&
        (four == "X" || four == "O") &&
        (five == "X" || five == "O") &&
        (six == "X" || six == "O") &&
        (seven == "X" || seven == "O") &&
        (eight == "X" || eight == "O") &&
        (nine == "X" || nine == "O")
    ) {
        Swal.fire({
            title: "It's a Draw",
            icon: "info",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#101032",
            confirmButtonText: "Play Again"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        });
    }
}
