import { render, screen } from '@testing-library/react'
import Picker from './Picker.jsx'
import React from 'react'

it('should display the Picker component', () => {
  const { container } = render(<Picker />)

  const selectHat = screen.getByLabelText(/Hat:/)
  const selectHead = screen.getByLabelText(/Head:/)
  const selectShirt = screen.getByLabelText(/Shirt:/)
  const selectBottom = screen.getByLabelText(/Bottom:/)
  const input = screen.getByLabelText(/New Catchphrases:/)

  expect(selectHat).toBeInTheDocument()
  expect(selectHead).toBeInTheDocument()
  expect(selectShirt).toBeInTheDocument()
  expect(selectBottom).toBeInTheDocument()
  expect(input).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
