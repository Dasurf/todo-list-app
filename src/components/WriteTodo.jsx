import React, {useState, useId} from "react";

export default function WriteTodo() {
    
    const [display, setDisplay] = useState(false);
    
    const [input, setInput] = useState({
      textInput: "",
    })


    const id = useId();
    
    function handleChange(event) {
        event.preventDefault();
        
        const {name, value} = event.target;
        
        setInput(prevForm => (
            {
                ...prevForm,
                [name]: value
            }
            ))
            
        }
        
        
    function addTodo(event) {
        event.preventDefault();

        setInput(prevForm => {
            return {
                ...prevForm,
                textInput: input.textInput
            }
        })
        
        setDisplay(true);
    }

    function deleteItem(event) {
        event.preventDefault();

        setDisplay(prev => !prev)
    }

    return (
        <div>
            <section>
                <h2>New Item</h2>
                <form onSubmit={addTodo} >
                    <input
                        className="text--input"
                        id={id + "-text-input"}
                        name="textInput"
                        type="text"
                        placeholder="Enter Todo"
                        onChange={handleChange}
                        value={input.textInput}
                    />
                    <button>Add</button>
                </form>
            </section>

            <h2 className="list--header">To do List</h2>

            {
                input.textInput
                ? 
                <main>
                    <form onSubmit={deleteItem} className={`output ${!display && "del"}`}>
                        <input
                            type="checkbox"
                            name="completed"
                        />
                        <label htmlFor="completed">{input.textInput}</label>
                        <button className="delete--btn">Delete</button>
                    </form>
                </main>
                :
                <h4 className="no--todos">No Todos</h4>
            }
        </div>
        
    )
}