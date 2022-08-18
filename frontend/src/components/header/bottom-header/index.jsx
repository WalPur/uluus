import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Box } from '@mui/material';
import { styled } from '@mui/material';

import { Text12 } from '../../../global-styles';
import { setCategory } from '../../../slices/categorySlice';

const CustomLink = styled(HashLink)(({ theme }) => ({
	display: 'block',
	cursor: 'pointer',
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
	const category = useSelector((state) => state.category.value);
	console.log(category);
	const data = props.data;
	const dispatch = useDispatch();
	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'space-between',
			height: 150,
		}}>
			{data.map((item, index) => (
				<CustomLink
					to='/#Adverts'
					onClick={() => {
						dispatch(setCategory(item.value));
					}}
					key={index}
				>
					<Box
						className='header-img'
						sx={{
							mb: 1,
							display: category !== item.value ? 'flex' : 'none',
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
							display: category === item.value ? 'flex' : 'none',
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
					<Text12 sx={{ display: category === item.value ? 'block' : 'none', textAlign: 'center' }}>
						{item.label}
					</Text12>
				</CustomLink>
			))
			}
		</Box >
	);
}

export default BottomHeader;