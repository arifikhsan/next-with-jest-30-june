import {render, screen, fireEvent} from "@testing-library/react";
import ComponentFunction from "../pages/component-function";

describe('Component Function', () => {
  it('show buttons', () => {
    render(<ComponentFunction />);
    const fillButton = screen.getByRole('button', {name: 'Fill name'});
    const removeButton = screen.getByRole('button', {name: 'Remove name'});
    expect(fillButton).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  })

  it('fill name', () => {
    render(<ComponentFunction />);
    const fillButton = screen.getByRole('button', {name: 'Fill name'});
    fireEvent.click(fillButton);
    const name = screen.getByText(/octocat/i);
    expect(name).toBeInTheDocument();
  })

  it('remove name', () => {
    render(<ComponentFunction />);
    const fillButton = screen.getByRole('button', {name: 'Fill name'});
    fireEvent.click(fillButton);
    const removeButton = screen.getByRole('button', {name: 'Remove name'});
    fireEvent.click(removeButton);
    const name = screen.queryByText(/octocat/i);
    expect(name).not.toBeInTheDocument();
  })
})