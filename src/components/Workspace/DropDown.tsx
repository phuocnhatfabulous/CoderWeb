import React from 'react';

interface LanguageDropdownProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Dropdown: React.FC<LanguageDropdownProps> = ({ selectedLanguage, onLanguageChange }) => {
  const languageOptions = ['JavaScript','C++', 'Python', 'Java']; 

  return (
    <div className='bg-dark-fill-3'>
      <select value={selectedLanguage} onChange={(e) => onLanguageChange(e.target.value)}>
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
