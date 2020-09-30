import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../../reducks/users/selectors';
import { push } from 'connected-react-router';
import { signOut } from '../../../reducks/users/operations';
import styles from './header.module.scss';

import { Nav } from '../../molecules'

const Header = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);
	const pageLink = {
		pagemove: (path: string) => dispatch(push(path)),
		logout: () => dispatch(signOut())
	};

	return (
		<header className={styles.header}>
			<div className={styles.header__inner}>
				<h1 className={styles.header__title}>おいでませ、{username}さん</h1>
				<Nav pageLink={pageLink}/>
			</div>
		</header>
	);
};

export default Header;
