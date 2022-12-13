import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
// import CardImage from '../recommendedItems/CardImage';

let stylesObj = {
  product_id: '40361',
  results: [
    {
      style_id: 240596,
      name: 'Blue',
      original_price: '815.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        },
      ],
      skus: {
        1395285: {
          quantity: 33,
          size: 'XS',
        },
        1395286: {
          quantity: 1,
          size: 'S',
        },
        1395287: {
          quantity: 33,
          size: 'M',
        },
        1395288: {
          quantity: 13,
          size: 'L',
        },
        1395289: {
          quantity: 16,
          size: 'XL',
        },
        1395290: {
          quantity: 18,
          size: 'XXL',
        },
      },
    },
  ],
};

it.skip('should render the product breakdown component', () => {
  render(<CardImage stylesObj={stylesObj} />);

  const image = screen.getByTestId('thumbnail');

  expect(image).toBeInTheDocument();
});
