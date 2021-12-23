import React from "react";

const Todo = ({text, todo, setTodos, todos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const completeHandler = () => {
        
    }
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClikc={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;