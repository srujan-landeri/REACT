import React from 'react';
import MainGame from './MainGame';
import Start from './Start';

export default function App() {
  const [start, setStart] = React.useState(false);
  const [currentPlayerName, setCurrentPlayername] = React.useState('');

  function startClicked(name) {
    setCurrentPlayername(name);
    setStart(true);
  }

  function gameEnded() {
    setStart(false);
  }

  return (
    <div className="App">
      {!start && <Start startClicked={(name) => startClicked(name)} />}
      {start && (
        <MainGame playerName={currentPlayerName} gameEnded={gameEnded} />
      )}
    </div>
  );
}
