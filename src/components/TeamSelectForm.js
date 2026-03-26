import React, { useState } from 'react';

const TeamSelectForm = ({ teamOptions, applyFilterCallback }) => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [includeRunnerUp, setIncludeRunnerUp] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIncludeRunnerUp(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    applyFilterCallback(selectedTeam, includeRunnerUp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="teamSelect">Select a team:</label>
        <select id="teamSelect" className="form-control" value={selectedTeam} onChange={handleSelectChange}>
          <option value="">All Teams</option>
          {teamOptions.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            id="runnerupCheckbox"
            checked={includeRunnerUp}
            onChange={handleCheckboxChange}
          />
          Include runner-ups
        </label>
      </div>
      <button id="submitButton" type="submit" className="btn btn-primary">
        Apply Filter
      </button>
    </form>
  );
};

export default TeamSelectForm;
