import React from 'react'

export default function EndPage({numberCorrect, setNumberCorrect, gameLength, setRoundsLeft}) {

  const message = (numberCorrect <= (gameLength / 2)) ? "oh, darn 😕" :
  (numberCorrect > (gameLength / 2) && numberCorrect <= (gameLength * .75)) ? "good job 🙏" :
  (numberCorrect > (gameLength * .75) && numberCorrect < gameLength) ? "impressive 👏" : 
  "you beat the game 🥳"

  function restartGame() {
    setRoundsLeft(gameLength)
    setNumberCorrect(0)
  }

  return (
    <div className="h-full w-full text-indigo-900">
      <h2 className="text-xl mt-4">you scored {numberCorrect} out of {gameLength}</h2>
      <h3>{message}</h3>
      <button 
      onClick={restartGame}
      className="text-xl bg-indigo-700 hover:bg-indigo-500 text-indigo-100 font-bold px-4 py-2 mt-4 rounded-full">
        Play again
      </button>
    </div>
  )
}