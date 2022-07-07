import { useEffect, useState } from 'react'

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const HEIGHT_BREAKPOINT = 670
    const OLD_HEIGHT = 420
    const OLD_WIDTH = 350

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(OLD_WIDTH - (HEIGHT_BREAKPOINT - window.innerHeight));
            setHeight(OLD_HEIGHT - (HEIGHT_BREAKPOINT - window.innerHeight));
        }

        if(document.readyState === 'complete'){
            handleWindowResize()
        }

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);
    
    return { width, height, OLD_HEIGHT }
}

export default useViewport