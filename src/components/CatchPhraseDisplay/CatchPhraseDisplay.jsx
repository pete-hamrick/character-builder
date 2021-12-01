import React from 'react'

export default function CatchPhraseDisplay({
  catchphrases,
  hatCount,
  headCount,
  shirtCount,
  bottomCount,
}) {
  return (
    <section>
      <p>
        You have changed the hat {handleCountPhrasing(hatCount)}, the head{' '}
        {handleCountPhrasing(headCount)}, the shirt {handleCountPhrasing(shirtCount)}, and the
        bottom {handleCountPhrasing(bottomCount)}. Of course, no one can forget your characters
        classic catchphrases:
      </p>
      {catchphrases.map((catchphrase) => (
        <p key={catchphrase}>{catchphrase}</p>
      ))}
    </section>
  )
}

const handleCountPhrasing = (currentCount) => {
  if (currentCount === 1) {
    return currentCount + ' time'
  } else {
    return currentCount + ' times'
  }
}
