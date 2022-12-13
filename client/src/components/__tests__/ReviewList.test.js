import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewList from '../qAndA/Question';

const axios = 'axios';

jest.mock('axios');

it.skip('should call axios once', () => {
  render(<ReviewList />);
  // const questionElement = screen.getByTestId('question');
  // expect(axios.get).toHaveBeenCalledTimes(1);
  expect(questionElement).toBeInTheDocument();
});
