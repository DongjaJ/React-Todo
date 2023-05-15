import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from '../styles/Header.module.css';

export default function Header() {
	return (
		<div className={styles.header}>
			<button>
				<BsFillMoonFill />
			</button>
			<div className={styles['category-section']}>
				<section>All</section>
				<section>Active</section>
				<section>Completed</section>
			</div>
		</div>
	);
}
