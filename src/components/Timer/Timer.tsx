import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './Timer.modules.css';


function Timer() {;
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const [timerStop, setTimerStop] = useState(true);


  function resetTimer() {
    setTimerSeconds(0)
    setTimerMinutes(0)
    setTimerHours(0)
    setTimerStart(false)
    setTimerStop(true)
  }

  function StartTimer() {
    setTimerStart(true);
    setTimerStop(false);
  }
  function StopTimer() {
    setTimerStart(false);
    setTimerStop(true);
  }

  useEffect(() => {
    let interval: any;
    if (timerStart) {
      interval = setInterval(() => {
        if (timerHours > 90) {
          resetTimer()
        }
        else if (timerSeconds === 59) {
          setTimerMinutes(timerMinutes + 1)
          setTimerSeconds(0)
        }
        else if (timerMinutes === 59) {
          setTimerHours(timerHours + 1)
          setTimerMinutes(0)
        }
        else {
          setTimerSeconds(timerSeconds + 1)
        }
      }, 1000)
    }
    else if (!timerStart && timerSeconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timerStart, timerStop, timerSeconds])

  return (
    <div>
      <div className="timer-display">{("0" + timerHours).slice(-2)} : {("0" + timerMinutes).slice(-2)} : {("0" + timerSeconds).slice(-2)}</div>
      <div className= "button">
        <Button
          functionality={StartTimer}
          buttonValue="Start"
        />

        <Button
          functionality={StopTimer}
          buttonValue="Stop"
        />

        <Button
          functionality={resetTimer}
          buttonValue="Reset"
        />
      </div>
    </div>
  )
}

export default Timer;