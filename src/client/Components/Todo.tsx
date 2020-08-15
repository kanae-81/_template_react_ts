import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../reducks/todo/selectors';
import { push } from 'connected-react-router';
import { deletetodo } from '../reducks/todo/operations';

const Todo = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state: any) => state.todos);
	const renderTodos = getTodos(todos);
	return (
		<React.Fragment>
			<h2>Todo</h2>
			<table>
				<thead>
					<tr>
						<th>index</th>
						<th>タイトル</th>
						<th>内容</th>
					</tr>
				</thead>
				<tbody>
					{renderTodos.todos.map((value: any, index: any) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{value.title}</td>
								<td>{value.text}</td>
								<td><button onClick={() => dispatch(push(`/edit#${index}`))}>編集</button></td>
								<td><button onClick={() => dispatch(deletetodo(index))}>削除</button></td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<button onClick={() => dispatch(push('/add'))}>新規作成</button>
		</React.Fragment>
	);
};

export default Todo;
