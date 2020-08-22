import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, getUserId } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
import {
	listenTodos,
	deletetodo,
	completedtodo,
	sorttodo,
} from '../reducks/todo/operations';
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	Button,
	Box,
	CircularProgress,
	Typography,
} from '@material-ui/core';
import { Delete, Create, Check, AddRounded, ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';
import { getTodos } from '../reducks/todo/selectors';
import Header from './Parts/Header';
import styled from 'styled-components'

const  SortBtn = styled.button`
	border: none;
	cursor: pointer;
	outline: none;
	padding: 0;
	appearance: none;
	border: 2px solid #000;
	border-radius: 2px;
	margin-left: 8px;
	transition: all 0.2s ease;
	&:hover {
		opacity: 0.5;
	}
`

const TextCenter = styled.div`
	display: flex;
	align-items: center;
	font-weight: bold;
`

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
						<TableCell>
							<TextCenter>
								<p>期限</p>
								<SortBtn type="button" onClick={() => dispatch(sorttodo(todos, 'deadLine', 'up'))}>
									<ArrowDownwardRounded></ArrowDownwardRounded>
								</SortBtn>
								<SortBtn type="button" onClick={() => dispatch(sorttodo(todos, 'deadLine', 'down'))}>
									<ArrowUpwardRounded></ArrowUpwardRounded>
								</SortBtn>
							</TextCenter>
						</TableCell>
						<TableCell>
							<TextCenter>
								<p>進捗</p>
								<SortBtn type="button" onClick={() => dispatch(sorttodo(todos, 'progress', 'up'))}>
									<ArrowDownwardRounded></ArrowDownwardRounded>
								</SortBtn>
								<SortBtn type="button" onClick={() => dispatch(sorttodo(todos, 'progress', 'down'))}>
									<ArrowUpwardRounded></ArrowUpwardRounded>
								</SortBtn>
							</TextCenter>
							</TableCell>
						<TableCell>
							<TextCenter>
								タイトル
							</TextCenter>
						</TableCell>
						<TableCell>
							<TextCenter>
								内容
							</TextCenter>
						</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todos.todos.map((value: any) => {
						if (value.status === 'created') {
							return (
								<TableRow key={value.id}>
									<TableCell>
											{value.deadLine}
									</TableCell>
									<TableCell>
										<Box position="relative" display="inline-flex">
											<CircularProgress variant="static" value={Number(value.progress)} />
											<Box
												top={0}
												left={0}
												bottom={0}
												right={0}
												position="absolute"
												display="flex"
												alignItems="center"
												justifyContent="center"
											>
												<Typography variant="caption" component="div" color="textSecondary">
													{`${Math.round(value.progress)}%`}
												</Typography>
											</Box>
										</Box>
									</TableCell>
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
