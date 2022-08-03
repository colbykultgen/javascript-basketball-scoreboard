let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let countHome = 0
let countGuest = 0

function homeOne() {
    countHome += 1
    scoreHome.textContent = countHome
}

function homeTwo() {
    countHome += 2
    scoreHome.textContent = countHome
}

function homeThree() {
    countHome += 3
    scoreHome.textContent = countHome
}

function guestOne() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function guestTwo() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function guestThree() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}


