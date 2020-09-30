import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../../reducks/users/selectors';
import { push } from 'connected-react-router';
import {
	listenTodos,
	deletetodo,
	completedtodo,
	sorttodo,
} from '../../../reducks/todo/operations';
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
import { Delete, Create, Check, ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';
import { getTodos } from '../../../reducks/todo/selectors';
import Header from '../../organisms/Header/Header';
import styles from './todo.module.scss';

const Todo = () => {

	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const todos = getTodos(selector);
	const uid = getUserId(selector);
	useEffect(() => {
		dispatch(listenTodos(uid))
	}, []);
	return (
		<>
			<Header />
			<div className={styles.todo}>
				<div className={styles.todo__inner}>
					<h2 className={styles.todo__title}>TODOリスト</h2>
					<Box component="div" m={2}>
						<button className={styles.todo__newBtn}
							type="button"
							onClick={() => dispatch(push('/add'))}>
								<span className={styles.todo__plus}></span>
						</button>
					</Box>
					<div className={styles.todo__content}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>
										<div className={styles.todo__container}>
											<p>期限</p>
											<button className={styles.todo__sortBtn} type="button" onClick={() => dispatch(sorttodo(todos, 'deadLine', 'up'))}>
												<ArrowDownwardRounded></ArrowDownwardRounded>
											</button>
											<button className={styles.todo__sortBtn} type="button" onClick={() => dispatch(sorttodo(todos, 'deadLine', 'down'))}>
												<ArrowUpwardRounded></ArrowUpwardRounded>
											</button>
										</div>
									</TableCell>
									<TableCell>
										<div className={styles.todo__container}>
											<p>進捗</p>
											<button className={styles.todo__sortBtn} type="button" onClick={() => dispatch(sorttodo(todos, 'progress', 'up'))}>
												<ArrowDownwardRounded></ArrowDownwardRounded>
											</button>
											<button className={styles.todo__sortBtn} type="button" onClick={() => dispatch(sorttodo(todos, 'progress', 'down'))}>
												<ArrowUpwardRounded></ArrowUpwardRounded>
											</button>
										</div>
										</TableCell>
									<TableCell>
										<div className={styles.todo__container}>
											タイトル
										</div>
									</TableCell>
									<TableCell>
										<div className={styles.todo__container}>
											内容
										</div>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default Todo;
