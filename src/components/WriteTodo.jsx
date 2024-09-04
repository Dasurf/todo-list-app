import React, {useState, useEffect} from "react";
import Todos from "./Todos";

export default function WriteTodo() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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