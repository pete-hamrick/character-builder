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
  const [hatCount, setHatCount] = useState(0)
  const [headCount, setHeadCount] = useState(0)
  const [shirtCount, setShirtCount] = useState(0)
  const [bottomCount, setBottomCount] = useState(0)

  const handleClick = () => {
    setCatchphrases((prevState) => [...prevState, newCatchphrase])
  }

  return (
    <article className="App">
      <section className="left">
        <Picker
          hat={hat}
          onHatChange={setHat}
          hatCount={hatCount}
          updateHatCount={setHatCount}
          head={head}
          onHeadChange={setHead}
          headCount={headCount}
          updateHeadCount={setHeadCount}
          shirt={shirt}
          onShirtChange={setShirt}
          shirtCount={shirtCount}
          updateShirtCount={setShirtCount}
          bottom={bottom}
          onBottomChange={setBottom}
          bottomCount={bottomCount}
          updateBottomCount={setBottomCount}
          newCatchphrase={newCatchphrase}
          setNewCatchphrase={setNewCatchphrase}
          handleClick={handleClick}
        />
        <CatchPhraseDisplay
          catchphrases={catchphrases}
          hatCount={hatCount}
          headCount={headCount}
          shirtCount={shirtCount}
          bottomCount={bottomCount}
        />
      </section>

      <section className="right">
        <Character hat={hat} head={head} shirt={shirt} bottom={bottom} />
      </section>
    </article>
  )
}

export default App
