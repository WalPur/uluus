import { useNavigate } from 'react-router';

import { Box } from '@mui/material';

import { Text16, Text12 } from '../../../global-styles';

const GoldCard = (props) => {
	const navigate = useNavigate();
	const data = props?.data
	const date = new Date(data.date);
	return (
		<Box sx={{ background: '#FFFFFF', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
			<img style={{ width: '100%', height: 'auto' }} src={data?.image.length !== 0 ? 'https://uluus.ru' + data?.image[0]?.image : '/images/default_img.svg'} />
			<Box sx={{
				flexGrow: 1,
				display: 'flex',
				flexDirection: 'column',
				padding: '10px',
			}}>
				<Text16 sx={{ mb: 1 }}>
					{data.name}
				</Text16>
				<Text12 sx={{ flexGrow: 1, mb: 1, }}>
					{data.description}
				</Text12>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
					<Text12>
						{date.toLocaleString().slice(0, -3)}
					</Text12>
					<Text12
						onClick={() => navigate('/ad-detail/' + data.slug + '/' + data.id + '/')}
						sx={{
							cursor: 'pointer',
							color: '#0D6EFD',
						}}
					>
						подробнее
					</Text12>
				</Box>
			</Box>
		</Box>
	)
}

export default GoldCard;