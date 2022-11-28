export const countDownTimer = () => {
  const startingMinutes = 3;

  const startingSeconds = startingMinutes * 60;
  const minutes = String(startingSeconds).split('.')[0];
  const seconds = String(startingSeconds).split('.')[1].slice(0, 2);

  setInterval(() => {
    
  })

  // setInterval(updateCountDown, 1000);

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer = `${minutes}: ${seconds}`;
    time--;
  }
};
