import { useState, useEffect } from "react";
import { createPlayer } from "./api";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  /*useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });*/

  useEffect(() => {
    createPlayer({
      name: "Anise",
      breed: "Australian Cattle Dog / Labrador Retriever",
    }).then((newPlayer) => {
      console.log(newPlayer);
    });
  }, []);

  return <></>;
}

export default App;
