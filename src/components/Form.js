import React from "react";

const Form = ({setInputText, InputText, setTodos, todos}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            text: InputText, 
            completed: false, 
            id: Math.random() * 1000
        }]);
        setInputText("");
    }
    return ( 
      <form>
        <input value={InputText} onChange={inputTextHandler} type="text" className="todo-input"/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
}

export default Form;