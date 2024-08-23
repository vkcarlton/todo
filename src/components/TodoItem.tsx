import React, { useState } from 'react';

function TodoItem(props) {

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