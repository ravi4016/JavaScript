function countdownTimer(num, callback) {
    let n = num;
    const timerInterval = setInterval(() => { 
        if (n > 0) {
            callback(n);
            n--;
        } else {
            callback(0);
            clearInterval(timerInterval); 
        }
    }, 1000);
}

function updateTimer(num) {
    if (num > 0) {
        console.log(num);
    } else {
        console.log("Timer Finish!");
    }
}

countdownTimer(5, updateTimer);
