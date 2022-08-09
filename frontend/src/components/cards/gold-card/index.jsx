import { Link } from 'react-router-dom';

import { Box } from '@mui/materail';

import { Text16, Text12 } from '../../../global-styles';

const GoldCard = (props) => {
	const data = props.data
	return (
		<Box>
			<img src={data.img} />
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '10px',
			}}>
				<Text16>
					{data.title}
				</Text16>
				<Text12>
					{data.desc}
				</Text12>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
					<Text12>
						{data.date}
					</Text12>
					<Link style={{
						textDecoration: 'none',
						color: '#0D6EFD',
					}}>
						<Text12>
							подробнее
						</Text12>
					</Link>
				</Box>
			</Box>
		</Box>
	)
}

export default GoldCard;