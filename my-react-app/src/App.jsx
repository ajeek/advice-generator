import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [advice, setAdvice] = useState(null)
  const [id, setId] = useState(null)

  const getAdv = async () => {
    const getData = await fetch("https://api.adviceslip.com/advice")
    const data=await getData.json()
    setAdvice(data.slip.advice)
    setId(data.slip.id)

        // .then (response => response.json())
        // .then(data => {
        // })
      
  }
  if (advice) {
    var message = advice
    var idMsg = id 
  }
  else {
    var message = "Click the button to generate a new advice"
      
    var idMsg = "#id"
  }

  return (
    <section className="App">
      <div className="container">
        <h3>Advice&nbsp;{idMsg}</h3>
        <p>"{message}"</p>
        <div className='svg'>
          <img src='/public/images/pattern-divider-desktop.svg' alt='' />
        </div>
        <div className='btn-container'>
          <div onClick={getAdv} className='btn-neon-grn'><span>&nbsp;</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
