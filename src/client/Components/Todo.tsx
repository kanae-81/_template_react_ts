import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, changeText } from '../Actions/Todo';

const Todo = (value: any) => {
	const [todo, setState] = useState<string>(value.todos.todo);
	const [todos] = useState<string[]>(value.todos.todos);

	const onSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		e.preventDefault();
		addTodo;
	};

	const onChangeText = (e: { target: { value: React.SetStateAction<string>; }; }) => {
		setState(e.target.value);
	}
	return (
		<>
			<h2>Todo</h2>
			<input
				value={todo}
				type="text"
				onChange={(e) => onChangeText(e)}
			/>
			<p>{todo}</p>
			<input
				type="submit"
				onClick={(e) => {
					onSubmit(e);
				}}
			/>

			<ul>
				<li>
					<label>
						<input type="checkbox" />
						{todos}
					</label>
				</li>
				{/* {todos.map((v) => {
					return (
						<li>
							<label>
								<input type="checkbox" />
								{v}
							</label>
						</li>
					);
				})} */}
			</ul>
		</>
	);
};

const mapDispatchProps = { addTodo, changeText };

export default connect(state => state, mapDispatchProps)(Todo);
