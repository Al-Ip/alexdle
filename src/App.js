import { useEffect, useState } from "react";
import Alexdle from "./components/Alexdle";


function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      // generate random int between min and max id in solution json i.e. json[random]
      const randomSolution = json[Math.floor(Math.random() * json.length)]
      setSolution(randomSolution.word)
    })
  }, [setSolution]) 
  
  return (
    <div className='App'>
      <h1>Alexdle</h1>
      {solution && <Alexdle solution={solution}/>}
    </div>
  );
}

export default App;
