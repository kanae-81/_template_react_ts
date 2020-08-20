import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../reducks/users/selectors';
import { push } from 'connected-react-router';
import { Button, Box } from '@material-ui/core';

import Header from './Parts/Header';

const Shuzo = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);
	return (
		<React.Fragment>
			<Header />
			<h2>修造が応援してくれる</h2>
			<p>
				{username}さんを応援する
				<Box component="span" m={2}>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={() => dispatch(push('/todo'))}>
						TODOリスト
					</Button>
				</Box>
			</p>
			<div>これからつくりたい</div>
		</React.Fragment>
	);
};

export default Shuzo;
