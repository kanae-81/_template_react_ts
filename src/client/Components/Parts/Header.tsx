import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../reducks/users/selectors';
import { push } from 'connected-react-router';
import { signOut } from '../../reducks/users/operations';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
// import { Delete, Create, Check, AddRounded } from '@material-ui/icons';
// import { getTodos } from '../reducks/todo/selectors';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
	}),
);

const Header = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);

	const classes = useStyles();

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5" className={classes.grow}>おいでませ、{username}さん</Typography>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(push('/'))}>
						ホーム
					</Button>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(push('/todo'))}>
						TODOリスト
					</Button>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(signOut())}>
						ログアウト
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
