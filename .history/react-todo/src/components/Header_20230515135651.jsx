import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/Bs';
import stlyes from '../styles/Header.module.css';

export default function Header() {
	return (
		<div className={stlyes.header}>
			<button>
				<BsFillMoonFill />?
			</button>
			<div className={stlyes['category-section']}>
				<section>All</section>
				<section>Active</section>
				<section>Completed</section>
			</div>
		</div>
	);
}
