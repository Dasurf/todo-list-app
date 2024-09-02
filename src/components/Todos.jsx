import React, {useState} from "react";

export default function Todos({todos, addTodo}) {
    const [input, setInput] = useState("");

    function handleChange(event) {        
        const {value} = event.target;
        
        setInput(value);
    }
    console.log(input);

    function handleClick(event) 
    {
        event.preventDefault();
        console.log("handleClick called");
        addTodo(prev => {
            return input === "" ? prev : [...prev, input];
        })

        setInput("");
        // console.log(todos);
    }

    function removeTodo(index) {
        addTodo(prev => {
            const newTodos = [...prev];
            newTodos.splice(index, 1);
            
            return newTodos;
        })
    }




    return (
        <div className="main--container">
            <h2>New Item</h2>
            <form className="input--form">
                <input
                    className="text--input"
                    name="textInput"
                    type="text"
                    placeholder="Enter Todo"
                    onChange={handleChange}
                    value={input}
                />
                <button onClick={handleClick}>Add</button>
            </form>
            <h2>Todos</h2>
            {
                todos.length !== 0
                ?
                todos.map((todo, index) => {
                    return (
                        <div key={index} className="output">
                            <input
                                type="checkbox"
                                name="completed"
                            />
                            <label htmlFor="completed">{todo}</label>
                            <button className="delete--btn" onClick={() => {
                                removeTodo(index);
                            }}>Delete</button>
                        </div>
                    )
                })
                :
                <h4 className="no--todos">No Todos</h4>
            }
        </div>
    )
}