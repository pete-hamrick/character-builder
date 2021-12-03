import { render, screen } from '@testing-library/react'
import CatchPhraseDisplay from './CatchPhraseDisplay'
import React from 'react'

it('ought to display the CatchPhrase component', () => {
  const { container } = render(
    <CatchPhraseDisplay
      catchphrases={['oh yeah', 'beautiful']}
      hatCount={1}
      headCount={1}
      shirtCount={1}
      bottomCount={1}
    />
  )

  expect(container).toMatchSnapshot()
})
