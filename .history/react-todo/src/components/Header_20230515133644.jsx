import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons';

export default function Header() {
	return (
		<div className="header">
			<button></button>
			<div className="category-section">
				<section>All</section>
				<section>Active</section>
				<section>Completed</section>
			</div>
		</div>
	);
}