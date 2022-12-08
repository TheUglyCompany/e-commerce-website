import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductBreakdown from '../ratings/ProductBreakdown';

it('should render the product breakdown component', () => {
  render(<ProductBreakdown metaData={
    {
      product_id: '40344',
      ratings: {
        1: '94',
        2: '128',
        3: '278',
        4: '205',
        5: '472',
      },
      recommended: {
        false: '317',
        true: '860',
      },
      characteristics: {
        Fit: {
          id: 135219,
          value: '3.2517780938833570',
        },
        Length: {
          id: 135220,
          value: '3.2752562225475842',
        },
        Comfort: {
          id: 135221,
          value: '3.2306477093206951',
        },
        Quality: {
          id: 135222,
          value: '3.2211981566820276',
        },
      },
    }
  }
  />);

  const productBreakdownElement = screen.getByTestId('test');

  expect(productBreakdownElement).toBeInTheDocument();
});
