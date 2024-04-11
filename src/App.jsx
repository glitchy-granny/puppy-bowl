import { useState, useEffect } from "react";
import { createPlayer, getPlayers } from "./api";
import "./index.css";
import PlayerCard from "./PlayerCard";

function App() {
  const [players, setPlayers] = useState([]);

  const createNewplayer = (player) => {
    createPlayer(player).then((newPlayer) => {
      console.log(newPlayer);
    });
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      const serverPlayers = await getPlayers();
      setPlayers(serverPlayers);
    };

    fetchPlayers();
  }, []);

  return (
    <>
      {players.map((player) => {
        return (
          <PlayerCard
            key={player.id}
            name={player.name}
            imageUrl={player.imageUrl}
          />
        );
      })}
    </>
  );
}

export default App;
