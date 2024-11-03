// SearchBox.js
import React, { useRef, useState } from 'react';

function SearchBox({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const searchInputRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchInput);
    }
  };

  // const handleReset = () => {
  //   setSearchInput('');
  //   onSearch('');
  //   searchInputRef.current.focus();
  // };

  return (
    <div className="w-56 relative text-gray-700 dark:text-gray-300">
      <input
        ref={searchInputRef}
        type="text"
        className="form-control w-56 box pl-10 placeholder-theme-13"
        placeholder="جستجو..."
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleSearchKeyDown}
      />
      <i className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0" data-feather="search"></i>
      {/* <button onClick={handleReset}>بازنشانی</button> */}
    </div>
  );
}

export default SearchBox;
