import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../styles/TodoItem.module.css';

export default function TodoItem({
	content,
	checked,
	deleteContent,
	setCheck,
}) {
	return (
		<li className={styles.todoItem}>
			<div>
				<input
					type="checkbox"
					checked={checked ? 'checked' : ''}
					onChange={() => setCheck(content)}
				/>
				{content}
			</div>
			<button onClick={() => deleteContent(content)}>
				<BsFillTrashFill />
			</button>
		</li>
	);
}
