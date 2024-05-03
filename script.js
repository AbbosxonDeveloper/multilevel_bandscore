let forum = document.getElementById('forum')

let listening = document.getElementById('listening')
let reading = document.getElementById('reading')
let writing = document.getElementById('writing')
let speaking = document.getElementById('speaking')
let temp = document.getElementById('temp')

function ML(listening, reading, writing, speaking) {
    if (listening > 100 || listening < 0 || reading > 100 || reading < 0 || writing > 100 || reading < 0 || speaking > 100 | speaking < 0) {
        return "too high or too low scores";
    } else {
        return (listening + reading + writing + speaking) / 4;
    }
}

forum.onsubmit = function (e) {
    e.preventDefault();

    let lvl = "";
    let result = ML(+listening.value, +reading.value, +writing.value, +speaking.value)

    if (result == "too high or too low scores") {
        lvl = "";
    }
    if (result < 38) {
        lvl = "A2";
    }
    if (result >= 38 && result <= 50) {
        lvl = "B1";
    }
    if (result >= 51 && result <= 64) {
        lvl = "B2";
    }
    if (result >= 65 && result <= 86) {
        lvl = "C1";
    }
    if(result == 0){
        lvl = "???"
    }


    temp.textContent = `${result} (${lvl})`;
}