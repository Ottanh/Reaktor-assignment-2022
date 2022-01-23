import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import Togglable from './Togglable';

/* eslint-env jest */
describe('<Togglable />', () => {
  const data = {
    _id: 'Musta Pekka',
    games: 600,
    wins: 200,
    ROCK: 150,
    PAPER: 150,
    SCISSORS: 300
  };

  test('renders its content', () => {
    render(<Togglable data={data} />);

    const div = screen.getByTestId('content');
    expect(div).toBeDefined();
  });

  test('at start the children are not displayed', () => {
    render(<Togglable data={data} />);

    const div = screen.getByTestId('togglableContent');
    expect(div).toHaveStyle('display: none');
  });

  test('after clicking the button, children are displayed', () => {
    render(<Togglable data={data} />);
    const header = screen.getByTestId('header');
    fireEvent.click(header);

    const div = screen.getByTestId('togglableContent');
    expect(div).not.toHaveStyle('display: none');
  });
});
