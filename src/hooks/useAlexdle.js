import { useState } from "react"

const useAlexdle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    // format new guess when user enters a word
    const formatGuess = () => {

    }

    // takes formatted guess and adds it to history of guesses
    // check if guess is correct i.e. if it matches solution word
    // add turn number
    const addNewGuess = () => {

    }

    // handle keyup/ enter event and track guess
    const handleKeyup = () => {

    }

}

export default useAlexdle