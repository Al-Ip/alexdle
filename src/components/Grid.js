import React, { useEffect, useState } from 'react'
import Row from './Row'
import useViewport from '../hooks/useViewport';

export default function Grid({currentGuess, guesses, turn}) {
  const { width, height, SET_NEW_HEIGHT } = useViewport();
  const resizeStyle = { width: width, height: height }
  console.log(height)
  console.log(SET_NEW_HEIGHT)


  return (
    <div className='board' style={ height < SET_NEW_HEIGHT ? resizeStyle : {} }>
        {guesses.map((g, i) => {
            if(turn === i) {
                return <Row key={i} currentGuess={currentGuess} />
            }
            return <Row key={i} guess={g} />
        })}
    </div>
  )
}
