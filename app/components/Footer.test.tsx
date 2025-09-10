
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders a footer', () => {
    render(<Footer />)
    const footer= screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })
})
