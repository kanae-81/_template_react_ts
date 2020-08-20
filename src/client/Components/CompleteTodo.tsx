import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, getUserId } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
import { listenTodos, deletetodo } from '../reducks/todo/operations';
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Button,
	Box,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { getTodos } from '../reducks/todo/selectors';

import Header from './Parts/Header';

const CompleteTodo = () => {
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
				{username}さんの完了リスト
				<Box component="span" m={2}>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(push('/todo'))}>
						Todo
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
						if (value.status === 'completed') {
							return (
								<TableRow key={value.id}>
									<TableCell>{index + 1}</TableCell>
									<TableCell>{value.title}</TableCell>
									<TableCell>{value.text}</TableCell>
									<TableCell>
										<Box component="span" m={1}>
											<Button
												variant="outlined"
												color="secondary"
												startIcon={<Delete />}
												onClick={() =>
													dispatch(deletetodo(uid, value.id, '/complete'))
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
		</React.Fragment>
	);
};

export default CompleteTodo;
