import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../styles/TodoItem.module.css';

export default function TodoItem({ deleteContent, setCheck, todo }) {
  const { content, checked } = todo;

  return (
    <li className={styles.todoItem}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={todo.id}
        checked={checked}
        onChange={() => setCheck(todo)}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {content}
      </label>

      <span className={styles.icon}>
        <button className={styles.button} onClick={() => deleteContent(todo)}>
          <BsFillTrashFill />
        </button>
      </span>
    </li>
  );
}
