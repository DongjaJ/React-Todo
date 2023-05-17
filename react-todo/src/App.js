import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import React, { useState } from 'react';

function App() {
	const [category, setCategory] = useState('All');
	return (
		<div className="App">
			<Header setCategory={setCategory}></Header>
			<Todos category={category}></Todos>
		</div>
	);
}

export default App;
