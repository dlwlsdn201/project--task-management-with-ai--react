import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../../src/components/Counter.tsx';

test('renders counter with initial count of 0', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');
  expect(countElement).toHaveTextContent('Count: 0');
});

test('increments count when increment button is clicked', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');
  const incrementButton = getByTestId('increment-btn');

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('Count: 1');
});

test('decrements count when decrement button is clicked', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');
  const decrementButton = getByTestId('decrement-btn');

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('Count: -1');
});
