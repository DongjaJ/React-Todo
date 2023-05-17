import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import React, { useContext, useState } from 'react';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

function App() {
	const [category, setCategory] = useState('All');
	return (
		<DarkModeProvider>
			<div className="App">
				<Header setCategory={setCategory}></Header>
				<Todos category={category}></Todos>
			</div>
		</DarkModeProvider>
	);
}

export default App;
