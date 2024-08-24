import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the props for the TodoItem component
interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  updateTask: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}


const TodoItem: React.FC<TodoItemProps> = (props) => {

  const [modifyTask, setModifyTask] = useState(false);

  const [newText, setNewText] = useState(props.todo.text);

  function saveState() {
    props.updateTask(props.todo.id, newText);
    setModifyTask(false);
  }

  return (
    <li style={{ marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.toggleComplete(props.todo.id)}
      />

      {modifyTask ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={saveState}>Save</button>
          <button onClick={() => setModifyTask(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span
            style={{
              textDecoration: props.todo.completed ? 'line-through' : 
'none',
              marginRight: '10px'
            }}
          >
            {props.todo.text}
          </span>
          <button onClick={() => setModifyTask(true)}>Edit</button>
          <button onClick={() => 
props.deleteTodo(props.todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;