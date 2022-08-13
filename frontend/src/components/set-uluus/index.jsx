import { useState, useEffect } from 'react';

import axios from 'axios';

import { Box, Container } from '@mui/material';
import { styled } from '@mui/system'

import { Title, Text16, Text20 } from '../../global-styles';

const ColumnBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	width: '50%',
}));

const SetUluusComponent = () => {
	const [letters, setLetters] = useState();
	const [uluuses, setUluuses] = useState();
	const [select, setSelect] = useState();
	const [pos, setPos] = useState(-1);
	const [isLetter, setIsLetter] = useState(true);

	useEffect(() => {
		axios
			.get('https://uluus.ru/api/uluus/')
			.then((response) => {
				const request = response.data;
				console.log(request);
				const sorted = request.sort(function (a, b) {
					if (a.name < b.name) { return -1; }
					if (a.name > b.name) { return 1; }
					return 0;
				})
				setUluuses(sorted);
				const letter = request.sort(function (a, b) {
					if (a.name < b.name) { return -1; }
					if (a.name > b.name) { return 1; }
					return 0;
				})
					.map(item => item = item = item.name.charAt(0));
				setLetters(letter.filter((e, id) => letter.indexOf(e) === id));
				setPos(sorted[0].name.charAt[0]);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	return (
		<Box>
			<Container maxWidth='lg'>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px'
				}}>
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '16px'
					}}>
						<Title>
							Мой улус - административный район
						</Title>
						<Text16>
							Укажите свой домашний регион, и мы сможем предлагать вам более актуальную информацию на главной странице сайта и в основных разделах (региональная выборка по объявлениям, местный форум, местные новости).
						</Text16>
						<Text20 sx={{
							color: '#0D6EFD',
						}}>
							Республика Саха (Якутия)
						</Text20>
					</Box>
					<Box sx={{
						display: 'flex',
						gap: '30px',
					}}>
						<ColumnBox>
							{uluuses?.filter(item => item.id <= ((uluuses?.length + letters?.length) / 2)).map((item, index) => (
								<Text16
									key={index}
									sx={{
										color: '#0D6EFD',
									}}
								>
									{/* {console.log(isLetter)}
									{setIsLetter(item.name.charAt[0] !== letters[pos] ? false : true)}
									{setPos(pos + 1)} */}
									{item.name}
								</Text16>
							))}
						</ColumnBox>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default SetUluusComponent;