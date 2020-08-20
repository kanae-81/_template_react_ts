import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../reducks/users/selectors';
import { push } from 'connected-react-router';
import { signOut } from '../../reducks/users/operations';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
// import { Delete, Create, Check, AddRounded } from '@material-ui/icons';
// import { getTodos } from '../reducks/todo/selectors';

const Header = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);
	return (
		<React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5">おいでませ、{username}さん</Typography>
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
		</React.Fragment>
	);
};

export default Header;
