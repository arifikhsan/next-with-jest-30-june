import NetworkError, {getServerSideProps} from "../pages/network-error";
import axios from "axios";
import {render, screen} from "@testing-library/react";

const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

describe("Network Error", () => {
  it('return props', async () => {
    mock.onGet("https://api.github.com/users/octocat").reply(
      200,
      {name: "John Smith"},
    );

    const {props} = await getServerSideProps({});
    expect(props.data.name).toEqual('John Smith');
  })

  it('throw error', async () => {
    mock.onGet("https://api.github.com/users/octocat").networkError();
    // const apa = jest.spyOn(NetworkError.prototype, "apa");
    // const showErrorToastSpy = jest.spyOn(NetworkError.prototype, "showErrorToast");
    // const showErrorToast = jest.fn();
    // jest.mock('showErrorToast');
    // const showErrorToast = jest.fn(() => {});
    // const coba = jest.spyOn(aaa, 'showErrorToast')
    const consoleSpy = jest.spyOn(console, 'log');

    const response = await getServerSideProps({});
    console.log(response);

    expect(consoleSpy).toHaveBeenCalled();
    // expect(consoleSpy).toHaveBeenCalledTimes(1);
    // expect(consoleSpy).toHaveBeenCalledWith('called with Network Error');
  })

  it('render correct name', () => {
    render(<NetworkError data={{name: 'John Smith'}} />);
    const heading = screen.getByText(/john smith/i)
    expect(heading).toBeInTheDocument()
  })
})
