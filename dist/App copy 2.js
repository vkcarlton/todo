"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// src/App.tsx
const react_1 = require("react");
const TodoItem_1 = __importDefault(require("./components/TodoItem"));
require("./App.css");
const App = () => {
    const [todos, setTodos] = (0, react_1.useState)([]);
    const [newTodo, setNewTodo] = (0, react_1.useState)('');
    const [filter, setFilter] = (0, react_1.useState)('all');
    // Add a new todo
    const addTodo = () => {
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
    // Update the text of an existing todo
    const updateTodo = (id, newText) => {
        setTodos(todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { text: newText }) : todo));
    };
    // Delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    // Toggle the completion status
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo));
    };
    // Filter todos based on the current filter
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed')
            return todo.completed;
        if (filter === 'not-completed')
            return !todo.completed;
        return true; // 'all'
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)("h1", { children: "To-Do List" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: newTodo, onChange: (e) => setNewTodo(e.target.value), placeholder: "Type your New Task" }), (0, jsx_runtime_1.jsx)("button", { onClick: addTodo, children: "Add" }), (0, jsx_runtime_1.jsxs)("div", { className: "filters", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setFilter('all'), children: "All" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setFilter('completed'), children: "Completed" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setFilter('not-completed'), children: "Not Completed" })] }), (0, jsx_runtime_1.jsx)("ul", { children: filteredTodos.map(todo => ((0, jsx_runtime_1.jsx)(TodoItem_1.default, { todo: todo, updateTodo: updateTodo, deleteTodo: deleteTodo, toggleComplete: toggleComplete }, todo.id))) })] }));
};
exports.default = App;
