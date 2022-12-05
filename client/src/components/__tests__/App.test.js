import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
const axios = 'axios';

jest.mock('axios');

// // first we will use setupServer to mock an API request
// const server = setupServer(
//   // capture GET /reviews/ requests
//   rest.get('/products/', (req, res, ctx) =>
//     // respond with a mocked JSON body
//     (res(ctx.json({
//       id: 40344,
//       campus: 'hr-rfp',
//       name: 'Camo Onesie',
//       slogan: 'Blend in to your crowd',
//       description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
//       category: 'Jackets',
//       default_price: '140.00',
//       created_at: '2021-08-13T14:38:44.509Z',
//       updated_at: '2021-08-13T14:38:44.509Z',
//     })))),
// );

// // establish API mocking before all tests
// beforeAll(() => server.listen());
// // reset any request handlers that are declared as a part of our tests
// // (i.e. for testing one-time error scenarios)
// afterEach(() => server.resetHandlers());
// // clean up once the tests are done
// afterAll(() => server.close());

// we want to follow the format of: Arrange, Act, Assert
// Arrange: render elements needed for test to DOM
// Act: simulate user events
// Assert: run assertions

test('should render App component', async () => {
  // renders a react element into the DOM
  jest.spyOn(axios, 'get').mockResolvedValueOnce({
    data: [
      {
        id: 40344,
        campus: 'hr-rfp',
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140.00',
        created_at: '2021-08-13T14:38:44.509Z',
        updated_at: '2021-08-13T14:38:44.509Z',
      },
    ],
  });
  // arrange
  render(<App />);
  // act
  const appElement = await screen.getByTestId('app');
  // assert
  // expect(appElement).toBeInTheDocument();
  expect(axios.get).toHaveBeenCalledTimes(1);
});
