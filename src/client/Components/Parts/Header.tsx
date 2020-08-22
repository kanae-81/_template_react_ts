import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../reducks/users/selectors';
import { push } from 'connected-react-router';
import { signOut } from '../../reducks/users/operations';
import { Button } from '@material-ui/core';
import styled from 'styled-components'

const HeadInner = styled.div`
	padding: 0 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	background: #3f51b5;
	box-shadow:
		0px 2px 4px -1px rgba(0,0,0,0.2),
		0px 4px 5px 0px rgba(0,0,0,0.14),
		0px 1px 10px 0px rgba(0,0,0,0.12);
	z-index: 100;
`

const HeadTitle = styled.h2`
	color: #fff;
	font-size: 24px
`

const NavInner = styled.div`
	display: flex;
	justify-content: space-around;
	width: 40%;
`

const Header = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);

	return (
			<HeadInner>
				<HeadTitle>おいでませ、{username}さん</HeadTitle>
				<NavInner>
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
				</NavInner>
			</HeadInner>
	);
};

export default Header;
