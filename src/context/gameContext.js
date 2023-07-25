import { React, useState, useEffect, useMemo, createContext } from "react";
import { useCountries } from "../utils/api";
import { getOptions } from "../utils/utils";
const GameContext = createContext();

function GameContextProvider(props) {
  const GAME_LENGTH = 5; // number of rounds
  const NUM_OF_OPTIONS = 5; // per round
  const { countries, loading, error } = useCountries();
  const [gameStarted, setGameStarted] = useState(false);
  const [options, setOptions] = useState([]); // per round
  const [correctIndex, setCorrectIndex] = useState(null);
  const [numOfRounds, setNumOfRounds] = useState(5);
  const [roundsLeft, setRoundsLeft] = useState(numOfRounds);

  function handleStartGame() {
    if (countries) {
      setGameStarted(true);
      setOptions(getOptions(countries, NUM_OF_OPTIONS));
    }
  }

  const cachedData = useMemo(() => countries, [countries]);

  return (
    <GameContext.Provider
      value={{
        NUM_OF_OPTIONS,
        countries,
        loading,
        error,
        numOfRounds,
        setNumOfRounds,
        gameStarted,
        setGameStarted,
        options,
        setOptions,
        handleStartGame,
        correctIndex,
        setCorrectIndex,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContextProvider, GameContext };
