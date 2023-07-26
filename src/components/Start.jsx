import {
  ToggleButtonGroup,
  Button,
  ToggleButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../context/gameContext";

export default function StartPage() {
  const {
    numOfRounds,
    setNumOfRounds,
    handleStartGame,
    language,
    setLanguage,
  } = useContext(GameContext);

  const handleNumOfRoundsChange = (e, newNumOfRounds) => {
    setNumOfRounds(newNumOfRounds);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  console.log(language);

  return (
    <section className="start-page">
      <h1 className="heading">Flag Game</h1>
      <label className="num-of-rounds__label" htmlFor="numOfRounds">
        Number of Rounds
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
        Select Language
      </label>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
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
        className="start-btn"
        onClick={() => handleStartGame()}
        style={{ marginTop: "1rem" }}
        variant="contained"
      >
        Start
      </Button>
    </section>
  );
}
