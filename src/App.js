import { Fragment, useEffect, useState } from "react";
import Alexdle from "./components/Alexdle";
import Header from "./components/Header";
import useHeader from './hooks/useHeader'

function App() {
  const [solution, setSolution] = useState(null)
  const { isHelpShown, handleHelpClick } = useHeader()

  useEffect(() => {
    fetch('http://192.168.0.122:3001/solutions')
    .then(res => res.json())
    .then(json => {
      // generate random int between min and max id in solution json i.e. json[random]
      const randomSolution = json[Math.floor(Math.random() * json.length)]
      setSolution(randomSolution.word)
    })
  }, [setSolution]) 
  
  return (
    <Fragment>
      <Header handleHelpClick={handleHelpClick} />
      {solution && <Alexdle solution={solution} isHelpShown={isHelpShown} handleHelpClick={handleHelpClick}/>}
    </Fragment>
  );
}

export default App;
