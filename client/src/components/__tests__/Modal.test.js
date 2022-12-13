import { render, screen } from '@testing-library/react';
import React from 'react';
import Modal from '../qAndA/Modal';

test.skip('Renders Modal', () => {
  render(<Modal />);
  const linkElement = screen.getByText(/For authentication/);
  expect(linkElement).toBeInTheDocument();
});
