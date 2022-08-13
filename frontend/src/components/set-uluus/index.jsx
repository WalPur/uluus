import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { Box, Container, Button, Modal } from '@mui/material';
import { styled } from '@mui/system'

import { Title, Text14, Text16, Text20 } from '../../global-styles';
import { setUluus } from '../../slices/uluusSlice';

const ColumnBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	width: '50%',
}));
const CustomButton = styled(Button)(({ theme }) => ({
	textTransform: 'none',
	padding: '9px 17px',
	background: '#0D6EFD',
	borderRadius: '4.8px',
	'&:hover': {
		background: '#004FC3',
	},
	'&:active': {
		background: '#589CFF',
	},
}));
const ModalBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '18px',
	padding: '40px',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	background: '#FFFFFF',
	borderRadius: '10px',
	maxWidth: '900px',
	width: '100%',
	[theme.breakpoints.down('lg')]: {
		maxWidth: '600px',
	},
	[theme.breakpoints.down('md')]: {
		maxWidth: '400px',
	},
	[theme.breakpoints.down('sm')]: {
		maxWidth: '100%',
		width: '75%',
		padding: '20px',
	}
}));

const SetUluusComponent = () => {
	const uluus = useSelector((state) => state.uluus.value);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [letters, setLetters] = useState();
	const [uluuses, setUluuses] = useState();
	const [newUluus, setNewUluus] = useState(uluus);
	const [selected, setSelected] = useState(uluus);
	const [array, setArray] = useState([]);
	const [open, setOpen] = useState(false);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		axios
			.get('https://uluus.ru/api/uluus/')
			.then((response) => {
				const request = response.data;
				const sorted = request.sort(function (a, b) {
					if (a.name < b.name) { return -1; }
					if (a.name > b.name) { return 1; }
					return 0;
				})
				setUluuses(sorted);
				let letter = request.sort(function (a, b) {
					if (a.name < b.name) { return -1; }
					if (a.name > b.name) { return 1; }
					return 0;
				})
					.map(item => item = item = item.name.charAt(0));
				letter = letter.filter((e, id) => letter.indexOf(e) === id);
				setLetters(letter);
				let arr = [];
				arr.push({ id: 0, name: letter[0] });
				for (let i = 0, item = 0, index = 0; i < (sorted.length + letter.length) - 1; i++) {
					if (sorted[item]?.name.charAt(0) == letter[index]) {
						arr.push(sorted[item]);
						item++;
					} else {
						index++;
						arr.push({ id: index, name: letter[index] });
					}
				}
				setArray(arr);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	const handleSubmit = () => {
		if (selected !== newUluus) {
			setNewUluus(selected);
			dispatch(setUluus(selected));
			setIsValid(true);
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false)
		if (isValid) {
			setIsValid(false);
			navigate('/')
		}
	};

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
						<Box
							onClick={() => {
								setSelected(selected !== 'Республика Саха (Якутия)' ? 'Республика Саха (Якутия)' : newUluus)
							}}
							sx={{
								display: 'flex',
								gap: '5px',
								cursor: 'pointer',
								width: 'fit-content',
							}}
						>
							<Text20 sx={{
								color: '#0D6EFD',
							}}>
								Республика Саха (Якутия)
							</Text20>
							<img
								src='/images/selected.svg'
								style={{
									display: selected === 'Республика Саха (Якутия)' ? 'block' : 'none',
								}}
							/>
						</Box>
					</Box>
					<Box sx={{
						display: 'flex',
						gap: '30px',
					}}>
						<ColumnBox>
							{array?.filter((item, index) => index < (array?.length / 2.0)).map((item, index) => {
								return item.name.length === 1 ?
									(
										<Box
											key={index}
											sx={{
												display: 'flex',
												width: 'fit-content',
											}}
										>
											<Text16>
												{item.name}
											</Text16>
										</Box>
									)
									:
									(
										<Box
											key={index}
											onClick={() => {
												setSelected(selected !== item.name ? item.name : newUluus)
											}}
											sx={{
												display: 'flex',
												gap: '5px',
												cursor: 'pointer',
												width: 'fit-content',
											}}
										>
											<Text16
												sx={{
													color: '#0D6EFD',
												}}
											>
												{item.name}
											</Text16>
											<img
												src='/images/selected.svg'
												style={{
													display: selected === item.name ? 'block' : 'none',
												}}
											/>
										</Box>
									)
							})}
						</ColumnBox>
						<ColumnBox>
							{array?.filter((item, index) => index >= (array?.length / 2.0)).map((item, index) => {
								return item.name.length === 1 ?
									(
										<Box
											key={index}
											sx={{
												display: 'flex',
												width: 'fit-content',
											}}
										>
											<Text16>
												{item.name}
											</Text16>
										</Box>
									)
									:
									(
										<Box
											key={index}
											onClick={() => {
												setSelected(selected !== item.name ? item.name : newUluus)
											}}
											sx={{
												display: 'flex',
												gap: '5px',
												cursor: 'pointer',
												width: 'fit-content',
											}}
										>
											<Text16
												sx={{
													color: '#0D6EFD',
												}}
											>
												{item.name}
											</Text16>
											<img
												src='/images/selected.svg'
												style={{
													display: selected === item.name ? 'block' : 'none',
												}}
											/>
										</Box>
									)
							})}
						</ColumnBox>
					</Box>
					<CustomButton
						onClick={handleSubmit}
						sx={{
							alignSelf: 'end',
						}}
					>
						<Text20 sx={{
							color: '#FFFFFF',
							width: 'fit-content',
						}}>
							Подтвердить
						</Text20>
					</CustomButton>
					<Modal
						open={open}
						onClose={() => setOpen(false)}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<ModalBox sx={{
							maxWidth: '560px',
							alignItems: 'center',
						}}>
							<Text14>
								{isValid ? 'Улус успешно выбран!' : 'Этот улус уже выбран'}
							</Text14>
							<Text14>
								{isValid ? 'Можете перейти на главную' : 'Выберите другой улус'}
							</Text14>
							<CustomButton
								onClick={handleClose}
								sx={{
									maxWidth: '150px',
								}}
							>
								<Text20 sx={{
									color: '#FFF',
								}}>
									{isValid ? 'Главная' : 'Закрыть'}
								</Text20>
							</CustomButton>
						</ModalBox>
					</Modal>
				</Box>
			</Container >
		</Box >
	)
}

export default SetUluusComponent;