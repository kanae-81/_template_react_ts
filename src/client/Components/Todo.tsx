import React from 'react';
import { connect } from 'react-redux';
import { addTodo, changeName, changeAge } from '../Actions/Todo';

const Todo = (props: any) => {
	return (
		<React.Fragment>
			<h2>Todo</h2>
			<div>
				<label htmlFor="name">
					名前：
					<input
						type="text"
						value={props.name}
						onChange={(e) => {
							props.changeName(e);
						}}
					/>
				</label>
				<br></br>
				<label htmlFor="age">
					年齢：
					<input
						type="number"
						value={props.age}
						onChange={(e) => {
							props.changeAge(e);
						}}
					/>
					歳
				</label>
			</div>
			<input type="submit" onClick={props.addTodo} />
			<table>
				<thead>
					<tr>
						<th>名前</th>
						<th>年齢</th>
					</tr>
				</thead>
				<tbody>
					{props.todos.map((value: any, index: any) => {
						return (
							<tr key={index}>
								<td>{value.name}</td>
								<td>{value.age}歳</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</React.Fragment>
	);
};

// これがアクションクリエーター？
const mapStateToProps = (state: any) => state.todos;
const mapDispatchProps = { addTodo, changeName, changeAge };

export default connect(mapStateToProps, mapDispatchProps)(Todo);
