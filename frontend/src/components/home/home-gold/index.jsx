import { Box, Container, Grid } from '@mui/material';

import { GoldCard } from '../../';
import { Title } from '../../../global-styles';

const HomeGold = () => {
	const data = [
		{
			img: '/images/default_img.svg',
			title: 'Заголовок',
			desc: 'Описание Описание Описание Описание Описание Описание Описание Описание',
			date: '30.06.2022',
			id: 6,
		},
		{
			img: '/images/default_img.svg',
			title: 'Заголовок',
			desc: 'Описание Описание Описание Описание Описание Описание Описание Описание',
			date: '30.06.2022',
			id: 7,
		},
		{
			img: '/images/default_img.svg',
			title: 'Заголовок',
			desc: 'Описание Описание Описание Описание Описание Описание Описание Описание',
			date: '30.06.2022',
			id: 8,
		},
		{
			img: '/images/default_img.svg',
			title: 'Заголовок',
			desc: 'Описание Описание Описание Описание Описание Описание Описание Описание',
			date: '30.06.2022',
			id: 9,
		},
		{
			img: '/images/default_img.svg',
			title: 'Заголовок',
			desc: 'Описание Описание Описание Описание Описание Описание Описание Описание',
			date: '30.06.2022',
			id: 10,
		},
	]

	return (
		<Box>
			<Container maxWidth='lg'>
				<Box>
					<Title sx={{ mb: '33px' }}>
						Золотой блок
					</Title>
					<Grid container spacing={2}>
						{data.map((card, index) => (
							<Grid
								key={index}
								item
								xl={2.4}
								lg={2.4}
								md={2.4}
								sm={4}
								xs={12}
							>
								<GoldCard data={card} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}

export default HomeGold;