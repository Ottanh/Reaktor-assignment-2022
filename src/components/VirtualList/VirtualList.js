
import { FixedSizeList as List } from 'react-window';
import './VirtualList.css';

const Row = ({ index, style, data }) => {
  const date = new Date(data[index].t);
  const playerA = data[index].playerA;
  const playerB = data[index].playerB;

  const backgroundColor = index % 2 === 0 ? 'rgb(180, 165, 165)' : 'rgb(60, 65, 92)';
  return (
    <div style={style}>
      <div className='container' style={{ backgroundColor: backgroundColor }}>
        <div className='flex date'>{date.toISOString()}</div>
        <div className='flex name'>{playerA.name}</div>
        <div className='flex hand'>{playerA.played}</div>
        <div className='flex hand'>{playerB.played}</div>
        <div className='flex name'>{playerB.name}</div>
      </div>
    </div>
  );
};

const VirtualList = ({ games }) => {
  return (
    <List
      itemCount={games.length}
      itemSize={30}
      width={820}
      height={500}
      itemData={games}
    >
      {Row}
    </List>

  );
};

export default VirtualList;
