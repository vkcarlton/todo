"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
//test
const App = () => {
    const [todos, setTodos] = (0, react_1.useState)([]);
    const [newTodo, setNewTodo] = (0, react_1.useState)('');
    const [filter, setFilter] = (0, react_1.useState)('all');
    // Created the Add App Function	
    const addTask = () => {
        if (newTodo.trim() === '')
            return;
        const newTask = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, newTask]);
        setNewTodo('');
    };
    // Created the Complete App Function	
    const modifyComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo));
    };
    // Created the Delete App Function
    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    // Created the Filtered App List
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed')
            return todo.completed;
        if (filter === 'not-completed')
            return !todo.completed;
        return true;
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "To-Do List" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: newTodo, onChange: (e) => setNewTodo(e.target.value), placeholder: "Add a new task" }), (0, jsx_runtime_1.jsx)("button", { onClick: addTask, children: "Add" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setFilter('all'), children: "All" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setFilter('completed'), children: "Completed" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setFilter('not-completed'), children: "Not Completed" })] }), (0, jsx_runtime_1.jsx)("ul", { children: filteredTodos.map(todo => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: todo.completed, onChange: () => modifyComplete(todo.id) }), (0, jsx_runtime_1.jsx)("span", { style: { textDecoration: todo.completed ? 'line-through' : 'none' }, children: todo.text }), (0, jsx_runtime_1.jsx)("button", { onClick: () => deleteTask(todo.id), children: "Delete" })] }, todo.id))) })] }));
};
exports.default = App;
