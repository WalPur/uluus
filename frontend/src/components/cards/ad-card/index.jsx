import { useNavigate } from 'react-router';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { Subtitle, Text14, Text12 } from '../../../global-styles';

const CustomSubtitle = styled(Subtitle)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		fontSize: '12px',
	}
}));
const CardBox = styled(Box)(({ theme }) => ({
	cursor: 'pointer',
	display: 'flex',
	padding: '18px 24px',
	gap: '33px',
	background: '#FFFFFF',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		padding: '18px',
		gap: '18px',
	}
}));
const TextBox = styled(Box)(({ theme }) => ({
	flexGrow: 1,
	display: 'flex',
	justifyContent: 'space-between',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	}
}));
const LeftBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'start',
	justifyContent: 'space-between',
	gap: '5px',
	[theme.breakpoints.down('md')]: {
		flexGrow: 1,
	},
	[theme.breakpoints.down('sm')]: {
		gap: '10px',
	}
}));
const RightBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'end',
	justifyContent: 'space-between',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'row',
	}
}));

const AdCard = (props) => {
	const navigate = useNavigate();
	const data = props.data;
	return (
		<CardBox onClick={() => navigate('/ad-detail/' + data.id)}>
			<img src={data.img} />
			<TextBox sx={{
				gap: 1.5,
			}}>
				<LeftBox>
					<Subtitle>
						{data.title}
					</Subtitle>
					<Box sx={{
						flexGrow: 1,
					}}>
						<Text12>
							{data.desc}
						</Text12>
					</Box>
					<Text14>
						{data.number}
					</Text14>
				</LeftBox>
				<RightBox sx={{
					gap: 0.3
				}}>
					<CustomSubtitle sx={{
						textAlign: 'end',
					}}>
						{data.date}
					</CustomSubtitle>
					<Text12>
						{data.watch}
					</Text12>
				</RightBox>
			</TextBox>
		</CardBox>
	)
}

export default AdCard;