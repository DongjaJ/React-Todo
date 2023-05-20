import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../styles/TodoItem.module.css';

export default function TodoItem({ handleDelete, handleUpdate, todo }) {
  const { content, checked } = todo;

  function toggleCheck(item) {
    const updated = { ...item, checked: !item.checked };
    handleUpdate(updated);
  }

  return (
    <li className={styles.todoItem}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={todo.id}
        checked={checked}
        onChange={() => toggleCheck(todo)}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {content}
      </label>

      <span className={styles.icon}>
        <button className={styles.button} onClick={() => handleDelete(todo)}>
          <BsFillTrashFill />
        </button>
      </span>
    </li>
  );
}
