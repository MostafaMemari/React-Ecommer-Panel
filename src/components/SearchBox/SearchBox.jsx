import React, { useImperativeHandle, useRef, useState, forwardRef } from 'react';

const SearchBox = forwardRef(({ onSearch }, ref) => {
  const [searchInput, setSearchInput] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchInput);
    }
  };

  useImperativeHandle(ref, () => ({
    clearAndFocusInput() {
      setSearchInput('');
      inputRef.current.focus();
    },
  }));

  return (
    <div className="w-56 relative text-gray-700 dark:text-gray-300">
      <input
        ref={inputRef}
        type="text"
        className="form-control w-56 box pl-10 placeholder-theme-13"
        placeholder="جستجو..."
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleSearchKeyDown}
      />
      <i className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0" data-feather="search"></i>
    </div>
  );
});

export default SearchBox;
