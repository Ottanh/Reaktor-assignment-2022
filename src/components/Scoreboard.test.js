import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';

const liveGames = [
  {
    type: 'GAME_BEGIN',
    gameId: '1',
    playerA: {
      name: 'Louhi Nieminen'
    },
    playerB: {
      name: 'Ahti Virtanen'
    }
  },
  {
    type: 'GAME_BEGIN',
    gameId: '2',
    playerA: {
      name: 'Aku Ankka'
    },
    playerB: {
      name: 'Peppi Pitkätossu'
    }
  },
  {
    type: 'GAME_RESULT',
    gameId: '3',
    playerA: {
      name: 'Tuomas Puupää',
      played: 'ROCK'
    },
    playerB: {
      name: 'Pinokkio',
      played: 'PAPER'
    }
  }
];

test('renders games in correct order and text content', () => {
  const values = [
    'Louhi NieminenVSAhti Virtanen',
    'Aku AnkkaVSPeppi Pitkätossu',
    'Tuomas PuupääVSPinokkio'
  ];

  render(<Scoreboard liveGames={liveGames} />);
  const renderedGames = screen.getAllByTestId('row');

  renderedGames.forEach((node, index) => {
    expect(node.textContent).toBe(values[index]);
  });
});

test('renders images', () => {
  render(<Scoreboard liveGames={liveGames} />);
  const images = screen.getAllByRole('img');

  expect(images[0]).toHaveAttribute('alt', 'ROCK');
  expect(images[1]).toHaveAttribute('alt', 'PAPER');
});
