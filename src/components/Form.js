import React from "react";

const Form = ({setInputText}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    return ( 
      <form>
        <input onChange={inputTextHandler} type="text" className="todo-input"/>
        <button className="todo-button" type="submit">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
}

export default Form;