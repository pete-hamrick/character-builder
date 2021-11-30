import React from 'react'

export default function Editor({
  hat,
  onHatChange,
  head,
  onHeadChange,
  shirt,
  onShirtChange,
  bottom,
  onBottomChange,
  newCatchphrase,
  setNewCatchphrase,
  handleClick,
}) {
  return (
    <section>
      <label>
        Hat:
        <select value={hat} onChange={(e) => onHatChange(e.target.value)}></select>
      </label>

      <label>
        Head:
        <select value={head} onChange={(e) => onHeadChange(e.target.value)}></select>
      </label>

      <label>
        Shirt:
        <select value={shirt} onChange={(e) => onShirtChange(e.target.value)}></select>
      </label>

      <label>
        Bottom:
        <select value={bottom} onChange={(e) => onBottomChange(e.target.value)}></select>
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
