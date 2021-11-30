import React from 'react'

export default function Picker({
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
  const hatPics = ['beanie', 'derby', 'fishing', 'trucker']
  const headPics = ['bear', 'fish', 'otter', 'sloth']
  const shirtPics = ['fishing', 'tuxedo']
  const bottomPics = ['kilt', 'yeti']

  return (
    <section>
      <label>
        Hat:
        <select value={hat} onChange={(e) => onHatChange(e.target.value)}>
          {hatPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>

      <label>
        Head:
        <select value={head} onChange={(e) => onHeadChange(e.target.value)}>
          {headPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>

      <label>
        Shirt:
        <select value={shirt} onChange={(e) => onShirtChange(e.target.value)}>
          {shirtPics.map((pic) => (
            <option key={pic}>{pic}</option>
          ))}
        </select>
      </label>

      <label>
        Bottom:
        <select value={bottom} onChange={(e) => onBottomChange(e.target.value)}>
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
