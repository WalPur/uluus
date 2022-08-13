import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

import TopHeader from './top-header';
import BottomHeader from './bottom-header';
import { Drawer } from '../';

const HeaderBox = styled(Box)(({ theme }) => ({
	padding: '15px 0 0 0',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}));
const HeaderMobileBox = styled(Box)(({ theme }) => ({
	padding: '15px 0',
	display: 'none',
	[theme.breakpoints.down('md')]: {
		display: 'block',
	}
}));

function Header(props) {
	const uluus = props.uluus;
	const data = [
		{
			img: '/images/nedvizhimost.svg',
			img_hovered: '/images/nedvizhimost_hovered.svg',
			label: 'Недвижимость',
			path: '/',
		},
		{
			img: '/images/auto.svg',
			img_hovered: '/images/auto_hovered.svg',
			label: 'Авто',
			path: '/',
		},
		{
			img: '/images/uslugi.svg',
			img_hovered: '/images/uslugi_hovered.svg',
			label: 'Услуги',
			path: '/',
		},
		{
			img: '/images/for_home.svg',
			img_hovered: '/images/for_home_hovered.svg',
			label: 'Для дома',
			path: '/',
		},
		{
			img: '/images/food.svg',
			img_hovered: '/images/food_hovered.svg',
			label: 'Продукты питания',
			path: '/',
		},
		{
			img: '/images/vacancy.svg',
			img_hovered: '/images/vacancy_hovered.svg',
			label: 'Вакансии',
			path: '/',
		},
	];
	return (
		<Box sx={{
			background: '#FFFFFF',
			borderBottom: '2px solid #CED4DA',
		}}>
			<Container maxWidth='lg'>
				<HeaderBox>
					<TopHeader uluus={uluus} />
					<BottomHeader data={data} />
				</HeaderBox>
				<HeaderMobileBox>
					<Drawer data={data} />
				</HeaderMobileBox>
			</Container>
		</Box>
	);
}

export default Header;
