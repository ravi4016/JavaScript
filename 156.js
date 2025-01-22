
function countdown(seconds, onTick, onComplete) {
  let intervalId = null;
  let remainingSeconds = seconds;

  const tick = () => {
    if (typeof onTick === 'function') {
      onTick(remainingSeconds);
    }
    remainingSeconds--;
  };

  const complete = () => {
    clearInterval(intervalId);
    if (typeof onComplete === 'function') {
      onComplete();
    }
  };

  intervalId = setInterval(() => {
    if (remainingSeconds >= 0) {
      tick();
    } else {
      complete();
    }
  }, 1000);
}
countdown(
    5, 
    (remaining) => console.log(`Time left: ${remaining}s`), 
    () => console.log('Countdown complete!') 
  );