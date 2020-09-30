import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsername } from '../../../reducks/users/selectors';
import Header from '../../organisms/Header/Header';
import shuzoList from '../../../Data/shuzo.json';
import shuzoImg from '../../../Images/shuzo.jpg'
import styles from './shuzo.module.scss';

const Shuzo = () => {
	const selector = useSelector((state: any) => state);
	const username = getUsername(selector);
	const [shuzo, setShuzo] = useState(shuzoList.shuzo[Math.floor(Math.random() * Math.floor(shuzoList.shuzo.length))]);

	let random: any;
	const shuzoSlot = () => {
		random = Math.floor(Math.random() * Math.floor(shuzoList.shuzo.length));
		setShuzo(shuzoList.shuzo[random]);
	}

	return (
		<>
			<img src={shuzoImg} className={styles.bgImg}/>
			<Header />
			<div className={styles.shuzo}>
				<div className={styles.shuzo__inner}>
					<h2 className={styles.shuzo__title}>修造はいつでも{username}さんの味方！</h2>
					<main className={styles.shuzo__main}>
						<p className={styles.shuzo__mainText}>{shuzo}</p>
					</main>
					<div className={styles.shuzo__container}>
						<button className={styles.shuzo__button}
							onClick={() => shuzoSlot()}>
							おかわり!
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Shuzo;
