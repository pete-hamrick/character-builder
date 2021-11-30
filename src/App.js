import './App.css'
import React, { useState } from 'react'
import Picker from './components/Picker/Picker'
import CatchPhraseDisplay from './components/CatchPhraseDisplay/CatchPhraseDisplay'
import Character from './components/Character/Character'

function App() {
  const [hat, setHat] = useState('trucker')
  const [head, setHead] = useState('otter')
  const [shirt, setShirt] = useState('fishing')
  const [bottom, setBottom] = useState('kilt')
  const [newCatchphrase, setNewCatchphrase] = useState('')
  const [catchphrases, setCatchphrases] = useState([])

  const handleClick = () => {
    setCatchphrases((prevState) => [...prevState, newCatchphrase])
  }

  return (
    <article className="App">
      <Picker
        hat={hat}
        onHatChange={setHat}
        head={head}
        onHeadChange={setHead}
        shirt={shirt}
        onShirtChange={setShirt}
        bottom={bottom}
        onBottomChange={setBottom}
        newCatchphrase={newCatchphrase}
        setNewCatchphrase={setNewCatchphrase}
        handleClick={handleClick}
      />
      <CatchPhraseDisplay catchphrases={catchphrases} />
      <Character hat={hat} head={head} shirt={shirt} bottom={bottom} />
    </article>
  )
}

export default App
