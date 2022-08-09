
var generate;
var input;
var statement;
var selfScore = 0;
var opponentScore = 0;
var gameStatement


function startGame() {
    selfScore = 0;
    opponentScore = 0;
    updateScores()
    document.getElementById("play_button").innerHTML = "Sıradaki Tur"
}

//Skorları Günceller
function updateScores() {
    document.getElementById("selfScore").innerText = selfScore
    document.getElementById("opponentScore").innerText = opponentScore
}

//Oyuncunun Tahminiyle Karşılaştır
function comparison() {
    if (input == generate) {
        statement = "Berabere"
    } else {
        if (((input == "Taş") & (generate == "Makas")) || ((input == "Kağıt") & (generate == "Taş")) || ((input == "Makas") & (generate == "Kağıt"))) {
            statement = "Kazandın";
            selfScore +=1;
        } else {
            statement = "Kaybettin"
            opponentScore +=1;
        }
    }
}

//Tahmin Üret
function generateGuess() {
    generate = Math.floor(Math.random()*3)
    if (generate == 0) {
        generate = "Taş";
    } else if (generate == 1) {
        generate = "Kağıt";
    } else {
        generate = "Makas";
    }
}


function startTurn() {
    generateGuess()
    comparison()
    updateScores()
}

let list = document.querySelectorAll("#player_div div button");
for ( var i = 0; i < list.length; i++ ) {
    list[i].addEventListener( 'click', (e) => {
        console.log(e.target.id);
        input = e.target.id    
        startTurn()
    })
}