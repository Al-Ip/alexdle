import React, { useEffect, useState } from 'react'
import useAlexdle from '../hooks/useAlexdle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Alexdle({solution}) {
    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useAlexdle(solution)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if(isCorrect){
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
        }
        else if(turn > 5){
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect])

  return (
    <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <br></br>
        <Keypad usedKeys={usedKeys} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} /> }
    </div>
  )
}
