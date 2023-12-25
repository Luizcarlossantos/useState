import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("Lucca")
  const [number, setNumber] = useState(0)
  
  const changeNumber = () => {
    setNumber(number + 1)
  }


  return (
    <div>
     <h2>Meu nome é: {name}</h2>
     <input type="text" value={name} onChange={ev => (setName(ev.target.value))} />
     <p>Número: {number}</p>
     <button onClick={changeNumber}>Mudar número</button>
    </div>
  )
}

export default App
