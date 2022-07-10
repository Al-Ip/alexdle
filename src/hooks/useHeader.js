import { useState } from 'react'

const useHeader = () => {
    const [isHelpShown, setIsHelpShown] = useState(false)

    const handleHelpClick = () => {
        !isHelpShown ? setIsHelpShown(true) : setIsHelpShown(false)
    }
    
    return { isHelpShown, handleHelpClick }
}

export default useHeader