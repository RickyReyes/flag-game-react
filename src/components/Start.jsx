import { ToggleButtonGroup, Button, ToggleButton } from "@mui/material";
import { useContext } from "react";
import { GameContext } from "../context/gameContext";

export default function StartPage() {
  const { numOfRounds, setNumOfRounds, handleStartGame } =
    useContext(GameContext);

  const handleChange = (e, newNumOfRounds) => {
    setNumOfRounds(newNumOfRounds);
  };

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
        onChange={handleChange}
        aria-label="Platform"
        id="numOfRounds"
      >
        <ToggleButton value={5}>5</ToggleButton>
        <ToggleButton value={10}>10</ToggleButton>
        <ToggleButton value={15}>15</ToggleButton>
      </ToggleButtonGroup>
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
