import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from '../App';

jest.mock('axios');

test.skip('should render App component', async () => {
  const testProduct = {
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
  };
  const productResponse = Promise.resolve(testProduct);

  axios.get.mockResolvedValue(productResponse);

  // arrange
  await act(async () => render(<App />));

  // act
  const appElement = screen.getByTestId('app');
  // assert
  expect(appElement).toBeInTheDocument();
  // expect(axios.get).toHaveBeenCalledTimes(1);
});
