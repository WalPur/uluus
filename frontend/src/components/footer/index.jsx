import { HashLink } from 'react-router-hash-link';

import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

import { Text16, Text12 } from '../../global-styles';

const CustomText12 = styled(Text12)(({ theme }) => ({
	letterSpacing: '0.015em',
	textAlign: 'center',
	[theme.breakpoints.down('sm')]: {
		fontSize: '10px',
	}
}));
const CustomText16 = styled(Text16)(({ theme }) => ({
	letterSpacing: '0.015em',
	textAlign: 'center',
	[theme.breakpoints.down('md')]: {
		fontSize: '14px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '12px',
	}
}));
const CustomBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 60,
	[theme.breakpoints.down('sm')]: {
		gap: 20,
	}
}));
const RoutesBox = styled(Box)(({ theme }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'end',
	gap: 29,
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		alignItems: 'end',
		gap: 12,
	}
}));

const Footer = () => {
	const routes = [
		{
			label: 'Контакты',
			path: '/contacts#contacts'
		},
		{
			label: 'Правила подачи объявлений',
			path: '/adverts-rules#adverts-rules'
		},
		{
			label: 'Пользовательское соглашение',
			path: '/privacy-policy#privacy-policy'
		},
	];
	return (
		<Box sx={{
			padding: '30px 0',
			background: '#FFFFFF',
		}}>
			<Container maxWidth='lg'>
				<CustomBox>
					<RoutesBox>
						{routes.map((route, index) => (
							<HashLink
								to={route.path}
								key={index}
								style={{ textDecoration: 'none' }}
							>
								<CustomText16>
									{route.label}
								</CustomText16>
							</HashLink>
						))}
					</RoutesBox>
					<Box sx={{
						width: '100%',
						alignSelf: 'center',
					}}>
						<CustomText12>
							Использование uluus.ru, в том числе и размещение объявлений на сайте означает принятие условий пользовательского соглашения uluus.ru.
						</CustomText12>
					</Box>
				</CustomBox>
			</Container>
		</Box>
	);
}

export default Footer;