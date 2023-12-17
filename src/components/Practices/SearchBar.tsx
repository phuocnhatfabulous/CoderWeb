// SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="relative inline-block">
        <input
          type="text"
          placeholder="Searching..."
          className="w-full rounded-full border border-gray-300 py-0.5 px-5 text-lg font-normal focus:border-brand-orange focus:outline-none"
        />
        <button className="absolute right-0 top-1.5 mt-2 mr-2">
          {/* Magnifying glass icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default SearchBar;
