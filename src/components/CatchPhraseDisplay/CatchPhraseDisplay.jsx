import React from 'react'

export default function CatchPhraseDisplay({ catchphrases }) {
  return (
    <section>
      {catchphrases.map((catchphrase) => (
        <p key={catchphrase}>{catchphrase}</p>
      ))}
    </section>
  )
}
