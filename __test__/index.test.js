// noinspection JSCheckFunctionSignatures

import { render, screen } from '@testing-library/react'
import Home, {getServerSideProps} from "../pages";

describe('Home', () => {
  it('return props', () => {
    const props = getServerSideProps({});
    expect(props).toEqual({ props: { name: 'Next.js' } });
  })

  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByText(/welcome to next\.js!/i)
    expect(heading).toBeInTheDocument()
  })
})
