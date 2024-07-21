import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className='btn btn-primary position-absolute top-5 start-0'>
      {i18n.language === 'en' ? '切换到中文' : 'Switch to English'}
    </button>
  );
}

export default LanguageSwitcher;
