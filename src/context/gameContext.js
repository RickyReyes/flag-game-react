import { React, useState, useEffect, useMemo, createContext } from "react";
import { useCountries } from "../utils/api";
import { getOptions } from "../utils/utils";
const GameContext = createContext();

function GameContextProvider(props) {
  const { countries, loading, error } = useCountries();
  const [active, setActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameType, setGameType] = useState("flags");
  const [numOfRounds, setNumOfRounds] = useState(5);
  const [currentRound, setCurrentRound] = useState(null);
  const [language, setLanguage] = useState("english");
  const [correctIndex, setCorrectIndex] = useState(null);
  const [numberCorrect, setNumberCorrect] = useState(0);
  // options will hold an array of NUM_OF_OPTIONS countries, changed every round
  const NUM_OF_OPTIONS = 5;
  const [options, setOptions] = useState([]);

  function handleStartGame() {
    if (countries) {
      setCurrentRound(1);
      setActive(true);
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
        options,
        setOptions,
        handleStartGame,
        correctIndex,
        setCorrectIndex,
        currentRound,
        setCurrentRound,
        numberCorrect,
        setNumberCorrect,
        language,
        setLanguage,
        active,
        setActive,
        gameOver,
        setGameOver,
        gameType,
        setGameType,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContextProvider, GameContext };
