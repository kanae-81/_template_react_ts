import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
import { Button, Box } from '@material-ui/core';

import Header from './Parts/Header';

const Home = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);
	return (
		<React.Fragment>
			<Header />
			<h2>ホーム画面</h2>
			<div>
				{username}さんのページ
				<Box component="div" m={2}>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(push('/todo'))}>
						TODOリスト
					</Button>
				</Box>
				<Box component="div" m={2}>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(push('/shuzo'))}>
						元気がでるページ
					</Button>
				</Box>
			</div>
		</React.Fragment>
	);
};

export default Home;
