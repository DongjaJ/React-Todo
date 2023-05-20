import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/AddTodo.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function AddTodo({ setTodos }) {
  const { darkMode } = useContext(DarkModeContext);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContent = content.trim();
    if (!newContent) return;
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), content: newContent, checked: false },
    ]);
    setContent('');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setContent(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.footer} ${darkMode ? styles.darkFooter : ''}`}>
      <input
        name="content"
        placeholder="Add Todo"
        value={content}
        onChange={handleChange}
        className={styles.input}></input>
      <button className={styles['add-button']}>Add</button>
    </form>
  );
}
