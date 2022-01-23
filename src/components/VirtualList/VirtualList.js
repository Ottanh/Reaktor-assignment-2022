
import { FixedSizeList as List } from 'react-window';
import './VirtualList.css';

const Row = ({ index, style, data }) => {

  const game = data[0][index];
  const player = data[1];

  const date = new Date(game.t);
  let player1;
  let player2;

  // Always display player on the left and opponend on the right side.
  if(game.playerA.name === player){
    player1 = game.playerA;
    player2 = game.playerB;
  } else {
    player2 = game.playerA;
    player1 = game.playerB;
  }

  const backgroundColor = index % 2 === 0 ? 'rgb(180, 165, 165)' : 'rgb(60, 65, 92)';
  return (
    <div style={style}>
      <div className='container' style={{ backgroundColor: backgroundColor }}>
        <div className='flex date'>{date.toISOString()}</div>
        <div className='flex name'>{player1.name}</div>
        <div className='flex hand'>{player1.played}</div>
        <div className='flex hand'>{player2.played}</div>
        <div className='flex name'>{player2.name}</div>
      </div>
    </div>
  );
};

const VirtualList = ({ games, player }) => {
  return (
    <List
      itemCount={games.length}
      itemSize={30}
      width={820}
      height={500}
      itemData={[games, player]}
    >
      {Row}
    </List>

  );
};

export default VirtualList;
