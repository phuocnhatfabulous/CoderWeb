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
          <svg
            className="h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l4 4M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
