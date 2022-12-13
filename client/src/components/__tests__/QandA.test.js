import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Answer from '../qAndA/Answer';
// import '@testing-library/jest-dom';

const mockData = {
  answer_id: 5989576,
  body: 'Honk',
  date: '2022-12-08T00:00:00.000Z',
  answerer_name: 'sweatheart',
  helpfulness: 16,
  photos: [{ id: 5341255, url: 'https://res.cloudinary.com/drf3dli0i/image/upload/v1658014788/ah70n3cqdqfevoz9ti59.png' }, { id: 5341739, url: 'https://thumbs.dreamstime.com/b/chino-pants-24575402.jpg' }, { id: 5342721, url: 'http://res.cloudinary.com/dndzjobxr/image/upload/v1666994549/kbcuxiclgxludjb6nuip.jpg' }],
};

describe('Tests for Answer Component', () => {
  test('both buttons render', async () => {
    await act(async () => render(<Answer answer={mockData} />));
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(2);
  });

  test('Answer should render', async () => {
    await act(async () => render(<Answer answer={mockData} />));
    const answerBody = screen.getByText(/Honk/);
    expect(answerBody).toBeInTheDocument();
  });

  test('Answer should have a username', async () => {
    await act(async () => render(<Answer answer={mockData} />));
    const answerUsername = screen.getByText(/sweatheart/);
    expect(answerUsername).toBeInTheDocument();
  });

  test('Answer should have three pictures', async () => {
    await act(async () => render(<Answer answer={mockData} />));
    const imgMap = screen.getAllByRole('img');
    expect(imgMap.length).toBe(3);
  });
});
