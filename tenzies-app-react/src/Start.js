import React from 'react';

export default function Start(props) {
  const playerDetails = JSON.parse(localStorage.getItem('bestPlayer'));
  const [currentPlayer, setCurrentPlayer] = React.useState('');

  function startGame() {
    if (currentPlayer.trim() === '') {
      setCurrentPlayer('');
      alert('Enter a valid name');
    } else {
      props.startClicked(currentPlayer);
    }
  }

  return (
    <div className="start-container">
      <div>
        {!playerDetails ? (
          <div>
            <h1>Welcome to Tenzies</h1>
            <input
              type="text"
              name="name"
              id=""
              autoComplete="off" 
              placeholder="Enter your name"
              value={currentPlayer}
              onChange={(event) => setCurrentPlayer(event.target.value)}
            />
            <p>Be the first one to create best score</p>
          </div>
        ) : (
          <div>
            <div>
              <h1>Welcome to Tenzies</h1>
              <input
                type="text"
                name="name"
                id=""
                autoComplete="off"
                placeholder="Enter your name"
                value={currentPlayer}
                onChange={(event) => setCurrentPlayer(event.target.value)}
              />
            </div>
            <p className="try">Try beating the best score</p>
            <span className="best-heading">BEST SCORE </span>

            <div className="best-player-details">
              <span>
                Name:{' '}
                <span className="best-name">{playerDetails.playerName}</span>{' '}
              </span>
              <span>
                Time:{' '}
                <span className="best-time">
                  {playerDetails.totalMinutes < 10
                    ? '0' + playerDetails.totalMinutes
                    : playerDetails.totalMinutes}
                  :
                  {playerDetails.totalSeconds < 10
                    ? '0' + playerDetails.totalSeconds
                    : playerDetails.totalSeconds}
                </span>
              </span>
            </div>
          </div>
        )}

        <button onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
}
