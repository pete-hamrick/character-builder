import React from 'react'

export default function Editor() {
  return (
    <section>
      <label>
        Hat:
        <select value={hat} onChange={(e) => onChange(e.target.value)}></select>
      </label>
    </section>
  )
}
