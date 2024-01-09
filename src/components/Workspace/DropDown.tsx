import React from 'react';

interface LanguageDropdownProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Dropdown: React.FC<LanguageDropdownProps> = ({ selectedLanguage, onLanguageChange }) => {
  const languageOptions = ['JavaScript','C++', 'Python', 'Java']; 

  const handleLanguageChange = (language: string) => {
    // Update syntax here based on the selected language
    switch (language) {
      case 'JavaScript':
        // Set JavaScript syntax
        break;
      case 'C++':
        // Set C++ syntax
        break;
      case 'Python':
        // Set Python syntax
        break;
      case 'Java':
        // Set Java syntax
        break;
      default:
        // Set a default syntax
    }

    // Call the parent component's onLanguageChange
    //onLanguageChange(language);
  };

  return (
    <div className='bg-dark-fill-3'>
      <select className='select-none inline-flex w-full justify-center gap-x-1 rounded-md bg-dark-fill-3 px-2 py-1.5 text-sm font-semibold text-dark-label-2 shadow-sm hover:bg-dark-gray-6' value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
