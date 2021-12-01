import { render, screen } from '@testing-library/react'
import CatchPhraseDisplay from './CatchPhraseDisplay'

it('ought to display the CatchPhrase component', () => {
  const { container } = render(
    <CatchPhraseDisplay
      catchphrases={['daybowbow', 'oh yeah', 'beautiful']}
      hatCount={3}
      headCount={2}
      shirtCount={2}
      bottomCount={1}
    />
  )
})
