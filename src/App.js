import { useState, useEffect, useContext } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Start from "./components/Start";
import Game from "./components/Game";
import End from "./components/End";
import { GameContext } from "./context/gameContext";

function App() {
  const {
    active,
    setActive,
    options,
    setCorrectIndex,
    currentRound,
    numOfRounds,
  } = useContext(GameContext);

  useEffect(() => {
    setCorrectIndex(Math.floor(Math.random() * 5));
  }, [options]);

  useEffect(() => {
    if (currentRound > numOfRounds) {
      setActive(false);
    }
  }, [currentRound]);

  console.log(!active, currentRound > numOfRounds);
  if (!active && currentRound > numOfRounds) return <End />;
  else if (!active) return <Start />;
  else return <Game />;
}

export default App;
