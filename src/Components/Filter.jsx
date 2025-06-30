import React from "react";

const Filters = ({ currentFilter, setFilter }) => {
  return (
    <div className="filters">
      {['all', 'completed', 'in-progress'].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={currentFilter === type ? "active" : ""}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filters;