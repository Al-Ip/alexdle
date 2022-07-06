import React, { useEffect, useState } from 'react'

export default function Keypad({usedKeys, handleKeyup}) {
    const [letters, setLetters] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:3001/letters')
        .then(res => res.json())
        .then(json => {
            setLetters(json)
        })
    }, [])


  return (
    <div className='keypad'>
        <div className='keypad-row first-row'>
            {letters && letters.slice(0, 10).map((l) => {
                const colour = usedKeys[l.key]

                return (
                    <div key={l.key} className={colour} data-key={l.key} onClick={(e) => handleKeyup(e)}>
                        {l.key}
                    </div>
                )
            })}
        </div>
        <div className='keypad-row second-row'>
            <div data-testid="spacer" className="key-module_half"></div>
            {letters && letters.slice(10, 19).map((l) => {
                const colour = usedKeys[l.key]

                return (
                    <div key={l.key} className={colour} data-key={l.key} onClick={(e) => handleKeyup(e)}>
                        {l.key}
                    </div>
                )
            })}
            <div data-testid="spacer" className="key-module_half"></div>
        </div>
        <div className='keypad-row third-row'>
            <div key={"Enter"} className="Enter" data-key={'Enter'} onClick={(e) => handleKeyup(e)}>
                ENTER
            </div>
            {letters && letters.slice(19, 26).map((l) => {
                const colour = usedKeys[l.key]

                return (
                    <div key={l.key} className={colour} data-key={l.key} onClick={(e) => handleKeyup(e)}>
                        {l.key}
                    </div>
                )
            })}
            <div key={"Backspace"} className="Backspace" data-key={'Backspace'} onClick={(e) => handleKeyup(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="game-icon" data-testid="icon-backspace">
                    <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                </svg>
            </div>
        </div>
    </div>
  )
}
