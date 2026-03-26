import React from 'react';

const GameDataRow = ({ gameObj }) => {
  return (
    <tr>
      <td>{gameObj.year}</td>
      <td>{gameObj.winner} {gameObj.winner_flag}</td>
      <td>{gameObj.score}</td>
      <td>{gameObj.runner_up} {gameObj.runner_up_flag}</td>
    </tr>
  );
};

export default GameDataRow;
