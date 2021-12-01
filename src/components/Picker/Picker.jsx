import React from 'react'
import './Picker.css'

export default function Picker({
  hat,
  onHatChange,
  hatCount,
  updateHatCount,
  head,
  onHeadChange,
  headCount,
  updateHeadCount,
  shirt,
  onShirtChange,
  shirtCount,
  updateShirtCount,
  bottom,
  onBottomChange,
  bottomCount,
  updateBottomCount,
  newCatchphrase,
  setNewCatchphrase,
  handleClick,
}) {
  const hatPics = ['beanie', 'derby', 'fishing', 'trucker']
  const headPics = ['bear', 'fish', 'otter', 'sloth']
  const shirtPics = ['fishing', 'tuxedo']
  const bottomPics = ['kilt', 'yeti']

  const handleHatChange = (value) => {
    onHatChange(value)
    updateHatCount(++hatCount)
  }

  const handleHeadChange = (value) => {
    onHeadChange(value)
    updateHeadCount(++headCount)
  }

  const handleShirtChange = (value) => {
    onShirtChange(value)
    updateShirtCount(++shirtCount)
  }

  const handleBottomChange = (value) => {
    onBottomChange(value)
    updateBottomCount(++bottomCount)
  }

  return (
    <section className="container">
      <label>
        Hat:
        <select value={hat} onChange={(e) => handleHatChange(e.target.value)}>
          {hatPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>

      <label>
        Head:
        <select value={head} onChange={(e) => handleHeadChange(e.target.value)}>
          {headPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>

      <label>
        Shirt:
        <select value={shirt} onChange={(e) => handleShirtChange(e.target.value)}>
          {shirtPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>

      <label>
        Bottom:
        <select value={bottom} onChange={(e) => handleBottomChange(e.target.value)}>
          {bottomPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>

      <label>
        New Catchphrases:
        <input
          type="text"
          value={newCatchphrase}
          onChange={(e) => setNewCatchphrase(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Add Catchphrase
      </button>
    </section>
  )
}
