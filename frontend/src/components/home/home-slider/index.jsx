import { Box, Container } from '@mui/material';

import Slider from "react-slick";

const HomeSlider = () => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const data = [
		{
			backgroundColor: 'red',
			label: '1',
		},
		{
			backgroundColor: 'yellow',
			label: '2',
		},
		{
			backgroundColor: 'green',
			label: '3',
		},
		{
			backgroundColor: 'blue',
			label: '4',
		},
		{
			backgroundColor: 'brown',
			label: '5',
		},
	]

	return (
		<Container maxWidth='lg'>
			<Slider style={{ height: '190px' }} {...settings}>
				{data.map((item, index) => (
					<Box
						key={index}
						sx={{
							backgroundColor: item.backgroundColor,
							height: '190px',
							overflow: 'hidden',
							display: 'flex!important',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{item.label}
					</Box>
				))}
			</Slider>
		</Container>
	)
}

export default HomeSlider;