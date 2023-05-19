import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/Todos.module.css';
import TodoItem from './TodoItem';
import { DarkModeContext } from '../context/DarkModeContext';
import { saveToLocalStorage, loadFromLocalStorage } from '../localStorage';

export default function Todos({ category }) {
	const [todos, setTodos] = useState([]);
	const { darkMode } = useContext(DarkModeContext);
	const [content, setContent] = useState('');

	useEffect(() => {
		const todos = loadFromLocalStorage('todos');
		if (todos) setTodos(todos);
	}, []);

	useEffect(() => {
		saveToLocalStorage('todos', todos);
		console.log('update todos', todos);
	}, [todos]);

	const handleClick = (e) => {
		e.preventDefault();
		if (!content) return;
		setTodos((prev) => [...prev, { content, checked: false }]);
	};
	const handleChange = ({ target }) => {
		const { value } = target;
		setContent(value);
	};

	function deleteContent(content) {
		setTodos((todos) => todos.filter((todo) => todo.content !== content));
	}

	function setCheck(content) {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.content === content
					? { ...todo, checked: !todo.checked }
					: todo
			)
		);
	}

	return (
		<div className={styles.todos}>
			<ul
				className={`${styles['todos-items']} ${
					darkMode ? styles.darkBody : ''
				}`}>
				{todos &&
					todos.map((todo) => {
						return (category === 'Active' && todo.checked) ||
							(category === 'Completed' && !todo.checked) ? (
							''
						) : (
							<TodoItem
								content={todo.content}
								checked={todo.checked}
								setCheck={setCheck}
								deleteContent={deleteContent}></TodoItem>
						);
					})}
			</ul>
			<div
				className={`${styles.footer} ${
					darkMode ? styles.darkFooter : ''
				}`}>
				<input
					name="content"
					placeholder="Add Todo"
					value={content}
					onChange={handleChange}
					className={styles.input}></input>
				<button className={styles['add-button']} onClick={handleClick}>
					Add
				</button>
			</div>
		</div>
	);
}

const initialTodo = [
	{ content: '밥먹기', checked: false },
	{ content: '리액트 공부', checked: true },
];
