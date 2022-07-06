import {render, screen, fireEvent} from "@testing-library/react";
import ComponentFunction from "../pages/component-function";
import ComponentInitialRender from "../pages/component-initial-render";

describe('Component Initial Render', () => {
  it('has name', () => {
    render(<ComponentInitialRender />);
    const name = screen.getByText(/octocat/i);
    expect(name).toBeInTheDocument();
  })
})