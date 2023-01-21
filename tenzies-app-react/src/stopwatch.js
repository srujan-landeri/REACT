import React from 'react';

const Timer = (props) => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  let timer;

  React.useEffect(() => {
    if (props.tenzies == false) {
      setMinutes(0);
      setSeconds(0);
    }
    const playerName = props.playerName;
    if (props.tenzies) {
      const playerDetails = {
        playerName: playerName,
        totalMinutes: minutes,
        totalSeconds: seconds,
      };

      let prevPlayer = JSON.parse(localStorage.getItem('bestPlayer'));

      if (prevPlayer != null) {
        if (playerDetails.totalMinutes <= prevPlayer.totalMinutes) {
          if (playerDetails.totalMinutes < prevPlayer.totalMinutes) {
            localStorage.setItem('bestPlayer', JSON.stringify(playerDetails));
          } else {
            if (playerDetails.totalSeconds < prevPlayer.totalSeconds) {
              localStorage.setItem('bestPlayer', JSON.stringify(playerDetails));
            } else {
              localStorage.setItem('bestPlayer', JSON.stringify(prevPlayer));
            }
          }
        } else {
          localStorage.setItem('bestPlayer', JSON.stringify(prevPlayer));
        }
      } else if (prevPlayer === null) {
        localStorage.setItem('bestPlayer', JSON.stringify(playerDetails));
      }
    }

    if (props.isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);

        if (seconds > 59) {
          setMinutes((prev) => prev + 1);
          d;

          setSeconds(0);
        }
      }, 1000);

      return () => clearInterval(timer);
    } else {
      console.log('pause');
    }
  }, [props.isRunning, props.tenzies]);

  return (
    <div className="challange-contianer">
      <span className="time">
        Time:{' '}
        <span className="tot-time">
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </span>
      </span>
      <span className="rolls">
        Rolls:
        <span className="tot-rolls">{props.totalRolls}</span>{' '}
      </span>
    </div>
  );
};

export default Timer;
