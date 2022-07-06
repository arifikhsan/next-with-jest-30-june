// noinspection SpellCheckingInspection

import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.github.com/users/octocat', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'The Octocat',
      })
    )
  })
]
