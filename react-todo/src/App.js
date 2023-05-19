import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage';

function App() {
	const [category, setCategory] = useState('All');
	const { darkMode, updateDarkMode } = useContext(DarkModeContext);

	console.log(darkMode);
	useEffect(() => {
		const darkMode = loadFromLocalStorage('darkMode');
		if (darkMode) updateDarkMode(darkMode);
	}, []);

	useEffect(() => {
		saveToLocalStorage('darkMode', darkMode);
	}, [darkMode]);

	return (
		<div className="App">
			<Header setCategory={setCategory}></Header>
			<Todos category={category}></Todos>
		</div>
	);
}

export default App;
