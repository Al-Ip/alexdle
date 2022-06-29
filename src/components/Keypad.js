import React, { useEffect, useState } from 'react'

export default function Keypad({usedKeys}) {
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
        {letters && letters.map((l) => {
            const colour = usedKeys[l.key]
            return (
                <div key={l.key} className={colour}>
                    {l.key}
                </div>
            )
        })}
    </div>
  )
}
