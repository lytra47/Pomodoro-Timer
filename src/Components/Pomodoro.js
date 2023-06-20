import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import soundFile from "../Audio/notify.wav";

function Pomodoro() {
  //  01 min = 60 secs
  //  25 min = 60 * 25 = 1500 secs
  //  05 min = 300
  //  15 min = 900

  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSetTime, setCurrentSetTime] = useState(1500);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    let interval = null;

    if (isRunning && time) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      showNotification();
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  };
  getAdvice();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setTime(currentSetTime);
    setIsRunning(false);
  };

  //   NOTIFICATION
  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Timer Finished!", {
        body: "The timer is done, take 5 mins break.",
      });
      const audio = new Audio(soundFile);
      audio.play();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (Notification.permission === "granted") {
          new Notification("Timer Finished!", {
            body: "The timer is done, take 5 mins break.",
          });
          const audio = new Audio(soundFile);
          audio.play();
        }
      });
    }
  };

  const changeTimer = (changedTime) => {
    setTime(changedTime);
    setCurrentSetTime(changedTime);
  };

  return (
    <>
      {/* main div */}
      <div className="main_container">
        <div className="pomodoro_main_wrapper">
          {/* 25 MIN TIMER/////////////////////////////////////// */}
          <div className="pomodoro_sub_wrapper">
            <div className="pomodoro_time">{formatTime(time)}</div>
            <div className="pomodoro_buttons_pause">
              {!isRunning ? (
                <button
                  className="left"
                  disabled={time === 0}
                  onClick={handleStart}
                >
                  Start
                </button>
              ) : (
                <button
                  className="left pause"
                  onClick={handlePause}
                  disabled={time === 0}
                >
                  Pause
                </button>
              )}
              <button
                className="right"
                onClick={() => {
                  handleReset();
                }}
              >
                Reset
              </button>
            </div>
            <div className="pomodoro_change_timer">
              <button
                onClick={() => {
                  changeTimer(1500);
                  setIsRunning(false);
                  // setIsRunning(false); for reseting on click timer change.
                }}
                className="left"
              >
                25 mins work
              </button>
              <button
                onClick={() => {
                  changeTimer(300);
                  setIsRunning(false);
                }}
                className="center"
              >
                5 mins break
              </button>
              <button
                onClick={() => {
                  changeTimer(900);
                  setIsRunning(false);
                }}
                className="right"
              >
                15 mins break
              </button>
            </div>
          </div>
          <div className="pomodoro_sub_wrapper_advice">
            <button className="advicebutton" onClick={getAdvice}>
              Advice
            </button>
            <div className="advice">{advice}</div>
          </div>
        </div>
        {/* main div end */}

        {/* info div */}
        <div className="info_wrapper">
          <div>
            <h3 className="info_heading">Pomodoro Technique</h3>

            <div className="info_content">
              The Pomodoro Technique is a time management method developed by
              Francesco Cirillo in the late 1980s. It is designed to improve
              productivity by breaking work into focused intervals, separated by
              short breaks. The technique gets its name from the tomato-shaped
              kitchen timer that Cirillo initially used (pomodoro means "tomato"
              in Italian).
            </div>
            <h3>What is Pomodoro Technique?</h3>
            <div className="info_content">
              The idea behind the Pomodoro Technique is to break work into
              manageable intervals, leveraging the focused periods and regular
              breaks to maintain motivation, prevent burnout, and improve
              productivity. By using a timer and adhering to the structured
              intervals, you can develop a sense of rhythm and optimize your
              work process.
            </div>
            <h3>Who is it beneficial for?</h3>
            <div className="info_content">
              The Pomodoro Technique can be beneficial for individuals who
              struggle with distractions, procrastination, or maintaining focus
              for extended periods. It encourages productivity by creating a
              sense of urgency and promoting regular breaks to prevent mental
              fatigue.
            </div>
          </div>
        </div>
        {/* info div end */}
      </div>
    </>
  );
}

export default Pomodoro;
