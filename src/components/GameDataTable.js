import React, { useState } from 'react';
import _ from 'lodash';
import GameDataRow from './GameDataRow';
import SortButton from './SortButton';

const GameDataTable = ({ data }) => {
  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(null);

  const handleClick = (event) => {
    const criteria = event.currentTarget.name;
    if (sortByCriteria === criteria) {
      setIsAscending(isAscending === null ? true : !isAscending);
      if (isAscending !== null && !isAscending) {
        setSortByCriteria(null);
        setIsAscending(null);
      }
    } else {
      setSortByCriteria(criteria);
      setIsAscending(true);
    }
  };

  let sortedData = [...data];
  if (sortByCriteria) {
    sortedData = _.sortBy(data, [sortByCriteria]);
    if (!isAscending) {
      sortedData = _.reverse(sortedData);
    }
  }

  const gameRows = sortedData.map((game) => (
    <GameDataRow key={game.year} gameObj={game} />
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <SortButton name="year" active={sortByCriteria === 'year'} ascending={isAscending} onClick={handleClick} />
          </th>
          <th>
            <SortButton name="winner" active={sortByCriteria === 'winner'} ascending={isAscending} onClick={handleClick} />
          </th>
          <th>
            <SortButton name="score" active={sortByCriteria === 'score'} ascending={isAscending} onClick={handleClick} />
          </th>
          <th>
            <SortButton name="runner_up" active={sortByCriteria === 'runner_up'} ascending={isAscending} onClick={handleClick} />
          </th>
        </tr>
      </thead>
      <tbody>
        {gameRows}
      </tbody>
    </table>
  );
};

export default GameDataTable;
