import { useEffect, useState } from 'react'

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const HEIGHT_BREAKPOINT = 670
    const SET_NEW_HEIGHT = 420
    const SET_NEW_WIDTH = 350

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(SET_NEW_WIDTH - (HEIGHT_BREAKPOINT - window.innerHeight));
            setHeight(SET_NEW_HEIGHT - (HEIGHT_BREAKPOINT - window.innerHeight));
        }

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    
    console.log('test - ', width, height)
    return { width, height, SET_NEW_HEIGHT }
}

export default useViewport