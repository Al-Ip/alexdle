import { useState } from "react"

const useAlexdle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    // format new guess when user enters a word
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, colour: 'grey'}
        })

        // find any green letters
        formattedGuess.forEach((l, i) => {
            if(solutionArray[i] === l.key){
                formattedGuess[i].colour = 'green'
                solutionArray[i] = null
            }
        })

        // find any yellow letters
        formattedGuess.forEach((l, i) => {
            if(solutionArray.includes(l.key) && l.colour !== 'green'){
                formattedGuess[i].colour = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // takes formatted guess and adds it to history of guesses
    // check if guess is correct i.e. if it matches solution word
    // add turn number
    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true)
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setCurrentGuess('')
    }

    // handle keyup/ enter event and track guess
    const handleKeyup = ({key}) => {
        var isOnlyLetters = /^[A-Za-z]$/.test(key)

        if(key === 'Enter'){
            if(turn > 5){
                console.log('Used up all your guesses')
                return
            }
            if(history.includes(currentGuess)){
                console.log('Already tried that word')
                return
            }
            if(currentGuess.length !== 5){
                console.log('Word must be 5 characters long')
                return
            }

            addNewGuess(formatGuess())
            console.log(formatGuess())
        }

        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if(isOnlyLetters && currentGuess.length < 5){
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useAlexdle