import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

import { Box, Container, Input, Button, Pagination, Select, MenuItem, Checkbox, InputLabel, ListItemIcon, FormControl } from '@mui/material';
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
	const [adverts, setAdverts] = useState([]);
	const [uluus, setUluus] = useState([]);
	const [uluuses, setUluuses] = useState([]);
	const [selected, setSelected] = useState([]);
	const [count, setCount] = useState(1);
	const category = useSelector((state) => state.category.value);

	const MenuProps = {
		getContentAnchorEl: null,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "center"
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "center"
		},
		variant: "menu"
	};

	const advertCount = 5;
	const isAllSelected = uluuses.length > 0 && selected.length === uluuses.length;

	console.log(selected);
	console.log(selected.length);

	useEffect(() => {
		axios
			.get(`https://uluus.ru/api/uluus/?limit=100`)
			.then((response) => {
				const request = response.data.results;
				console.log('uluus', request);
				setUluuses(request.map(item => item = item.name));
				setUluus(request);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	useEffect(() => {
		axios
			.get(`https://uluus.ru/api/${category}/?limit=${advertCount}&offset=${(page - 1) * advertCount}`)
			.then((response) => {
				const request = response.data;
				console.log(category, request);
				setAdverts(request.results);
				setCount(Math.ceil(category === 'adverts' ? request.overall_total / advertCount : request.count / advertCount));
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, [category, page]);

	const handleSubmit = (event) => {
		console.log(input);
		const uluusId = uluus.filter(item => selected.includes(item.name)).map(item => item = item.id);
		console.log(uluusId);
		axios
			.get(input ? `https://uluus.ru/search/${category}/${input}/?uluus=${uluusId.join(',')}` : `https://uluus.ru/api/${category}/?limit=${advertCount}&offset=0`)
			.then((response) => {
				const request = response.data;
				console.log(request);
				setCount(Math.ceil(category === 'adverts' ? request.overall_total / advertCount : request.count / advertCount));
				setAdverts(request.results);
			})
			.catch((error) => {
				console.log('error', error);
			});
		event.preventDefault()
	};

	const handleChange = (event) => {
		const value = event.target.value;
		if (value[value.length - 1] === "all") {
			setSelected(selected.length === uluuses.length ? [] : uluuses);
			return;
		}
		setSelected(value);
	};

	return (
		<Box>
			<Container maxWidth='lg'>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '33px',
				}}>
					<Title>
						Доска объявлений
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
					<FormControl>
						<Select
							sx={{
								background: '#FFF',
							}}
							multiple
							displayEmpty
							value={selected}
							onChange={handleChange}
							renderValue={(selected) => {
								if (selected.length === 0) {
									return <Text20 sx={{ opacity: 0.5, color: '#6c757d' }}>Выбрать улус</Text20>;
								}

								return <Text20>{selected.join(", ")}</Text20>;
							}}
							MenuProps={MenuProps}
						>
							<MenuItem disabled value="">
								<Text20>Выбрать улус</Text20>
							</MenuItem>
							<MenuItem
								value="all"
							>
								<ListItemIcon>
									<Checkbox
										checked={isAllSelected}
										indeterminate={
											selected.length > 0 && selected.length < uluuses.length
										}
									/>
								</ListItemIcon>
								<Text20>Выбрать все</Text20>
							</MenuItem>
							{uluuses.map((option) => (
								<MenuItem key={option} value={option}>
									<ListItemIcon>
										<Checkbox checked={selected.indexOf(option) > -1} />
									</ListItemIcon>
									<Text20>{option}</Text20>
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
					}}>
						{adverts?.map((card, index) => (
							<AdCard data={card} key={index} />
						))}
					</Box>
					<Pagination
						count={count}
						page={page}
						onChange={(e, value) => setPage(value)}
						variant='outlined'
						shape='rounded'
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
			</Container >
		</Box >
	);
}

export default HomeAd;