import React, { useState } from 'react';
import { connect } from 'react-redux';
import { test } from '../Actions/Todo';

const Todo = (props: any) => {
	// const [todo, setTodo] = useState<string>(props.todo);
	// const [todos, setTodos] = useState<string[]>(props.todos);

	// const onSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
	// 	e.preventDefault();
	// 	setTodos([...todos, todo]);
	// };

	// const onChangeText = (e: {
	// 	target: { value: React.SetStateAction<string> };
	// }) => {
	// 	setTodo(e.target.value);
	// };

	return (
		<>
			<h2>Todo</h2>
			{/* <input value={todo} type="text" onChange={(e) => onChangeText(e)} />
			<p>{todo}</p> */}
			<input type="submit" onClick={props.test} />

			{/* <ul>
				<li>
					<label>
						<input type="checkbox" />
						{todos}
					</label>
				</li>
				{todos.map((v) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<li>
							<label>
								<input type="checkbox" />
								{v}
							</label>
						</li>
					);
				})}
			</ul> */}
		</>
	);
};

// これがアクションクリエーター？
const mapStateToProps = (state: any) => ({ value: state.todos.value });
const mapDispatchProps = { test };

export default connect(mapStateToProps, mapDispatchProps)(Todo);
