import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
//test
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'not-completed'>('all');

  // Created the Add App Function	
  const addTask = () => {
    if (newTodo.trim() === '') return;
    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };
  // Created the Complete App Function	
  const modifyComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  // Created the Delete App Function
  const deleteTask = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  // Created the Filtered App List
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'not-completed') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('not-completed')}>Not Completed</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => modifyComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
