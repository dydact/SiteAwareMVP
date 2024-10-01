import React from 'react';

const FilterSelector = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="all">All</option>
      <option value="client">By Client</option>
      <option value="service">By Service</option>
    </select>
  );
};

export default FilterSelector;