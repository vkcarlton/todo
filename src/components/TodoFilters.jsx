import React from 'react';

function TodoFilters({ filter, setFilter }) {
  return (
   <div>
     <button onClick={() => setFilter('all')} disabled={filter === 
'all'}>
        All
    </button>
    <button onClick={() => setFilter('completed')} disabled={filter === 
'completed'}>
        Complete
    </button>
    <button onClick={() => setFilter('notCompleted')} disabled={filter 
=== 'notCompleted'}>
        Not Complete
    </button>
    </div>
  );
}

export default TodoFilters;

