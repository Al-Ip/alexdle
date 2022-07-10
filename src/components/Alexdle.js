import React, { Fragment, useEffect, useState } from 'react'
import useAlexdle from '../hooks/useAlexdle'
import Grid from './Grid'
import HelpDialog from './HelpDialog'
import Keypad from './Keypad'
import FinishModal from './FinishModal'

export default function Alexdle({solution, isHelpShown, handleHelpClick}) {
    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useAlexdle(solution)
    const [showModal, setShowModal] = useState(false)
    
    const closeHelpDialogHandler = () => {
      const dialog = document.querySelector(`.help-dialog`)
      dialog.style.animation = 'slideUp 0.7s ease normal'
      setTimeout(() => {
        handleHelpClick()
      }, 400)
    }   

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

        return () => {
          window.removeEventListener('keyup', handleKeyup)
        }
    }, [handleKeyup, isCorrect, turn])

  return (
    <Fragment>
        <div className='board-container'>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        </div>
        <Keypad usedKeys={usedKeys} handleKeyup={handleKeyup} />
        { showModal && <FinishModal isCorrect={isCorrect} turn={turn} solution={solution} /> }
        { isHelpShown && <HelpDialog onMenuClose={() => {closeHelpDialogHandler()}} />}
    </Fragment>
  )
}
