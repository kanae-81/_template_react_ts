import React from 'react';
import { connect } from 'react-redux';
import { addTodo, changeText } from '../Actions/Todo';

const Todo = (props: any) => {
	const todo = props.todo;
	const todos = props.todos;

	// const onChangeText = (e: {
	// 	target: { value: React.SetStateAction<string> };
	// }) => {
	// 	setTodo(e.target.value);
	// };

	return (
		<React.Fragment>
			<h2>Todo</h2>
			<input type="text" onChange={props.changeText} />
			<p>{todo}</p>
			<p>{todos}</p>
			<input type="submit" onClick={props.addTodo} />
			<ul>
				{todos.map((value: any) => {
					return (
						<li>
							<label>
								<input type="checkbox" />
								{value}
							</label>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
};

// これがアクションクリエーター？
const mapStateToProps = (state: any) => state.todos;
const mapDispatchProps = { addTodo, changeText };

export default connect(mapStateToProps, mapDispatchProps)(Todo);
