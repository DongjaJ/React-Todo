import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from '../styles/Header.module.css';

export default function Header({ setCategory }) {
	function handleClick({ target }) {
		setCategory(target.textContent);
	}

	return (
		<div className={styles.header}>
			<button>
				<BsFillMoonFill />
			</button>
			<div className={styles['category-section']}>
				<section onClick={handleClick}>All</section>
				<section onClick={handleClick}>Active</section>
				<section onClick={handleClick}>Completed</section>
			</div>
		</div>
	);
}
