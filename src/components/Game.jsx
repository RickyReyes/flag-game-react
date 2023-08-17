import { useState, useEffect, useContext } from "react";
import { GameContext } from "../context/gameContext";
import { Alert, Box, List, ListItemText, ListItemButton } from "@mui/material";
import { getOptions } from "../utils/utils";
import EndPage from "./End";

export default function Game() {
  const {
    options,
    correctIndex,
    setOptions,
    countries,
    NUM_OF_OPTIONS,
    numOfRounds,
    currentRound,
    setCurrentRound,
    numberCorrect,
    setNumberCorrect,
    language,
    gameType,
  } = useContext(GameContext);

  const [answerChosen, setAnswerChosen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  console.log(options[correctIndex]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnswerChosen(true);
    const selectionName = options[index].name.common;
    const correctName = options[correctIndex].name.common;
    if (selectionName === correctName) {
      setNumberCorrect((p) => p + 1);
    }
  };

  useEffect(() => {
    if (answerChosen === true) {
      const timeoutFunc = () => {
        setCurrentRound((p) => p + 1);
        setOptions(getOptions(countries, NUM_OF_OPTIONS));
        setAnswerChosen(false);
      };
      const timeoutId = setTimeout(timeoutFunc, 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [answerChosen]);

  return (
    <section className="game">
      {gameType === "flags" ? (
        <img
          className="flag"
          src={options[correctIndex].flags.svg}
          alt={`${options[correctIndex].name.common} name`}
        />
      ) : options[correctIndex].capital.length > 1 ? (
        <ul>
          {options[correctIndex].capital.map((capital) => (
            <li className="capital">{options[correctIndex].capital}</li>
          ))}
        </ul>
      ) : (
        <h2 className="capital">{options[correctIndex].capital}</h2>
      )}
      <Box className="options-box">
        <List
          className="options-list"
          component="nav"
          aria-label="secondary mailbox folder"
        >
          {options.map((option, index) =>
            answerChosen &&
            options[index].name.common === options[correctIndex].name.common ? (
              <Alert severity="success">
                {language === "french"
                  ? option.translations.fra.common
                  : language === "spanish"
                  ? option.translations.spa.common
                  : option.name.common}
              </Alert>
            ) : answerChosen &&
              index === selectedIndex &&
              options[index].name.common !==
                options[correctIndex].name.common ? (
              <Alert severity="error">
                {language === "french"
                  ? option.translations.fra.common
                  : language === "spanish"
                  ? option.translations.spa.common
                  : option.name.common}
              </Alert>
            ) : (
              <ListItemButton
                key={option.name.common}
                className="options-list__btn"
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, index)}
                disabled={answerChosen}
              >
                <ListItemText
                  className="options-list__text"
                  primary={
                    language === "french"
                      ? option.translations.fra.common
                      : language === "spanish"
                      ? option.translations.spa.common
                      : option.name.common
                  }
                />
              </ListItemButton>
            )
          )}
        </List>
      </Box>
      <div className="round-and-score">
        <div>
          {language === "spanish"
            ? "Ronda"
            : language === "french"
            ? "Tour"
            : "Round"}
          : {currentRound}/{numOfRounds}
        </div>
        <div>
          {language === "spanish" ? "Puntaje" : "Score"}: {numberCorrect}/
          {currentRound - 1}
        </div>
      </div>
    </section>
  );
}
