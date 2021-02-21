import React, { useState } from 'react';

const SearchBar = ({onChange, placeholder}) => {
  return (
    <div className="Search">
      <span className="SearchSpan">
        <i class="fas fa-search"></i>
      </span>
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
