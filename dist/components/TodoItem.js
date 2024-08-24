"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function TodoItem(props) {
    const [modifyTask, setModifyTask] = (0, react_1.useState)(false);
    const [newText, setNewText] = (0, react_1.useState)(props.todo.text);
    function saveState() {
        props.updateTask(props.todo.id, newText);
        setModifyTask(false);
    }
    return ((0, jsx_runtime_1.jsxs)("li", { style: { marginBottom: '10px' }, children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: props.todo.completed, onChange: () => props.toggleComplete(props.todo.id) }), modifyTask ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: newText, onChange: (e) => setNewText(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { onClick: saveState, children: "Save" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setModifyTask(false), children: "Cancel" })] })) : ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { style: {
                            textDecoration: props.todo.completed ? 'line-through' :
                                'none',
                            marginRight: '10px'
                        }, children: props.todo.text }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setModifyTask(true), children: "Edit" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => props.deleteTodo(props.todo.id), children: "Delete" })] }))] }));
}
exports.default = TodoItem;
