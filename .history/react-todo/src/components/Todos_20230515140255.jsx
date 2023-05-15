import React from 'react';
import styles from '../styles/Todos.module.css';

export default function Todos() {
	return (
		<div className={styles.todos}>
			<ul>
				<li>
					<input type="checkbox" />
					밥먹기
				</li>
				<li>리액트 공부</li>
			</ul>
		</div>
	);
}
