// https://mswjs.io/docs/getting-started/mocks/rest-api
import { rest } from 'msw';

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get('/products/', (req, res, ctx) =>
  // respond with a mocked JSON body
    (res(ctx.json({
      id: 40344,
      campus: 'hr-rfp',
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140.00',
      created_at: '2021-08-13T14:38:44.509Z',
      updated_at: '2021-08-13T14:38:44.509Z',
    })))),
];