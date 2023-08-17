import { useContext } from "react";
import { GameContext } from "../context/gameContext";
import { Button } from "@mui/material";
export default function EndPage() {
  const { numberCorrect, numOfRounds, handleStartGame, language } =
    useContext(GameContext);
  return (
    <section className="end-page">
      <h2>
        You scored {numberCorrect} out of {numOfRounds}{" "}
      </h2>
      <Button
        className="btn btn--play-again"
        onClick={() => handleStartGame()}
        style={{ marginTop: "1rem" }}
        variant="contained"
      >
        {language === "french"
          ? "Rejouer"
          : language === "spanish"
          ? "Jugar de nuevo"
          : "Play again"}
      </Button>
    </section>
  );
}
