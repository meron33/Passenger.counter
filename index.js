// let count = 0
//console.log(count)
//let myAge = 25
//let humanDogRatio = 7
//let mydogage = myAge * humanDogRatio
//console.log(mydogage)
//let bonudPoint = 50
// console.log(bonudPoint)
//bonudPoint = bonudPoint + 50
//console.log(bonudPoint)
//bonudPoint = bonudPoint - 75
//console.log(bonudPoint)
//bonudPoint = bonudPoint + 45
//console.log(bonudPoint) 
/*function increment() {
    console.log("The button was clicked")
    
}*/

/*let lap1 = 34
let lap2 = 33
let lap3 = 36

function loglapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}
loglapTime()*/

/*let lapscompleted = 0

function increment(){
     lapscompleted = lapscompleted + 1
}

increment()
increment()
increment()
console.log(lapscompleted)*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
   
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
     
}

/*let message = "you have three notification"
console.log(message)
let messageToUser = message + "," + "!"
console.log(messageToUser)

let myname = "Meron"
let greeting = "Hi, my name is"
let myGreeting = greeting +" " + myname
console.log(myGreeting)*/


/*let welcomeEl = document.getElementById("welcome-el")
let myname = "meron"
let greeting = "welcome Back"
welcomeEl.innerText = greeting +" "+ myname
welcomeEl.innerText += "👋"*/