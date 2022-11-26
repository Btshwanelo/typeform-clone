export const countDownTimer = () => {
  const startingMinutes = 60;
  let time = startingMinutes * 60;
  let timer = '';

  // setInterval(updateCountDown, 1000);

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer = `${minutes}: ${seconds}`;
    time--;
  }
};
