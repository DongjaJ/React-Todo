import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from '../styles/Header.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Header({ setCategory }) {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	function handleClick({ target }) {
		setCategory(target.textContent);
	}

	return (
		<div className={`${styles.header} ${darkMode ? styles.dark : ''}`}>
			<span className={styles.icon}>
				<button className={styles.button} onClick={toggleDarkMode}>
					{darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
				</button>
			</span>
			<div className={styles['category-section']}>
				<section onClick={handleClick}>All</section>
				<section onClick={handleClick}>Active</section>
				<section onClick={handleClick}>Completed</section>
			</div>
		</div>
	);
}
