import React from 'react';

const SortButton = ({ name, active, ascending, onClick }) => {
  const className = `btn ${active ? 'active' : ''} ${active && !ascending ? 'flip' : ''}`;
  return (
    <button name={name} className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default SortButton;
