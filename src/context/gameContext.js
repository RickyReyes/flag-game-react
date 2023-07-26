import { React, useState, useEffect, useMemo, createContext } from "react";
import { useCountries } from "../utils/api";
import { getOptions } from "../utils/utils";
const GameContext = createContext();

function GameContextProvider(props) {
  const [numOfRounds, setNumOfRounds] = useState(5);
  const [language, setLanguage] = useState("english");
  const NUM_OF_OPTIONS = 5; // per round
  const { countries, loading, error } = useCountries();
  const [gameStarted, setGameStarted] = useState(false);
  const [options, setOptions] = useState([]); // per round
  const [correctIndex, setCorrectIndex] = useState(null);
  const [round, setRound] = useState(1);
  const [numberCorrect, setNumberCorrect] = useState(0);

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
        round,
        setRound,
        numberCorrect,
        setNumberCorrect,
        language,
        setLanguage,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContextProvider, GameContext };
