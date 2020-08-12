import React, { useState } from 'react';

const Todo = () => {
	const [todo, setTodo] = useState<string>('初期値');
	const [todos, setTodos] = useState<string[]>([]);

	const onSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		e.preventDefault();
		setTodos([...todos, todo]);
		setTodo('');
	};
	return (
		<>
			<h2>Todo</h2>
			<input
				value={todo}
				type="text"
				onChange={(e) => {
					setTodo(e.target.value);
				}}
			/>
			<p>{todo}</p>
			<input
				type="submit"
				onClick={(e) => {
					onSubmit(e);
				}}
			/>

			<ul>
				{todos.map((todo) => {
					return (
						<li>
							<label>
								<input type="checkbox" />
								{todo}
							</label>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Todo;
