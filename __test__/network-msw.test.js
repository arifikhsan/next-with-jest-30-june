import {render, screen} from "@testing-library/react";
import NetworkMSW, {getServerSideProps} from "../pages/network-msw";

// memakai config global
describe("Network MSW", () => {
  it('return props', async () => {
    const {props} = await getServerSideProps();
    expect(props.data.name).toEqual('The Octocat');
  })

  it('render correct name', () => {
    render(<NetworkMSW data={{name: 'John Smith'}} />);
    const heading = screen.getByText(/john smith/i)
    expect(heading).toBeInTheDocument()
  })
})
