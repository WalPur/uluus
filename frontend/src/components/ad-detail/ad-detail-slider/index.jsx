import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { Box } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomSlider = styled(Slider)(({ theme }) => ({
	'&.slick-slider .slick-next:before, &.slick-slider .slick-prev:before': {
		display: 'none',
	},
	'&.slick-slider .slick-next': {
		right: '20px',
		width: 'auto',
		height: 'auto',
	},
	'&.slick-slider .slick-prev': {
		left: '20px',
		width: 'auto',
		height: 'auto',
	},
	[theme.breakpoints.down('md')]: {
		'&.slick-slider .slick-next': {
			right: '0',
		},
		'&.slick-slider .slick-prev': {
			left: '0',
		},
	},
	[theme.breakpoints.down('sm')]: {
		'&.slick-slider .slick-next': {
			display: 'none!important',
		},
		'&.slick-slider .slick-prev': {
			display: 'none!important',
		},
	},
}));
const CustomSlider2 = styled(Slider)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
}));
const CustomBox = styled(Box)(({ theme }) => ({
	display: 'flex!important',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '300px',
	overflow: 'hidden',
	[theme.breakpoints.down('sm')]: {
		height: '200px',
	},
	[theme.breakpoints.down(400)]: {
		height: '150px',
	},
}));
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: 'none' }}
			onClick={onClick}
		>
			<ArrowForwardIosIcon fontSize='large' sx={{ color: '#000' }} />
		</div>
	);
}
function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "none" }}
			onClick={onClick}
		>
			<ArrowBackIosNewIcon fontSize='large' sx={{ color: '#000' }} />
		</div>
	);
}

const AdDetailSlider = (props) => {
	const images = props.images;
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const settings1 = {
		dots: false,
		infinite: true,
		swipeToSlide: true,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}
	const settings2 = {
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		swipeToSlide: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				}
			},
		]
	}
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			gap: '17px',
		}}>
			<CustomSlider
				asNavFor={nav2}
				ref={slider1 => (setNav1(slider1))}
				{...settings1}
			>
				{images.map((item, index) => (
					<CustomBox
						key={index}
					>
						<img src={item} style={{ width: 'auto', height: '100%', overflow: 'hidden' }} />
					</CustomBox>
				))}
			</CustomSlider>
			<CustomSlider2
				focusOnSelect={true}
				asNavFor={nav1}
				ref={slider2 => (setNav2(slider2))}
				{...settings2}
			>
				{images.map((item, index) => (
					<Box
						key={index}
						sx={{
							display: 'flex!important',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '120px',
						}}
					>
						<img src={item} style={{ maxWidth: '90%', width: 'auto', height: '100%', overflow: 'hidden' }} />
					</Box>
				))}
			</CustomSlider2>
		</Box>
	)
}

export default AdDetailSlider;