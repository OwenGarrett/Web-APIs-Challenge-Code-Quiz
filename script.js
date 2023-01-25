const timeH = document.querySelector('h1');
let timeSeconds = 60;

displayTime(timeSeconds)

const countdown = setInterval(() => {
    timeSeconds--;
    displayTime(timeSeconds);
    if(timeSeconds <= 0 || timeSeconds < 1){
        clockOut();
        clearInterval(countdown);
    }
}, 1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
}

function clockOut(){
    timeH.innerHTML = 'Game Over'
}