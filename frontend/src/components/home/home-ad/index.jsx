import { useState } from 'react';

import { Box, Container, Input, Button, Pagination } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

import { AdCard } from '../../';
import { Title, Text20 } from '../../../global-styles';

const CustomButton = styled(Button)(({ theme }) => ({
	padding: '9px 17px',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	background: '#0D6EFD',
	borderRadius: '0px 4.8px 4.8px 0px',
	'&:hover': {
		background: '#589CFF',
	},
	'&:active': {
		background: '#004FC4',
	},
	[theme.breakpoints.down('sm')]: {
		padding: '4px 8px',
		gap: '4px',
	}
}));
const CustomInput = styled(Input)(({ theme }) => ({
	padding: '9px 17px',
	flexGrow: 1,
	background: '#FFFFFF',
	border: '1px solid #CED4DA',
	borderRadius: '4.8px 0px 0px 4.8px',
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 20,
	lineHeight: '150%',
	color: '#6C757D',
	[theme.breakpoints.down('sm')]: {
		padding: '4px 8px',
		fontSize: '16px',
	}
}));

const HomeAd = () => {
	const [page, setPage] = useState(1);
	const [input, setInput] = useState('');
	const data = [
		{
			id: 1,
			img: '/images/default_img_2.svg',
			title: 'Продаю Автомобиль Toyota Camry 2.5',
			desc: 'Описание Описание Описание Описание Описание Описание Описание',
			number: '+7(912)-222-22-22',
			date: '07.08.2022, 18:02',
			watch: '120 просмотров',
		},
		{
			id: 2,
			img: '/images/default_img_2.svg',
			title: 'Продаю Автомобиль Toyota Camry 2.5',
			desc: 'Описание Описание Описание Описание Описание Описание Описание',
			number: '+7(912)-222-22-22',
			date: '07.08.2022, 18:02',
			watch: '120 просмотров',
		},
		{
			id: 3,
			img: '/images/default_img_2.svg',
			title: 'Продаю Автомобиль Toyota Camry 2.5',
			desc: 'Описание Описание Описание Описание Описание Описание Описание',
			number: '+7(912)-222-22-22',
			date: '07.08.2022, 18:02',
			watch: '120 просмотров',
		},
		{
			id: 4,
			img: '/images/default_img_2.svg',
			title: 'Продаю Автомобиль Toyota Camry 2.5',
			desc: 'Описание Описание Описание Описание Описание Описание Описание',
			number: '+7(912)-222-22-22',
			date: '07.08.2022, 18:02',
			watch: '120 просмотров',
		},
		{
			id: 5,
			img: '/images/default_img_2.svg',
			title: 'Продаю Автомобиль Toyota Camry 2.5',
			desc: 'Описание Описание Описание Описание Описание Описание Описание',
			number: '+7(912)-222-22-22',
			date: '07.08.2022, 18:02',
			watch: '120 просмотров',
		},
	]

	const handleSubmit = (event) => {
		console.log(input);
		event.preventDefault()
	}

	return (
		<Box>
			<Container maxWidth='lg'>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '33px',
				}}>
					<Title>
						Доска объявлений в Якутии
					</Title>
					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
						}}>
						<CustomInput
							onChange={(e) => setInput(e.target.value)}
							placeholder='Поиск объявлений'
						/>
						<CustomButton type='submit'>
							<SearchIcon sx={{
								color: '#FFFFFF',
								width: '22px',
								height: '22px',
							}} />
							<Text20 sx={{
								color: '#FFF',
								textTransform: 'none',
								lineHeight: '150%',
							}}>
								Найти
							</Text20>
						</CustomButton>
					</form>
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
					}}>
						{data.map((card, index) => (
							<AdCard data={card} key={index} />
						))}
					</Box>
					<Pagination
						count={10}
						page={page}
						onChange={(e, value) => setPage(value)}
						variant='outlined'
						shape='rounded'
						// size='small'
						sx={{
							alignSelf: 'end',
							'&.MuiPagination-root ul li button': {
								backgroundColor: '#FFF',
							},
							'&.MuiPagination-root ul li button:hover': {
								backgroundColor: '#bbb7b7',
							},
							'&.MuiPagination-root ul li .Mui-selected': {
								backgroundColor: '#cdcdcd',
							},
						}}
					/>
				</Box>
			</Container>
		</Box>
	);
}

export default HomeAd;