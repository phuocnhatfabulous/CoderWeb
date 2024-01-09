// TagDropdown.js
import React, { useState } from 'react';

const CategoryDropdown = ({ defaultValue }: { defaultValue: String }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const availableTags = ['Array', 'String', 'Matrix'];

  const toggleTag = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div className="flex items-center justify-center">
        <span className="rounded-full items-center shadow-sm">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-orange active:bg-gray-50 active:text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedTags.length === 0 ? `${defaultValue}` : selectedTags.join(', ')}
            {/* Heroicon name: solid/chevron-down */}
            <svg
              className="relative -mr-1 ml-2 inline-block h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 15"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v10a1 1 0 01-1.707.707l-7-7a1 1 0 010-1.414l7-7A1 1 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`flex w-full items-center px-4 py-2 text-sm leading-5 ${selectedTags.includes(tag)
                  ? 'bg-brand-orange text-white focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-brand-orange'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 active:bg-gray-200'
                  }`}
              >
                {selectedTags.includes(tag) && (
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
