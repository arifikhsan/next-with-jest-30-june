import Network, {getServerSideProps} from "../pages/network";
import axios from "axios";
import {render, screen} from "@testing-library/react";

const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

describe("Network", () => {
  it('return props', async () => {
    mock.onGet("https://api.github.com/users/octocat").reply(
      200,
      {name: "John Smith"},
    );

    const {props} = await getServerSideProps({});
    expect(props.data.name).toEqual('John Smith');
  })

  it('render correct name', () => {
    render(<Network data={{name: 'John Smith'}} />);
    const heading = screen.getByText(/john smith/i)
    expect(heading).toBeInTheDocument()
  })
})
