import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Title = styled(Typography)(({ theme }) => ({
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 700,
	fontSize: 32,
	lineHeight: '137.5%',
	color: '#000000',
	[theme.breakpoints.down('md')]: {
		fontSize: '24px',
	}
}));
const Subtitle = styled(Typography)(({ theme }) => ({
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 24,
	lineHeight: '137.5%',
	color: '#000000',
	[theme.breakpoints.down('md')]: {
		fontSize: '20px',
	}
}));
const Text20 = styled(Typography)(({ theme }) => ({
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 20,
	lineHeight: '135%',
	color: '#000000',
	[theme.breakpoints.down('sm')]: {
		fontSize: '16px',
	}
}));
const Text16 = styled(Typography)(({ theme }) => ({
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 16,
	letterSpacing: '0.005em',
	lineHeight: '137.5%',
	color: '#000000',
}));
const Text14 = styled(Typography)(({ theme }) => ({
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 14,
	lineHeight: '137.5%',
	color: '#000000',
}));
const Text12 = styled(Typography)(({ theme }) => ({
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: 12,
	lineHeight: '137.5%',
	color: '#000000',
}));

export {
	Title,
	Subtitle,
	Text20,
	Text16,
	Text14,
	Text12,
}