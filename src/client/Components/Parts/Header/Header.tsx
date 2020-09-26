import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../../reducks/users/selectors';
import { push } from 'connected-react-router';
import { signOut } from '../../../reducks/users/operations';
import styles from './header.module.scss';

const Header = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);

	return (
		<header className={styles.header}>
			<div className={styles.header__inner}>
				<h1 className={styles.header__title}>おいでませ、{username}さん</h1>
				<nav className={styles.nav}>
					<ul className={styles.nav__items}>
						<li className={styles.nav__item}>
							<a className={styles.nav__itemLink} onClick={() => dispatch(push('/'))}>
								ホーム
							</a>
						</li>
						<li className={styles.nav__item}>
							<a className={styles.nav__itemLink} onClick={() => dispatch(push('/todo'))}>
								TODOリスト
							</a>
						</li>
						<li className={styles.nav__item}>
							<a className={styles.nav__itemLink} onClick={() => dispatch(signOut())}>
								ログアウト
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
