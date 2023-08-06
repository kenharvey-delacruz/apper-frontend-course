import React from "react";
import "./FilterList.css"; // Import the CSS file

const FilterList = ({ filterOptions, selectedFilter, onFilterChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="filterDropdown">Filter by Year:</label>
      <select
        id="filterDropdown"
        value={selectedFilter}
        onChange={onFilterChange}
      >
        <option value="">All Years</option>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterList;
