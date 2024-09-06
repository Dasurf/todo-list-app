import React, {useState} from "react";
import delete_btn from "../assets/delete_btn.svg"

export default function Todos({todos, addTodo}) {
	const [input, setInput] = useState("");


	function handleChange(event) {        
		const {value} = event.target;

		setInput(value);
	}
	console.log(input);

	function handleClick(event) {
	
		event.preventDefault();
		console.log("handleClick called");

		addTodo(prev => {
			if (input === "") {
				return [...prev]
			}
			else {
				return [
				...prev,
				{
					id: crypto.randomUUID(),
					title: input,
					completed: false
				}
			]
			} 
		})

		setInput("");
		// console.log(todos);
	}

	function toggleTodo(id, completed) {
		addTodo(prev => {
			return prev.map(todo => {
				if (todo.id === id) {
				   return {...todo, completed};
				} 
				
				return todo;
			})
		})
	}


	function removeTodo(index) {
		addTodo(prev => {
			const newTodos = [...prev];
			newTodos.splice(index, 1);
			
			return newTodos;
		})
	}

	function deleteCompletedTodos() {
		addTodo(prev => {
			const newTodos = [...prev];
			const remainingTodos = newTodos.filter(todo => !todo.completed);
			
			return remainingTodos;
		});
	}

	function deleteAllTodos() {
		let newTodos;
		addTodo(prev => {
			newTodos = [...prev];
			return newTodos = [];
		});
	}
	
	return (
		<div className="main--container">
			<h2>New Item</h2>
			<form className="input--form">
				<input
					id="item"
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
			<div className={`del--completed--btn ${todos.length > 0 && "show--btn"}`} onClick={deleteCompletedTodos}>
				Delete completed todos
			</div>
			<div className={`del--all--btn ${todos.length > 0 && "show--btn"}`} onClick={deleteAllTodos}>
				Delete all
			</div>

			{
				todos.length !== 0
				?
				todos.map((todo, index) => {
					return (
						<div key={todo.id} className="output">
							<input
								type="checkbox"
								name="completed"
								onChange={(e) => toggleTodo(todo.id, e.target.checked)}
								checked={todo.completed}
							/>
							<label htmlFor="completed">{todo.title}</label>
							<img src={delete_btn} className="delete--btn" onClick={() => {
								removeTodo(index);
							}}/>
						</div>
					)
				})
				:
				<h4 className="no--todos">No Todos</h4>
			}
		</div>
	)
}