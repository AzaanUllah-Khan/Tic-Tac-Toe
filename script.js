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
    one = document.getElementById("1")
    two = document.getElementById("2")
    three = document.getElementById("3")
    four = document.getElementById("4")
    five = document.getElementById("5")
    six = document.getElementById("6")
    seven = document.getElementById("7")
    eight = document.getElementById("8")
    nine = document.getElementById("9")
}

function check() {
    if ((one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML == "X") || (one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML == "O")) {
        one.style.backgroundColor = "#101032b7"
        one.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        two.style.backgroundColor = "#101032b7"
        two.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        three.style.backgroundColor = "#101032b7"
        three.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if ((four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML == "X") || (four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML == "O")) {
        four.style.backgroundColor = "#101032b7"
        four.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        five.style.backgroundColor = "#101032b7"
        five.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        six.style.backgroundColor = "#101032b7"
        six.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if ((seven.innerHTML == "X" && eight.innerHTML == "X" && nine.innerHTML == "X") || (seven.innerHTML == "O" && eight.innerHTML == "O" && nine.innerHTML == "O")) {
        seven.style.backgroundColor = "#101032b7"
        seven.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        eight.style.backgroundColor = "#101032b7"
        eight.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        nine.style.backgroundColor = "#101032b7"
        nine.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if ((one.innerHTML == "X" && four.innerHTML == "X" && seven.innerHTML == "X") || (one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML == "O")) {
        one.style.backgroundColor = "#101032b7"
        one.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        four.style.backgroundColor = "#101032b7"
        four.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        seven.style.backgroundColor = "#101032b7"
        seven.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if ((two.innerHTML == "X" && five.innerHTML == "X" && eight.innerHTML == "X") || (two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML == "O")) {
        two.style.backgroundColor = "#101032b7"
        two.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        five.style.backgroundColor = "#101032b7"
        five.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        eight.style.backgroundColor = "#101032b7"
        eight.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if ((three.innerHTML == "X" && six.innerHTML == "X" && nine.innerHTML == "X") || (three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML == "O")) {
        three.style.backgroundColor = "#101032b7"
        three.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        six.style.backgroundColor = "#101032b7"
        six.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        nine.style.backgroundColor = "#101032b7"
        nine.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if ((one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML == "X") || (one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML == "O")) {
        one.style.backgroundColor = "#101032b7"
        one.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        five.style.backgroundColor = "#101032b7"
        five.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        nine.style.backgroundColor = "#101032b7"
        nine.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if ((three.innerHTML == "X" && five.innerHTML == "X" && seven.innerHTML == "X") || (three == "O" && five.innerHTML == "O" && seven.innerHTML == "O")) {
        three.style.backgroundColor = "#101032b7"
        three.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        five.style.backgroundColor = "#101032b7"
        five.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        seven.style.backgroundColor = "#101032b7"
        seven.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    } else if (
        (one.innerHTML == "X" || one.innerHTML == "O") &&
        (two.innerHTML == "X" || two.innerHTML == "O") &&
        (three.innerHTML == "X" || three.innerHTML == "O") &&
        (four.innerHTML == "X" || four.innerHTML == "O") &&
        (five.innerHTML == "X" || five.innerHTML == "O") &&
        (six.innerHTML == "X" || six.innerHTML == "O") &&
        (seven.innerHTML == "X" || seven.innerHTML == "O") &&
        (eight.innerHTML == "X" || eight.innerHTML == "O") &&
        (nine.innerHTML == "X" || nine.innerHTML == "O")
    ) {
        one.style.backgroundColor = "#101032b7"
        one.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        two.style.backgroundColor = "#101032b7"
        two.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        three.style.backgroundColor = "#101032b7"
        three.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        four.style.backgroundColor = "#101032b7"
        four.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        five.style.backgroundColor = "#101032b7"
        five.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        six.style.backgroundColor = "#101032b7"
        six.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        seven.style.backgroundColor = "#101032b7"
        seven.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        eight.style.backgroundColor = "#101032b7"
        eight.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        nine.style.backgroundColor = "#101032b7"
        nine.style.boxShadow = "1px 1px 10px 0 rgba(0,0,0,0.3)"
        document.getElementById("winner").innerHTML = turn + " Won"
        document.getElementById("winner").style.display = "block"
        var btn = document.getElementsByTagName("button")
        for (i = 0; i < btn.length; i++) {
            btn[i].disabled = true
        }
        document.getElementById("reset").disabled = false
    }
}
function changeBtnCol() {
    var btn = document.getElementsByTagName("button")
    for (i = 0; i < btn.length; i++) {
        if (btn[i].innerHTML == "X") {
            btn[i].style.color = "#ea194d"
        }
        else if (btn[i].innerHTML == "O") {
            btn[i].style.color = "#fad034"
        }
    }
}