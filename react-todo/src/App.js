import Header from './components/Header';
import Todos from './components/Todos';
import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

function App() {
  const [category, setCategory] = useState('All');
  const { darkMode, updateDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const darkMode = loadFromLocalStorage('darkMode');
    if (darkMode) updateDarkMode(darkMode);
  }, []);
  useEffect(() => {
    saveToLocalStorage('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      <Header setCategory={setCategory}></Header>
      <Todos category={category}></Todos>
    </>
  );
}

export default App;
