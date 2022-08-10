import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

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