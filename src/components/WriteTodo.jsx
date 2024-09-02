import React, {useState} from "react";
import Todos from "./Todos";

export default function WriteTodo() {
    const [todos, setTodos] = useState([]);

    return (
        <section>
            {
                <Todos 
                    todos={todos}
                    addTodo={setTodos}
                />
            }
        </section>
    )
}