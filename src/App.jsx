import React, { useEffect, useState } from 'react';
import BasketballPlayerCard from './Components/BasketballPlayerCard/BasketBallPlayerCard';
import './App.css'

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('Player.json')
      .then(response => response.json())
      .then(data => {
        setPlayers(data);
      })
  }, []);

  return (
    <>
      <h1 className='title'>Basket Ball Player Card</h1>

      <div className="App">
        {players.length > 0 ? (
          players.map(player => (
            <BasketballPlayerCard
              key={player.name}
              name={player.name}
              image={player.image}
              position={player.position}
              stats={player.stats}
            />
          ))
        ) : (
          <div>No player data available</div>
        )}



      </div>
    </>
  );
}

export default App;
