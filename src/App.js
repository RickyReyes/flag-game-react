import StartPage from './components/StartPage';
import Choices from './components/Choices';
import EndPage from './components/EndPage';
import { useState, useEffect } from "react"

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [options, setOptions] = useState(null)
  const [active, setActive] = useState(false)
  const [correctIndex, setCorrectIndex] = useState(null)
  const [numberCorrect, setNumberCorrect] = useState(0)
  const GAME_LENGTH = 10
  const [roundsLeft, setRoundsLeft] = useState(GAME_LENGTH)

  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setAllCountries(data)
    setOptions(getOptions(data))
  }

 useEffect(() => {
    fetchCountries()
  }, [])

  function handleStart() {
    setActive(true)
  }

  // /* take an array of (allCountries) and return an array of 5 random countries */
  function getOptions(countriesArray) {
    let newOptions = []
    for (let i = 0; newOptions.length < 5; i++) {
      let index = Math.floor(Math.random() * countriesArray.length)
      if (!newOptions.includes(countriesArray[index])) {
        newOptions.push(countriesArray[index]);
      }
    }
    setCorrectIndex(Math.floor(Math.random() * 5))
    return newOptions
  }

  return (
      <div className="App text-center flex justify-center items-center w-full h-screen bg-gray-100">
        
        <div className="max-w-4xl flex flex-col items-center relative font-mono w-full h-full">
          <header className="text-4xl font-bold text-indigo-500 my-4">
          <h1>"flag game"</h1>
          </header>

          {/* loading circle */}
          {allCountries.length == 0 && 
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-10 h-10" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="loading circle animation" />
            </div>
          }

          {allCountries.length > 0 && !active && 
            <StartPage handleStart={handleStart} />}
          {active && roundsLeft > 0 && <Choices options={options} 
                        correctIndex={correctIndex}
                        setCorrectIndex={setCorrectIndex}
                        allCountries={allCountries} 
                        setOptions={setOptions} 
                        getOptions={getOptions} 
                        numberCorrect={numberCorrect}
                        setNumberCorrect={setNumberCorrect} 
                        roundsLeft={roundsLeft}
                        setRoundsLeft={setRoundsLeft}
                        gameLength={GAME_LENGTH} />  
          }

          {roundsLeft == 0 && <EndPage gameLength={GAME_LENGTH}     numberCorrect={numberCorrect}
          setNumberCorrect={setNumberCorrect}
          setRoundsLeft={setRoundsLeft} />}
          <p className="text-5xl absolute bottom-0 right-0 mx-4 my-2 text-indigo-500">ℝ®</p>
        </div>
      </div>
  );
}

export default App;