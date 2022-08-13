import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

import { Text20, Text16 } from '../../../global-styles';

const CustomLink = styled(Link)(({ theme }) => ({
	padding: '3px 15px',
	justifySelf: 'flex-end',
	display: 'block',
	borderRadius: '4.8px',
	textDecoration: 'none',
	background: '#0D6EFD',
	'&:hover': {
		background: '#589CFF',
	},
	'&:active': {
		background: '#004FC4',
	}
}));
const CustomBox = styled(Box)(({ theme }) => ({
	marginBottom: 26,
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	gap: '60px',
}));

const TopHeader = (props) => {
	const uluus = props.uluus;

	return (
		<CustomBox>
			<Box sx={{ display: 'flex', gap: 0.8 }}>
				<img src='/images/uluusru_logo.svg' />
				<Typography sx={{ fontFamily: 'ArciformSansRegular', fontSize: 32, color: '#2C318F', }}>
					Uluus.ru
				</Typography>
			</Box>
			<Box
				sx={{
					flexGrow: 1,
				}}
			>
				<Link
					to='/set-uluus'
					style={{
						display: 'flex',
						gap: 6,
						textDecoration: 'none',
						color: '#000',
					}}
				>
					<img src='/images/placemark.svg' />
					<Text16>
						{uluus === '' ? 'Выберите ваш улус' : uluus}
					</Text16>
				</Link>
			</Box>
			<CustomLink
				to='/ad-post'
			>
				<Text20 sx={{
					color: '#FFF'
				}}>
					Подать объявление
				</Text20>
			</CustomLink>
		</CustomBox>
	);
}

export default TopHeader;