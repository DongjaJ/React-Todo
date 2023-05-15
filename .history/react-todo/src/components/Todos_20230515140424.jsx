import React from 'react';
import styles from '../styles/Todos.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Todos() {
	return (
		<div className={styles.todos}>
			<ul>
				<li>
					<input type="checkbox" />
					밥먹기
					<BsFillTrashFill />
				</li>
				<li>리액트 공부</li>
			</ul>
		</div>
	);
}
