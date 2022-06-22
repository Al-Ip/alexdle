import React, { useEffect } from 'react'
import useAlexdle from '../hooks/useAlexdle'
import Grid from './Grid'

export default function Alexdle({solution}) {
    const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useAlexdle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

  return (
    <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <br></br>
        <div>Current Guess - <b>{currentGuess}</b> </div>
        <div>Solution - <b>{solution}</b> </div>
    </div>
  )
}
