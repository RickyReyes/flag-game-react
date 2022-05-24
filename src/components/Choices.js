import React, { useState, useEffect } from 'react'

export default function Choices({roundsLeft, setRoundsLeft, options, correctIndex, setCorrectIndex, setOptions, getOptions, allCountries, numberCorrect, setNumberCorrect, gameLength}) {
    const [correctCountry, setCorrectCountry] = useState(options[correctIndex])
    const [correctFlag, setCorrectFlag] = useState(correctCountry.flags.png)
    const [optionElements, setOptionElements] = useState([]) // will hold JSX elements

    useEffect(() => {
        setOptions(getOptions(allCountries))
        setCorrectIndex(Math.floor(Math.random() * 5))
        setCorrectFlag(correctCountry.flags.png)
    }, [roundsLeft])
    
    useEffect(() => {
        setCorrectCountry(options[correctIndex])
    }, [correctIndex])

    // set new option elements
    useEffect(() => {
        setOptionElements(options.map(country => (
            <button 
                key={country.area} 
                onClick={(e) => handleSelect(e)}
                className="self-start text-lg font-bold py-1 px-2 mb-2 border border-indigo-500 rounded-full text-indigo-900 bg-indigo-100 focus:bg-indigo-100 hover:bg-indigo-200">
                    {country.name.common}
            </button>
        )))
    }, [roundsLeft]);

    function handleSelect(e) {
        if (e.target.innerText == correctCountry.name.common) {
            setNumberCorrect(prev => prev + 1)
        }
        let selectedOptionElements = options.map(country => (
            <button disabled
                key={country.area} 
                onClick={() => handleSelect(e)}
                className={"self-start text-lg font-bold py-1 px-2 mb-2 border border-indigo-500 rounded-full text-indigo-900 " + (country.name.common == correctCountry.name.common ? "bg-green-300" : country.name.common == e.target.innerText ? "bg-red-300" : "bg-indigo-100")}>
                    {country.name.common}
            </button>
        ))
        setOptionElements(selectedOptionElements)
        setTimeout(() => {
            setRoundsLeft(prev => prev - 1)
        }, 1200)
    }
  
    return (
        <div className="h-full w-full flex flex-col items-center pt-4 px-2">
            <div className="flex flex-col items-center text-indigo-900 text-lg">
                <img className="mb-4 h-48 max-w-xs shadow-xl" src={correctFlag} />
                {optionElements}
                <div>correct: {numberCorrect}/{gameLength-roundsLeft}</div>
                <div>remaining flags: {roundsLeft}</div>
            </div>
        </div>
    )
}