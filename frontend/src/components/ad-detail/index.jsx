import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

import axios from 'axios';

import {
	AdDetailSlider
} from '../';

const CustomBox = styled(Box)(({ theme }) => ({
	background: '#FFFFFF',
	padding: '20px 85px',
	[theme.breakpoints.down('sm')]: {
		padding: '20px 40px',
	}
}));

const AdDetail = () => {
	const params = useParams();
	const id = params.id;
	console.log(id);
	const category = useSelector((state) => state.category.value);
	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get('https://uluus.ru/api/' + category + '/' + id + '/')
			.then((response) => {
				const request = response.data;
				console.log(request);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	const images = [
		'/images/default_img.svg',
		'/images/default_img_2.svg',
		'/images/default_img.svg',
		'/images/default_img_2.svg',
		'/images/default_img.svg',
		'/images/default_img_2.svg',
		'/images/default_img.svg',
		'/images/default_img_2.svg',
	]
	return (
		<Box>
			<Container maxWidth='lg'>
				<CustomBox>
					<AdDetailSlider images={images} />
				</CustomBox>
			</Container>
		</Box>
	)
}

export default AdDetail;