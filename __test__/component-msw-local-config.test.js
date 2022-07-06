import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {getServerSideProps} from "../pages/network-msw-local-config";

const server = setupServer(rest.get('https://api.github.com/users/arifikhsan', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: 'Arifikhsan',
    })
  )
}));

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Component MSW Local Config', () => {
  it('return my profile', async () => {
    const {props} = await getServerSideProps()
    expect(props).toEqual({data: {name: 'Arifikhsan'}})
  })
})