import { useState, useEffect, useContext } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Start from "./components/Start";
import Game from "./components/Game";
import { GameContext } from "./context/gameContext";

function App() {
  const { gameStarted, options, setCorrectIndex } = useContext(GameContext);

  useEffect(() => {
    setCorrectIndex(Math.floor(Math.random() * 5));
  }, [options]);

  return <main className="App">{!gameStarted ? <Start /> : <Game />}</main>;
}

export default App;
