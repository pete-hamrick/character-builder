import './App.css'
import { useState } from 'react'

function App() {
  const [hat, setHat] = useState('')
  const [head, setHead] = useState('')
  const [shirt, setShirt] = useState('')
  const [bottom, setBottom] = useState('')

  return (
    <div className="App">
      <Editor
        hat={hat}
        onHatChange={hat}
        head={head}
        onHeadChange={setHead}
        shirt={shirt}
        onShirtChange={setShirt}
        bottom={bottom}
        onBottomChange={setBottom}
      />
      <Character />
      <CatchPhraseDisplay />
    </div>
  )
}

export default App
