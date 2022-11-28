import { useState } from 'react';

export const countDownTimer = (
  startingSeconds,
  startingMinutes,
  timer,
  seconds,
  minutes,
  setSeconds,
  setMinutes,
  handleNextQuestion,
) => {
  timer.current = setInterval(() => {
    setSeconds(seconds - 1);
    if (minutes === 0 && seconds === 0) {
      setSeconds(startingSeconds);
      setMinutes(startingMinutes);
      handleNextQuestion();
    }

    if (minutes > 0 && seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }

    if (minutes === 0 && seconds === 1) {
      setMinutes(0);
      setSeconds(0);
    }
  }, 1000);
  return () => clearInterval(timer.current);
};
