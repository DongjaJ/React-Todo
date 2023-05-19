import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../styles/TodoItem.module.css';

export default function TodoItem({ deleteContent, setCheck, todo }) {
	const { content, checked } = todo;

	return (
		<li className={styles.todoItem}>
			<div>
				<input
					type="checkbox"
					checked={checked}
					onChange={() => setCheck(todo)}
				/>
				{content}
			</div>
			<button onClick={() => deleteContent(todo)}>
				<BsFillTrashFill />
			</button>
		</li>
	);
}
