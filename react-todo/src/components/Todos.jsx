import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/Todos.module.css';
import TodoItem from './TodoItem';
import { DarkModeContext } from '../context/DarkModeContext';
import { saveToLocalStorage, loadFromLocalStorage } from '../localStorage';
import { v4 as uuidv4 } from 'uuid';

export default function Todos({ category }) {
  const [todos, setTodos] = useState(() => loadFromLocalStorage('todos'));
  const { darkMode } = useContext(DarkModeContext);
  const [content, setContent] = useState('');

  useEffect(() => {
    saveToLocalStorage('todos', todos);
  }, [todos]);

  const handleClick = (e) => {
    e.preventDefault();
    const newContent = content.trim();
    console.log(newContent);
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

  function deleteContent(deleted) {
    setTodos((todos) => todos.filter((todo) => todo.id !== deleted.id));
  }

  function setCheck(updated) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === updated.id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (
    <div className={styles.todos}>
      <ul
        className={`${styles['todos-items']} ${
          darkMode ? styles.darkBody : ''
        }`}>
        {todos &&
          todos.map((todo) => {
            return (category === 'Active' && todo.checked) ||
              (category === 'Completed' && !todo.checked) ? (
              ''
            ) : (
              <TodoItem
                setCheck={setCheck}
                key={todo.id}
                todo={todo}
                deleteContent={deleteContent}></TodoItem>
            );
          })}
      </ul>
      <div className={`${styles.footer} ${darkMode ? styles.darkFooter : ''}`}>
        <input
          name="content"
          placeholder="Add Todo"
          value={content}
          onChange={handleChange}
          className={styles.input}></input>
        <button className={styles['add-button']} onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
}

//for dummy
// const initialTodo = [
// 	{ content: '밥먹기', checked: false },
// 	{ content: '리액트 공부', checked: true },
// ];
