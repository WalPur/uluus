import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import { styled } from '@mui/material';

import { Text12 } from '../../../global-styles';

const CustomLink = styled(Link)(({ theme }) => ({
	display: 'block',
	textDecoration: 'none',
	color: '#FFF',
	width: 92,
	height: 92,
	'&:hover .header-img': {
		display: 'none',
	},
	'&:hover p': {
		display: 'block',
	},
	'&:hover .header-img-hover': {
		display: 'flex',
	},
}));

const BottomHeader = (props) => {
	const data = props.data;
	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'space-between',
			height: 150,
		}}>
			{data.map((item, index) => (
				<CustomLink
					to={item.path}
					key={index}
				>
					<Box
						className='header-img'
						sx={{
							mb: 1,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: 92,
							height: 92,
							borderRadius: '50%',
						}}>
						<img src={item.img} />
					</Box>
					<Box
						className='header-img-hover'
						sx={{
							display: 'none',
							mb: 1,
							justifyContent: 'center',
							alignItems: 'center',
							width: 92,
							height: 92,
							borderRadius: '50%',
							background: '#0D6EFD',
						}}>
						<img src={item.img_hovered} />
					</Box>
					<Text12 sx={{ display: 'none', textAlign: 'center' }}>
						{item.label}
					</Text12>
				</CustomLink>
			))}
		</Box>
	);
}

export default BottomHeader;