function getElement(val) {
    return document.querySelector(val)
}

function getDuration(min) {
    return min * 60 * 1000 + 1000
}

let duration = getDuration(30)
let timer

function getCountDown() {
    if (duration) {
        duration = duration - 1000
    }
    return {
        min: parseInt(duration / 1000 / 60 % 60),
        sec: Math.round(duration / 1000 % 60)
    }
}


function addZero(val) {
    return val < 10 ? '0' + val : val
}

function render() {
    const { min, sec } = getCountDown()
    const minDiv = getElement('.min')
    const secDiv = getElement('.sec')
    minDiv.innerHTML = addZero(min)
    secDiv.innerHTML = addZero(sec)
}


function startCountDown() {
    timer = setInterval(() => {
        if (!duration) {
            clearInterval(timer)
        }
        render()
    }, 1000);
}

startCountDown()