import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsername } from '../reducks/users/selectors';
import { Button, Box } from '@material-ui/core';

import Header from './Parts/Header';
import shuzoList from '../Data/shuzo.json';


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
		<React.Fragment>
			<Header />
			<h2>修造が応援してくれる</h2>
			<h4>
				{username}さんを応援する
			</h4>
			<div>{shuzo}</div>
			<Box component="div" m={2}>
				<Button
					size="large"
					variant="contained"
					color="primary"
					onClick={() => shuzoSlot()}>
					おかわり！
					</Button>
			</Box>
			<a href="https://iyashitour.com/archives/19252">修造参考ページ</a>
		</React.Fragment>
	);
};

export default Shuzo;
