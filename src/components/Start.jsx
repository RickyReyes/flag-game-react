import {
  ToggleButtonGroup,
  Button,
  ToggleButton,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../context/gameContext";

export default function StartPage() {
  const {
    handleStartGame,
    numOfRounds,
    setNumOfRounds,
    gameType,
    setGameType,
    language,
    setLanguage,
  } = useContext(GameContext);

  const handleGameTypeChange = (e, newGameType) => {
    setGameType(newGameType);
  };

  const handleNumOfRoundsChange = (e, newNumOfRounds) => {
    setNumOfRounds(newNumOfRounds);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <section className="start-page">
      <h1 className="heading">
        {language === "french"
          ? "Jeu de Drapeaux"
          : language === "spanish"
          ? "Juego de Banderas"
          : "Flag Game"}
      </h1>
      <label className="game-type__label" htmlFor="gameType">
        {language === "french"
          ? "Type de jeu"
          : language === "spanish"
          ? "Tipo de juego"
          : "Game Type"}
      </label>
      <ToggleButtonGroup
        className="num-of-rounds__buttons"
        color="primary"
        value={gameType}
        exclusive
        onChange={handleGameTypeChange}
        aria-label="Platform"
        id="gameType"
      >
        <ToggleButton value="flags">
          {" "}
          {language === "french"
            ? "Drapeaux"
            : language === "spanish"
            ? "Banderas"
            : "Flags"}
        </ToggleButton>
        <ToggleButton value="capitals">
          {" "}
          {language === "english" ? "Capitals" : "Capitales"}
        </ToggleButton>
      </ToggleButtonGroup>

      <label className="num-of-rounds__label" htmlFor="numOfRounds">
        {language === "french"
          ? "Nombre de tours"
          : language === "spanish"
          ? "Número de rondas"
          : "Number of rounds"}
      </label>
      <ToggleButtonGroup
        className="num-of-rounds__buttons"
        color="primary"
        value={numOfRounds}
        exclusive
        onChange={handleNumOfRoundsChange}
        aria-label="Platform"
        id="numOfRounds"
      >
        <ToggleButton value={5}>5</ToggleButton>
        <ToggleButton value={10}>10</ToggleButton>
        <ToggleButton value={15}>15</ToggleButton>
      </ToggleButtonGroup>
      <label className="select-language__label" htmlFor="numOfRounds">
        {language === "french"
          ? "Choisir la langue"
          : language === "spanish"
          ? "Seleccione el idioma"
          : "Select language"}
      </label>
      <FormControl sx={{ m: 1, minWidth: 110 }}>
        <Select
          value={language}
          onChange={handleLanguageChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="spanish">Español</MenuItem>
          <MenuItem value="french">Français</MenuItem>
        </Select>
      </FormControl>
      <Button
        className="btn btn--start"
        onClick={() => handleStartGame()}
        style={{ marginTop: "1rem" }}
        variant="contained"
      >
        {language === "french"
          ? "Commencer"
          : language === "spanish"
          ? "Comenzar"
          : "Start"}
      </Button>
    </section>
  );
}
