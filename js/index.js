const timer = document.getElementById("timerr")
const stopTimer = document.getElementById("stop")
const startTimer = document.getElementById("start")
const stopAndStart = document.getElementById("stopAndStart")
let countTap = 0

timeUpdate()

function timeUpdate() {
    const newDate = new Date(`Jan 1, ${new Date().getFullYear() +1}`)

    const neew = new Date()

    const diff = newDate - neew
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60 ) % 24)
    const minutes = Math.floor(diff / (1000 * 60) % 60)
    const sec = Math.floor((diff / 1000) % 60)

    timer.textContent = `${days} d. ${hours} h. ${minutes} minutes. ${sec} sec.`
}

let intervalId = setInterval(timeUpdate,1000)



startTimer.addEventListener("click", e => {
    stopAndStart.disabled = false
    stopTimer.disabled = false
    startTimer.disabled = true
    intervalId = setInterval(timeUpdate,1000)
    countTap += 1
    console.log("countTap = " + countTap + "startTimer")
    console.log(intervalId + "intervalId")
})
stopTimer.addEventListener("click", e =>{
    stopAndStart.disabled = true
    stopTimer.disabled = true
    startTimer.disabled = false
    countTap += 1
    clearInterval(intervalId)
    console.log("countTap = " + countTap + "stopTimer")
    console.log(intervalId + "intervalId")

})

stopAndStart.addEventListener("click", oneClickFun)

function oneClickFun() {
    if(countTap % 2 === 0) {
        clearInterval(intervalId)
        stopAndStart.id = "start"
        stopAndStart.disabled = false
        countTap += 1
        stopTimer.disabled = true
        startTimer.disabled = false
        console.log("countTap = " + countTap + "if")
    }
    else {
        intervalId = setInterval(timeUpdate,1000)
        stopAndStart.id = "stopAndStart"
        countTap += 1
        console.log("countTap = " + countTap + "else")
        console.log(intervalId + "else")
        startTimer.disabled = true
        stopTimer.disabled = false
    }
}
