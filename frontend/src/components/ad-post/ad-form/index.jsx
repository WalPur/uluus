import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useForm, Controller } from "react-hook-form";

import axios from 'axios';

import { Box, Container, Select, MenuItem, Button, Modal, Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/system';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Subtitle, Text20, Text16, Text14 } from '../../../global-styles';
import categoriesData from '../../../data/categories';

const CustomForm = styled('form')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
}));
const CustomSelect = styled(Select)(({ theme }) => ({
	background: '#FFFFFF',
	border: '1px solid #CED4DA',
	borderRadius: '4.8px 0px 0px 4.8px',
	width: '280px',
	marginBottom: '20px',
	'&.MuiOutlinedInput-root .MuiSelect-select.MuiSelect-outlined': {
		padding: '9px 32px 9px 17px',
	},
	[theme.breakpoints.down('md')]: {
		width: '200px',
	},
	[theme.breakpoints.down(650)]: {
		width: '250px',
	},
}));
const InputBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	[theme.breakpoints.down(400)]: {
		flexDirection: 'column',
		alignItems: 'start',
		gap: '10px',
	}
}));
const CustomBox = styled(Box)(({ theme }) => ({
	width: '200px',
	marginRight: '10px',
	[theme.breakpoints.down('sm')]: {
		width: '120px',
	},
	[theme.breakpoints.down(400)]: {
		width: '200px',
	}
}));
const CustomInput = styled('input')(({ theme }) => ({
	boxSizing: 'border-box',
	padding: '9px 17px',
	background: '#FFFFFF',
	border: '1px solid #CED4DA',
	borderRadius: '4.8px 0px 0px 4.8px',
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 20,
	lineHeight: '135%',
	color: '#6C757D',
	[theme.breakpoints.down('sm')]: {
		fontSize: '16px',
	},
	[theme.breakpoints.down(400)]: {
		width: '100%',
	}
}));
const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
	flexGrow: 1,
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 20,
	lineHeight: '135%',
	color: '#6C757D',
	maxWidth: '400px',
	minWidth: '240px',
	[theme.breakpoints.down('sm')]: {
		fontSize: '16px',
	},
	[theme.breakpoints.down(400)]: {
		width: '100%',
	}
}));
const CustomButton = styled(Button)(({ theme }) => ({
	textTransform: 'none',
	padding: '9px 17px',
	background: '#0D6EFD',
	borderRadius: '4.8px',
	'&:hover': {
		background: '#589CFF',
	},
	'&:active': {
		background: '#004FC4',
	}
}));
const CustomLabel = styled('label')(({ theme }) => ({
	display: 'flex',
	alihnItems: 'center',
	cursor: 'pointer',
	background: '#6C757D',
	borderRadius: '4px',
	transition: '0.3s',
	'&:hover': {
		opacity: '0.67',
		transition: '0.3s',
	}
}))
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
const CheckBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '18px',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		alignItems: 'start',
	},
	[theme.breakpoints.down(400)]: {
		flexDirection: 'column',
		alignItems: 'start',
		gap: '8px',
	}
}));
const AutocompleteBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItmes: 'center',
	gap: '24px',
}));

const AdForm = () => {
	const [uluusOptions, setUluusOptions] = useState([]);
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [category, setCategory] = useState("");
	const [subcategory, setSubcategory] = useState("");
	const [action, setAction] = useState("");
	const [images, setImages] = useState([]);
	const [uploadImages, setUploadImages] = useState([]);
	const [uluuses, setUluuses] = useState([]);
	const [allUluus, setAllUluus] = useState(false);
	const navigate = useNavigate();
	const { register, handleSubmit, setValue } = useForm({
		shouldUseNativeValidation: true,
	});

	useEffect(() => {
		axios
			.get('https://uluus.ru/api/uluus/?limit=100')
			.then((response) => {
				const request = response.data.results.sort((a, b) => { return a.name.localeCompare(b.name) });
				setUluusOptions(request);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	const handleClose = () => setOpen(false);
	const handleClose2 = () => {
		setOpen2(false);
		setOpen(false);
		navigate('/');
	};
	const handleInputFile = (e) => {
		const files = e.target.files;
		const filesArr = Array.prototype.slice.call(files);
		setImages(filesArr.concat(images));
		setUploadImages(files)
	};
	const removeImage = (image) => {
		setImages(images.filter(item => item !== image));
	};
	const handleCategory = (e) => {
		setSubcategory('');
		setAction('');
		setCategory(e.target.value);
	}
	const onSubmit = async (data, event) => {
		const uluus = allUluus ? [...uluusOptions].map(item => item = item.id) : [...uluuses].map(item => item = item.id);
		const formData = new FormData(event.target)
		uluus.map((e, i) => {
			formData.append('uluus', e);
		})
		images.map((e, i) => {
			formData.append('images[' + i + ']image', uploadImages[i]);
		})
		const headers = { 'Content-Type': 'multipart/form-data' };
		axios({
			url: 'https://uluus.ru/api/' + category.toLowerCase() + '/',
			method: "POST",
			data: formData,
			headers: headers,
		})
			.then(() => {
				setOpen2(true);
			})
			.catch((error) => {
				console.log('error', error)
			});
	};

	return (
		<Box>
			<Container maxWidth='lg'>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
				}}>
					<Subtitle sx={{
						fontWeight: 700,
					}}>
						Новое объявление
					</Subtitle>
					<CustomForm onSubmit={handleSubmit(onSubmit)}>
						<Subtitle>
							Выберите категорию
						</Subtitle>
						<Box sx={{
							display: 'flex',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
						}}>
							<CustomSelect
								{...register("cat", {
									required: true,
								})}
								displayEmpty
								value={category}
								onChange={handleCategory}
							>
								<MenuItem disabled value="">
									<Text20 sx={{
										color: '#6C757D'
									}}>
										Категория
									</Text20>
								</MenuItem>
								{categoriesData.map((item, index) => (
									<MenuItem key={index} value={item.category.value}>
										<Text20 sx={{
											color: '#6C757D'
										}}>
											{item.category.label}
										</Text20>
									</MenuItem>
								))}
							</CustomSelect>
							<CustomSelect
								{...register("category", {
									required: true,
								})}
								displayEmpty
								value={subcategory}
								onChange={e => setSubcategory(e.target.value)}
							>
								<MenuItem disabled value="">
									<Text20 sx={{
										color: '#6C757D'
									}}>
										Подкатегория
									</Text20>
								</MenuItem>
								{categoriesData.filter(item => item.category.value === category)[0]?.subcategory.map((item, index) => (
									<MenuItem key={index} value={item.value}>
										<Text20 sx={{
											color: '#6C757D'
										}}>
											{item.label}
										</Text20>
									</MenuItem>
								))}
							</CustomSelect>
							<CustomSelect
								{...register("action", {
									required: true,
								})}
								displayEmpty
								value={action}
								onChange={e => setAction(e.target.value)}
							>
								<MenuItem disabled value="">
									<Text20 sx={{
										color: '#6C757D'
									}}>
										Действие
									</Text20>
								</MenuItem>
								{categoriesData.filter(item => item.category.value === category)[0]?.action.map((item, index) => (
									<MenuItem key={index} value={item.value}>
										<Text20 sx={{
											color: '#6C757D'
										}}>
											{item.label}
										</Text20>
									</MenuItem>
								))}
							</CustomSelect>
						</Box>
						<Text20 sx={{
							fontWeight: 700
						}}>
							Параметры
						</Text20>
						<InputBox>
							<CustomBox>
								<Text20>
									Заголовок<span style={{ color: '#FF0000' }}>*</span>
								</Text20>
							</CustomBox>
							<CustomInput
								sx={{ width: 'auto' }}
								placeholder='Название товара/услуги'
								{...register("name", { required: true })}
							/>
						</InputBox>
						<InputBox>
							<CustomBox sx={{ alignSelf: 'start' }}>
								<Text20>
									Описание<span style={{ color: '#FF0000' }}>*</span>
								</Text20>
							</CustomBox>
							<textarea
								style={{
									maxWidth: '620px',
									width: 'auto',
									flexGrow: 1,
									height: '100px',
									padding: '6px 16px',
									background: '#FFF',
									border: '1px solid #CED4DA',
									borderRadius: '4.8px',
									fontFamily: 'Open Sans, sans-serif',
									fontWeight: 400,
									fontSize: 12,
									lineHeight: '137.5%',
									color: '#6C757D'
								}}
								placeholder='Не указывайте в описании номер телефона'
								{...register("description", { required: true })}
							/>
						</InputBox>
						{categoriesData.filter(item => item.category.value === category)[0]?.add.map((item, index) => (
							<InputBox key={index}>
								<CustomBox>
									<Text20>
										{item.label}<span style={{ color: '#FF0000' }}>*</span>
									</Text20>
								</CustomBox>
								<CustomSelect
									sx={{ mb: 0 }}
									{...register(`${item.register}`, { required: true })}
									required
									displayEmpty
									defaultValue=''
								>
									<MenuItem disabled value="">
										<Text20 sx={{
											color: '#6C757D'
										}}>
											{item.label}
										</Text20>
									</MenuItem>
									{item.values.map((item, index) => (
										<MenuItem key={index} value={item.value}>
											<Text20 sx={{
												color: '#6C757D'
											}}>
												{item.label}
											</Text20>
										</MenuItem>
									))}
								</CustomSelect>
							</InputBox>
						))}
						<InputBox>
							<CustomBox>
								<Text20>
									Стоимость<span style={{ color: '#FF0000' }}>*</span>
								</Text20>
							</CustomBox>
							<CustomInput
								sx={{ maxWidth: '200px', width: 'auto' }}
								placeholder={0}
								type='number'
								{...register("price", {
									required: true,
									min: 0,
								})}
							/>
						</InputBox>
						<Text20 sx={{
							fontWeight: 700
						}}>
							Фотографии
						</Text20>
						<InputBox>
							<CustomLabel>
								<CustomInput
									name='images'
									type='file'
									accept='image/*'
									multiple
									onChange={(e) => handleInputFile(e)}
									sx={{
										display: 'none',
									}}
								/>
								<Box sx={{
									padding: '7px 13px',
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
								}}>
									<img src='/images/upload_icon.svg' />
									<Text16 sx={{ color: '#FFF' }}>
										Загрузить фото
									</Text16>
								</Box>
							</CustomLabel>
						</InputBox>
						<InputBox sx={{
							flexDirection: 'column',
							gap: '10px',
							alignItems: 'start',
						}}>
							{images?.map((item, index) => (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										gap: '10px',
										maxWidth: '210px',
										width: '100%',
										overflow: 'hidden'
									}}
									key={index}
								>
									<Text14 sx={{ flexGrow: 1 }}>
										{item.name}
									</Text14>
									<DeleteForeverIcon
										sx={{ cursor: 'pointer' }}
										onClick={() => removeImage(item)}
									/>
								</Box>
							))}
						</InputBox>
						<Text20 sx={{
							fontWeight: 700
						}}>
							Контактные данные
						</Text20>
						<InputBox>
							<CustomBox>
								<Text20>
									Номер телефона<span style={{ color: '#FF0000' }}>*</span>
								</Text20>
							</CustomBox>
							<CustomInput
								{...register("phone", {
									required: true,
									minLength: 11,
									maxLength: 12,
									pattern: /(\+7|7|8)[0-9]{10}/,
								})}
							/>
						</InputBox>
						<Box sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px'
						}}>
							<input
								{...register("is_whatsapp")}
								type='checkbox'
								style={{
									width: '16px',
									height: '16px',
									border: '1px solid #CED4DA',
									borderRadius: '2px',
								}}
							/>
							<Text14>
								Есть WhatsApp
							</Text14>
						</Box>
						<InputBox>
							<CustomBox>
								<Text20>
									Ваше имя<span style={{ color: '#FF0000' }}>*</span>
								</Text20>
							</CustomBox>
							<CustomInput
								{...register("user_name", {
									required: true,
								})}
							/>
						</InputBox>
						<InputBox>
							<CustomBox>
								<Text20>
									Населенный пункт<span style={{ color: '#FF0000' }}>*</span>
								</Text20>
							</CustomBox>
							<CustomInput
								{...register("settlement", {
									required: true,
								})}
							/>
						</InputBox>
						<AutocompleteBox sx={{
							flexWrap: 'wrap'
						}}>
							<Text20 sx={{ maxWidth: '300px' }}>
								Опубликовать объявление на определенном(ых) улусе(ах):
							</Text20>
							<CustomAutocomplete
								multiple
								limitTags={2}
								value={uluuses}
								options={uluusOptions}
								getOptionLabel={(option) => option.name}
								isOptionEqualToValue={(option, value) => option.id === value.id}
								onChange={(e, data) => {
									setUluuses(data);
									console.log(data);
								}}
								renderInput={(params) => (
									<TextField
										// {...register('uluus')}
										sx={{ background: '#FFF' }}
										{...params}
										placeholder='Выбрать улусы'
									/>
								)}
							/>
						</AutocompleteBox>
						<CheckBox>
							<Text20>
								Опубликовать объявление во всех улусах республики
							</Text20>
							<input
								checked={allUluus}
								onChange={(e) => setAllUluus(e.target.checked)}
								type='checkbox'
								style={{
									width: '16px',
									height: '16px',
									border: '1px solid #CED4DA',
									borderRadius: '2px',
								}}
							/>
						</CheckBox>
						<Box sx={{
							display: 'flex',
							gap: '10px',
							flexWrap: 'wrap',
						}}>
							<CustomButton
								type='submit'
							>
								<Text20 sx={{
									color: '#FFF',
								}}>
									Разместить объявление
								</Text20>
							</CustomButton>
							<Text14 sx={{
								maxWidth: '280px',
							}}>
								Подавая объявление, вы соглашаетесь <span style={{ color: '#0D6EFD' }}>с пользовательским соглашением</span> и <span style={{ color: '#0D6EFD' }}>политикой о данных пользователей</span>
							</Text14>
						</Box>
						{/* <Modal
							open={open}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<ModalBox>
								<AutocompleteBox>
									<Text16 sx={{ maxWidth: '240px' }}>
										Опубликовать объявление на определенном(ых) улусе(ах):
									</Text16>
									<CustomAutocomplete
										multiple
										limitTags={2}
										options={uluusOptions}
										getOptionLabel={(option) => option.name}
										isOptionEqualToValue={(option, value) => option.id === value.id}
										onChange={(e, data) => {
											console.log('data', data);
											setValue('uluus', [...data]);
										}}
										renderInput={(params) => (
											<TextField {...params} placeholder='Выбрать улусы' />
										)}
									/>
								</AutocompleteBox>
								<CheckBox>
									<Text16>
										Опубликовать объявление во всех улусах республики
									</Text16>
									<input
										checked={allUluus}
										onChange={(e) => setAllUluus(e.target.checked)}
										type='checkbox'
										style={{
											width: '16px',
											height: '16px',
											border: '1px solid #CED4DA',
											borderRadius: '2px',
										}}
									/>
								</CheckBox>
								<CustomButton
									type='submit'
									onClick={handleSubmitForm}
									sx={{
										alignSelf: 'end',
									}}
								>
									<Text16 sx={{
										color: '#FFF',
									}}>
										Разместить объявление
									</Text16>
								</CustomButton>
							</ModalBox>
						</Modal> */}
						<Modal
							open={open2}
							onClose={() => setOpen2(false)}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<ModalBox sx={{
								maxWidth: '560px',
								alignItems: 'center',
							}}>
								<Text14>
									Поздравляем!
								</Text14>
								<Text14>
									Ваше объявление успешно опубликовано!
								</Text14>
								<CustomButton
									onClick={handleClose2}
									sx={{
										maxWidth: '150px',
									}}
								>
									<Text20 sx={{
										color: '#FFF',
									}}>
										На главную
									</Text20>
								</CustomButton>
							</ModalBox>
						</Modal>
					</CustomForm>
				</Box>
			</Container >
		</Box >
	);
}

export default AdForm;