import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, getUserId } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
import {
	listenTodos,
	deletetodo,
	completedtodo,
} from '../reducks/todo/operations';
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Button,
	Box,
} from '@material-ui/core';
import { Delete, Create, Check, AddRounded } from '@material-ui/icons';
import { getTodos } from '../reducks/todo/selectors';

import Header from './Parts/Header';

const Todo = () => {

	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const todos = getTodos(selector);
	const username = getUsername(selector);
	const uid = getUserId(selector);
	useEffect(() => {
		dispatch(listenTodos(uid))
	}, []);
	return (
		<React.Fragment>
			<Header />
			<h2>Todo</h2>
			<p>
				{username}さんのリスト
				<Box component="span" m={2}>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(push('/complete'))}>
						完了リスト
					</Button>
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
					{todos.todos.map((value: any, index: any) => {
						if (value.status === 'created') {
							return (
								<TableRow key={value.id}>
									<TableCell>{index + 1}</TableCell>
									<TableCell>{value.title}</TableCell>
									<TableCell>{value.text}</TableCell>
									<TableCell>
										<Box component="span" m={1}>
											<Button
												variant="outlined"
												color="primary"
												startIcon={<Create />}
												onClick={() => dispatch(push(`/edit/${value.id}`))}>
												編集
											</Button>
										</Box>
										<Box component="span" m={1}>
											<Button
												variant="outlined"
												color="primary"
												startIcon={<Check />}
												onClick={() => dispatch(completedtodo(uid, value.id))}>
												完了
											</Button>
										</Box>
										<Box component="span" m={1}>
											<Button
												variant="outlined"
												color="secondary"
												startIcon={<Delete />}
												onClick={() =>
													dispatch(deletetodo(uid, value.id, '/'))
												}>
												削除
											</Button>
										</Box>
									</TableCell>
								</TableRow>
							);
						}
						return;
					})}
				</TableBody>
			</Table>
			<Box component="div" m={2}>
				<Button
					size="large"
					variant="contained"
					color="primary"
					startIcon={<AddRounded />}
					onClick={() => dispatch(push('/add'))}>
					新規作成
				</Button>
			</Box>
		</React.Fragment>
	);
};

export default Todo;
