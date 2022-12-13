import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import ReviewListTile from '../ratings/ReviewListTile';

const axios = 'axios';

jest.mock('axios');

describe('ReviewListTile', () => {
  const testReview = {
    review_id: 1275813,
    rating: 5,
    summary: 'wow',
    recommend: false,
    response: null,
    body: 'woooooooooooooooooooooooooooooooooooooooooooooooooowww',
    date: '2022-07-21T00:00:00.000Z',
    reviewer_name: 'wow',
    helpfulness: 12,
    photos: [],
  };

  beforeAll(async () => {
    await act(async () => render(<ReviewListTile
      review={testReview}
      postFeedback={() => { console.log('postFeedbaack'); }}
    />));
  });

  it('should render a review list tile', async () => {
    // arrange

    // act
    const reviewListElement = screen.getByText(/woooooooooooooooooooooooooooooooooooooooooooooooooowww/);
    // assert
    expect(reviewListElement).toBeInTheDocument();
  });
});
