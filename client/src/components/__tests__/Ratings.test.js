import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import ReviewListTile from '../ratings/ReviewListTile';

const axios = 'axios';

jest.mock('axios');

describe('ReviewListTile', () => {
  const testReview = {
    review_id: 1277644,
    rating: 4,
    summary: 'looks great, NOT, go to SUNNY SIDE UP to get some real DRIP',
    recommend: false,
    response: null,
    body: 'random text jake is cool fr, but also chefs it up it the kitchen',
    date: '2022-12-05T00:00:00.000Z',
    reviewer_name: 'james',
    helpfulness: 7,
    photos: [],
  };

  it('should render a review list body', async () => {
    // arrange
    await act(async () => render(<ReviewListTile
      review={testReview}
      postFeedback={() => { console.log('postFeedbaack'); }}
    />));
    // act
    const bodyElement = screen.getByText(/random text jake is cool fr, but also chefs it up it the kitchen/);
    // assert
    expect(bodyElement).toBeInTheDocument();
  });

  it('should render a review list summary', async () => {
    // arrange
    await act(async () => render(<ReviewListTile
      review={testReview}
      postFeedback={() => { console.log('postFeedbaack'); }}
    />));
    // act
    const summaryElement = screen.getByText(/looks great, NOT, go to SUNNY SIDE UP to get some real DRIP/);
    // assert
    expect(summaryElement).toBeInTheDocument();
  });
});
