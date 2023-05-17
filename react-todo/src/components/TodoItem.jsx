import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export default function TodoItem({
	content,
	checked,
	deleteContent,
	setCheck,
}) {
	return (
		<li>
			<input
				type="checkbox"
				checked={checked ? 'checked' : ''}
				onChange={() => setCheck(content)}
			/>
			{content}
			<button onClick={() => deleteContent(content)}>
				<BsFillTrashFill />
			</button>
		</li>
	);
}
