function getElement(val) {
    return document.querySelector(val)
}

function getDuration(min) {
    return min * 60 * 1000 + 1000
}

let duration = 0
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
    setMin(addZero(min))
    setSec(addZero(sec))
}


function startCountDown() {
    timer = setInterval(() => {
        if (!duration) {
            clearInterval(timer)
        }
        render()
    }, 1000);
}

// startCountDown()
function start() {
    if (duration) {
        return
    }
    duration = getDuration(3)
    startCountDown()
}


function cancel() {
    if (!duration) {
        return
    }
    setMin('00')
    setSec('00')
    duration = 0
}


function setMin(val) {
    const el = getElement('.min')
    el.innerHTML = val
}

function setSec(val) {
    const el = getElement('.sec')
    el.innerHTML = val
}