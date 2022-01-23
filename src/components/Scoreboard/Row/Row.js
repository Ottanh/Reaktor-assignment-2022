
import './Row.css';
import rock from '../../images/rock.png';
import scissors from '../../images/scissors.png';
import paper from '../../images/paper.png';

const Row = ({ playerA, playerB, altRow }) => {
  return (
    <tr className={altRow ? 'row' : 'altRow'} data-testid='row'>
      <th data-testid='nameA'>{playerA.name}</th>
      <th>
        {playerA.played === 'ROCK' &&
          <img src={rock} alt='ROCK' width={45} />}
        {playerA.played === 'SCISSORS' &&
          <img src={scissors} alt='SCISSORS' width={45} />}
        {playerA.played === 'PAPER' &&
          <img src={paper} alt='PAPER' width={45} />}
      </th>
      <th>VS</th>
      <th>
        {playerB.played === 'ROCK' &&
          <img src={rock} alt='ROCK' width={45} />}
        {playerB.played === 'SCISSORS' &&
          <img src={scissors} alt='SCISSORS' width={45} />}
        {playerB.played === 'PAPER' &&
          <img src={paper} alt='PAPER' width={45} />}
      </th>
      <th>{playerB.name}</th>
    </tr>
  );
};

export default Row;
