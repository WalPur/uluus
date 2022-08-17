import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

import { Text20, Text16, Text14 } from '../../global-styles';
import categories from '../../data/categories.json';

import axios from 'axios';

import {
	AdDetailSlider
} from '../';

const CustomBox = styled(Box)(({ theme }) => ({
	background: '#FFFFFF',
	padding: '20px 85px',
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	[theme.breakpoints.down('sm')]: {
		padding: '20px 40px',
	}
}));

const AdDetail = (props) => {
	const category = props?.category;
	const params = useParams();
	const id = params.id;
	const [data, setData] = useState();
	const [uluus, setUluus] = useState();
	const categoryInfo = categories.filter(item => item.category.value === category.toUpperCase())[0];

	useEffect(() => {
		axios
			.get('https://uluus.ru/api/' + category + '/' + id + '/')
			.then((response) => {
				const request = response.data[0];
				setData(request);
			})
			.catch((error) => {
				console.log('error', error);
			});
		axios
			.get('https://uluus.ru/api/uluus/')
			.then((response) => {
				const request = response.data;
				setUluus(request);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	return (
		<Box>
			<Container maxWidth='lg'>
				<CustomBox>
					<Box sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '10px',
					}}>
						<Text16>
							{categoryInfo.category.label}
						</Text16>
						<Text16>
							{categoryInfo.subcategory.filter(item => item.value === data?.category)[0]?.label}
						</Text16>
					</Box>
					<Box sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '10px',
					}}>
						<Text20>
							{categoryInfo.action.filter(item => item.value === data?.action)[0]?.label}
						</Text20>
						<Text20>
							{data?.name}
						</Text20>
					</Box>
					{data?.image.length ? <AdDetailSlider images={data?.image} /> : <></>}
					<Text20>
						{data?.price} руб.
					</Text20>
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
					}}>
						{data ? categoryInfo.add?.map((item, index) => (
							<Box
								key={index}
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									gap: '10px',
								}}
							>
								<Text16>
									{item.label + ':'}
								</Text16>
								<Text16>
									{item.values.filter(value => value.value === data[item.register])[0].label}
								</Text16>
							</Box>
						)) : <></>}
					</Box>
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
					}}>
						<Text16 sx={{
							fontWeight: 700,
						}}>
							Описание
						</Text16>
						<Text14>
							{data?.description}
						</Text14>
					</Box>
					<Box sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '10px',
					}}>
						<Text16 sx={{
							fontWeight: 700,
						}}>
							Населенный пункт:
						</Text16>
						<Text16>
							{data?.settlement}
						</Text16>
					</Box>
					<Text20>
						{data?.phone}
					</Text20>
					<Text20>
						{data?.user_name}
					</Text20>
				</CustomBox>
			</Container>
		</Box>
	)
}

export default AdDetail;