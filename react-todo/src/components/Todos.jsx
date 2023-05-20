import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/Todos.module.css';
import TodoItem from './TodoItem';
import { DarkModeContext } from '../context/DarkModeContext';
import { saveToLocalStorage, loadFromLocalStorage } from '../localStorage';

import AddTodo from './AddTodo';

export default function Todos({ category }) {
  const [todos, setTodos] = useState(() => loadFromLocalStorage('todos'));
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    saveToLocalStorage('todos', todos);
  }, [todos]);

  function handleDelete(deleted) {
    setTodos((todos) => todos.filter((todo) => todo.id !== deleted.id));
  }

  function handleUpdate(updated) {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  }

  function getFiltered(category) {
    if (category === 'All') return todos;

    return todos.filter(
      (todo) =>
        (category === 'Active' && !todo.checked) ||
        (category === 'Completed' && todo.checked)
    );
  }

  const filtered = getFiltered(category);

  return (
    <div className={styles.todos}>
      <ul
        className={`${styles['todos-items']} ${
          darkMode ? styles.darkBody : ''
        }`}>
        {filtered &&
          filtered.map((item) => {
            return (
              <TodoItem
                handleUpdate={handleUpdate}
                key={item.id}
                todo={item}
                handleDelete={handleDelete}
              />
            );
          })}
      </ul>
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

//for dummy
// const initialTodo = [
// 	{ content: '밥먹기', checked: false },
// 	{ content: '리액트 공부', checked: true },
// ];
