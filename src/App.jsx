import { useState, useEffect } from "react";
import { getPlayers } from "./api";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });

    getPlayers().then((players) => console.log(players));
    async function getallPlayers() {
      const players = await getPlayers();
      console.log(players);
    }

    getallPlayers();
  }, []);

  return <></>;
}
