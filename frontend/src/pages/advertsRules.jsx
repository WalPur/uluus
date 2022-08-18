import { Box, Container } from '@mui/material';

import { Subtitle, Text20 } from '../global-styles';

function AdvertsRules() {
	const data = [
		{
			title: 'Телефоны контактных центров',
			rows: [
				{
					label: 'Якутск',
					text: '+7 (914) 272-63-00',
				},
				{
					label: 'Регионы',
					text: '+7 (914) 272-63-00',
				},
			]
		},
		{
			title: 'Отдел поддержки клиентов',
			rows: [
				{
					label: 'Электронная почта',
					text: 'uluus@inbox.ru',
				},
			]
		},
	];
	return (
		<Box sx={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			<Container maxWidth='lg'>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '30px',
				}}>
					<Subtitle sx={{
						fontWeight: 700
					}}>
						Правила подачи объявлений
					</Subtitle>
				</Box>
			</Container>
		</Box>
	)
}

export default AdvertsRules;