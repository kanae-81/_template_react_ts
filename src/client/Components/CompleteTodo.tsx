import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, getUserId } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
import { listenTodos, deletetodo, returntodo } from '../reducks/todo/operations';
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Button,
	Box,
} from '@material-ui/core';
import { Delete, Replay } from '@material-ui/icons';
import { getTodos } from '../reducks/todo/selectors';

import Header from './organisms/Header/Header';

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
						<TableCell>完了日</TableCell>
						<TableCell>タイトル</TableCell>
						<TableCell>内容</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todos.todos.map((value: any) => {
						const seconds = value.updated_at.seconds;
						if (value.status === 'completed') {
							const ts = seconds;
							const d = new Date(ts * 1000);
							const year = d.getFullYear();
							const month = d.getMonth() + 1;
							const day = d.getDate();
							const date = (year + '-' + month + '-' + day);
							return (
								<TableRow key={value.id}>
									<TableCell>{date}</TableCell>
									<TableCell>{value.title}</TableCell>
									<TableCell>{value.text}</TableCell>
									<TableCell>
										<Box component="span" m={1}>
											<Button
												variant="outlined"
												color="primary"
												startIcon={<Replay />}
												onClick={() => dispatch(returntodo(uid, value.id))}>
												戻す
											</Button>
										</Box>
										<Box component="span" m={1}>
											<Button
												variant="outlined"
												color="secondary"
												startIcon={<Delete />}
												onClick={() =>
													dispatch(deletetodo(uid, value.id))
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
