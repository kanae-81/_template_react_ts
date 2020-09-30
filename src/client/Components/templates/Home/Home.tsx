import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../../reducks/users/selectors';
import { push } from 'connected-react-router';
import Header from '../../organisms/Header/Header';
import styles from './home.module.scss';
import { ButtonContent } from '../../molecules';

const Home = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);
	const pageLink = (path: string) => {
		dispatch(push(path));
	};
	return (
		<>
			<Header />
			<div className={styles.home}>
				<div className={styles.home__inner}>
					<h2 className={styles.home__title}>{username}さんのページ</h2>
					<div className={styles.home__content}>
						<ButtonContent
							text={'TODOリスト'}
							path={'/todo'}
							pageLink={pageLink}/>
						<ButtonContent
							text={'TODO完了リスト'}
							path={'/complete'}
							pageLink={pageLink} />
						<ButtonContent
							text={'元気がでるページ'}
							path={'/shuzo'}
							pageLink={pageLink} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
