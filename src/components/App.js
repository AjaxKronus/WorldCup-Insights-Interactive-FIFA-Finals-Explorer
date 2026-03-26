import React, { useState } from 'react';
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';
import gameData from '../data/fifa-matches-2018.json';

const App = () => {
  const [filterCriteria, setFilterCriteria] = useState({ team: '', includeRunnersUp: false });

  const applyFilter = (team, includeRunnersUp) => {
    setFilterCriteria({ team, includeRunnersUp });
  };

  const filteredData = gameData.filter(game => {
    if (!filterCriteria.team) return true;
    if (game.winner === filterCriteria.team) return true;
    if (filterCriteria.includeRunnersUp && game.runner_up === filterCriteria.team) return true;
    return false;
  });

  const teamOptions = Array.from(new Set(gameData.flatMap(game => [game.winner, game.runner_up])));

  return (
    <div>
      <TeamSelectForm teamOptions={teamOptions} applyFilterCallback={applyFilter} />
      <GameDataTable data={filteredData} />
    </div>
  );
};

export default App;
