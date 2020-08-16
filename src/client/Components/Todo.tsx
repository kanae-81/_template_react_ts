import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../reducks/users/selectors';
import { getTodos } from '../reducks/todo/selectors';
import { push } from 'connected-react-router';
import { deletetodo } from '../reducks/todo/operations';
import { signOut } from '../reducks/users/operations';
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Button,
	Box
} from '@material-ui/core';
import {
	Delete,
	Create,
	AddRounded
} from '@material-ui/icons';

const Todo = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const renderTodos = getTodos(selector);
	const username = getUsername(selector);
	return (
		<React.Fragment>
			<h2>Todo</h2>
			<p>
				{username}さんのリスト
				<Box component="span" m={2}>
					<Button size="large" variant="outlined" color="primary" onClick={() => dispatch(signOut())}>ログアウト</Button>
				</Box>
			</p>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>index</TableCell>
						<TableCell>タイトル</TableCell>
						<TableCell>内容</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{renderTodos.todos.map((value: any, index: any) => {
						return (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{value.title}</TableCell>
								<TableCell>{value.text}</TableCell>
								<TableCell>
									<Box component="span" m={1}>
										<Button variant="outlined" color="primary" startIcon={<Create />} onClick={() => dispatch(push(`/edit#${index}`))}>編集</Button>
									</Box>
									<Box component="span" m={1}>
										<Button variant="outlined" color="secondary" startIcon={<Delete />} onClick={() => dispatch(deletetodo(index))}>削除</Button>
									</Box>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			<Box component="div" m={2}>
				<Button size="large" variant="contained" color="primary" startIcon={<AddRounded />} onClick={() => dispatch(push('/add'))}>新規作成</Button>
			</Box>
		</React.Fragment>
	);
};

export default Todo;
