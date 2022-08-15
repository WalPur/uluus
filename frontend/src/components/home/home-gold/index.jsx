import { useState, useEffect } from 'react';

import axios from 'axios';

import { Box, Container, Grid } from '@mui/material';

import { GoldCard } from '../../';
import { Title } from '../../../global-styles';

const HomeGold = () => {
	const [gold, setGold] = useState();

	useEffect(() => {
		axios
			.get('https://uluus.ru/api/premium/')
			.then((response) => {
				const request = response.data;
				setGold(request);
			})
	}, []);

	return
	{
		gold.length !== 0 ? (
			<Box>
				<Container maxWidth='lg'>
					<Box>
						<Title sx={{ mb: '33px' }}>
							Золотой блок
						</Title>
						<Grid container spacing={2}>
							{gold?.map((card, index) => (
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
		) : (
			<></>
		)
	}
}

export default HomeGold;