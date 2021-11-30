import './App.css'
import { useState } from 'react'

function App() {
  const [hat, setHat] = useState('')
  const [head, setHead] = useState('')
  const [shirt, setShirt] = useState('')
  const [bottom, setBottom] = useState('')
  const [newCatchphrase, setNewCatchphrase] = useState('')
  const [catchphrases, setCatchphrases] = useState([])

  const handleClick = () => {
    setCatchphrases = (prevState) => [...prevState, newCatchphrase]
  }

  return (
    <article className="App">
      <Editor
        hat={hat}
        onHatChange={hat}
        head={head}
        onHeadChange={setHead}
        shirt={shirt}
        onShirtChange={setShirt}
        bottom={bottom}
        onBottomChange={setBottom}
        newCatchphrase={newCatchphrase}
        setNewCatchphrase={setNewCatchphrase}
      />
      <CatchPhraseDisplay catchphrases={catchphrases} />
      <Character hat={hat} head={head} shirt={shirt} bottom={bottom} />
    </article>
  )
}

export default App
