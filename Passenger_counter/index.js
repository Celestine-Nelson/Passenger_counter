//document.getElementById("count-el").innerText = 7
let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcomeEl")
let count = 0

function increment() {

    count = count + 1
    countEl.innerText = count
}

function save() {
    if (count == 0) {
        alert("Count Before you Save")
    }
    document.getElementById("prev-ent").innerText += " " + count + " : "
    count = 0
    countEl.innerText = 0
}

//let name = "Celestine Nelson Abraham"
//let greetings = "Welcome back"

//welcomeEl.innerText = greetings + " " + name