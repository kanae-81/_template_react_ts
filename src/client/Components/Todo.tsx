import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Actions/Todo';

const Todo = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state: any) => state.todos);
	const [title, settitle] = useState<string>('');
	const [text, settext] = useState<any>('');

	const onSubmit = () => {
		if (title === '' || text === '') {
			alert('入力してください');
			return;
		}
		settitle('');
		settext('');
		dispatch(addTodo(title, text));
	};
	return (
		<React.Fragment>
			<h2>Todo</h2>
			<div>
				<label htmlFor="title">
					タイトル：
					<input
						type="text"
						value={title}
						onChange={(e) => {
							settitle(e.target.value);
						}}
					/>
				</label>
				<br></br>
				<label htmlFor="text">
					内容：
					<input
						type="text"
						value={text}
						onChange={(e) => {
							settext(e.target.value);
						}}
					/>
				</label>
			</div>
			<input type="submit" onClick={() => onSubmit()} />
			<table>
				<thead>
					<tr>
						<th>index</th>
						<th>タイトル</th>
						<th>内容</th>
					</tr>
				</thead>
				<tbody>
					{todos.todos.map((value: any, index: any) => {
						return (
							<tr key={index}>
								<td>{index}</td>
								<td>{value.title}</td>
								<td>{value.text}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</React.Fragment>
	);
};

export default Todo;
