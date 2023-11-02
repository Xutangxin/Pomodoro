let duration = 0
let timer
let tipTimer

function getElement(val) {
    return document.querySelector(val)
}

function getDuration(min) {
    return min * 60 * 1000 + 1000
}

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
    setTime(addZero(min), addZero(sec))
}


function handleCountDown() {
    timer = setInterval(() => {
        if (!duration) {
            notifyTimeEnd()
            clearInterval(timer)
        }
        render()
    }, 1000);
}

function start() {
    if (duration) {
        return
    }
    showTips('已开始倒计时')
    duration = getDuration(15)
    handleCountDown()
}


function cancel() {
    if (!duration) {
        return
    }
    showTips('已取消')
    setTime('00', '00')
    if (timer) {
        clearInterval(timer)
    }
    duration = 0
}


function setTime(min, sec) {
    const minEl = getElement('.min')
    const secEl = getElement('.sec')
    minEl.innerHTML = min
    secEl.innerHTML = sec
}

function notifyTimeEnd() {
    speechSynthesis.speak(new SpeechSynthesisUtterance('倒计时结束，工作辛苦啦，休息一下吧'))
}

function showTips(msg) {
    const el = getElement('.tips')
    el.innerHTML = msg
    el.classList.remove('hide')
    clearTimeout(tipTimer)
    tipTimer = setTimeout(() => {
        el.classList.add('hide')
    }, 3000);
}