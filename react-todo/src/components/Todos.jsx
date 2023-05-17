import React, { useState } from 'react';
import styles from '../styles/Todos.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import TodoItem from './TodoItem';

export default function Todos({ category }) {
	console.log(category);
	const [todos, setTodos] = useState([
		{ content: '밥먹기', checked: false },
		{ content: '리액트 공부', checked: true },
	]);

	const [content, setContent] = useState();

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
			<ul className={styles['todos-items']}>
				{todos.map((todo) => {
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
			<div className={styles.footer}>
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
