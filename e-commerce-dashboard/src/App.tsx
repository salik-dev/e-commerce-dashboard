import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Todos from './intPrepare/int';
import UserProfile from './intPrepare/userProfile';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<string>('false');

  const handleDarkMode = () => {
    setIsDarkMode('true');
  };
  const handleOriginalMode = () => {
    setIsDarkMode('false');
  }

  useEffect(() => {
    const saveMode = localStorage.getItem("darkMode");
    if (saveMode==='true') {
      setIsDarkMode(saveMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode==='true' ? 'dark-mode' : 'light-mode'}`}>
      {isDarkMode != 'true' ? <button onClick={handleDarkMode}>
        <b>Dark Mode</b>
      </button> : <button onClick={handleOriginalMode}>
        <b>Original Mode</b>
      </button>}
      <section>
        <NavBar />
        <Todos />
        <UserProfile />
      </section>
    </div>
  );
};

export default App;
