import { useNavigate } from 'react-router';

import { Box } from '@mui/material';

import { Text16, Text12 } from '../../../global-styles';

const GoldCard = (props) => {
	const navigate = useNavigate();
	const data = props.data
	return (
		<Box sx={{ background: '#FFFFFF', overflow: 'hidden' }}>
			<img style={{ width: '100%', height: 'auto' }} src={data.img} />
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '10px',
			}}>
				<Text16 sx={{ mb: 1 }}>
					{data.title}
				</Text16>
				<Text12 sx={{ mb: 1 }}>
					{data.desc}
				</Text12>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
					<Text12>
						{data.date}
					</Text12>
					<Text12
						onClick={() => navigate('/ad-detail/' + data.id)}
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