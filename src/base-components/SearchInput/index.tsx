import React, { useState, useEffect } from "react";
import Lucide from "../Lucide";

interface SearchInputProps {
  onSearch: (searchValue: string) => void; // تابع جستجو
  placeholder?: string; // مقدار پیش‌فرض برای ورودی
  searchType?: "change" | "enter"; // نوع جستجو: change یا enter
  debounceDelay?: number; // زمان تاخیر برای debounce در میلی‌ثانیه
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  placeholder = "جستجو...",
  searchType = "enter",
  debounceDelay = 300, // مقدار پیش‌فرض برای debounce
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (searchType === "change") {
      const handler = setTimeout(() => {
        onSearch(searchValue); // ارسال مقدار نهایی به تابع جستجو
      }, debounceDelay);

      return () => clearTimeout(handler); // پاک کردن تایمر قبلی
    }
  }, [searchValue, searchType, debounceDelay, onSearch]);

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchType === "enter" && e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-auto">
      <div className="relative w-56 text-slate-500">
        <input
          type="text"
          className="w-56 pr-4 !box"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Lucide
          icon="Search"
          className={`absolute inset-y-0 left-0 w-4 h-4 my-auto ml-3 cursor-pointer ${
            searchValue ? "text-slate-700" : "text-slate-500"
          }`}
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchInput;
