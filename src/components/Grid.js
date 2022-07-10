import React from 'react'
import Row from './Row'
import useViewport from '../hooks/useViewport';

export default function Grid({currentGuess, guesses, turn}) {
  const { width, height, OLD_HEIGHT } = useViewport();
  const resizeStyle = { width: width, height: height }

  return (
    <div className='board' style={ height < OLD_HEIGHT ? resizeStyle : {} }>
        {guesses.map((g, i) => {
            if(turn === i) {
                return <Row key={i} currentGuess={currentGuess} />
            }
            return <Row key={i} guess={g} />
        })}
    </div>
  )
}
