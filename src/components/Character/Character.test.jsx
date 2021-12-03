import { render, screen } from '@testing-library/react'
import Character from './Character'
import React from 'react'

it('should display the Character component', () => {
  const { container } = render(
    <Character hat="trucker" head="otter" shirt="fishing" bottom="kilt" />
  )

  const selectHatImage = screen.getByLabelText('trucker')
  const selectHeadImage = screen.getByLabelText('otter')
  const selectShirtImage = screen.getByLabelText('fishing')
  const selectBottomImage = screen.getByLabelText('kilt')

  expect(selectHatImage).toBeInTheDocument()
  expect(selectHeadImage).toBeInTheDocument()
  expect(selectShirtImage).toBeInTheDocument()
  expect(selectBottomImage).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
