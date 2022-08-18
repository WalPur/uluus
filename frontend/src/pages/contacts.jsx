import { Box, Container } from '@mui/material';

import { Subtitle, Text20 } from '../global-styles';

function Contacts() {
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
						Контакты
					</Subtitle>
					{data.map((item, index) => (
						<Box key={index} sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '20px',
						}}>
							<Subtitle sx={{ fontWeight: 700 }}>
								{item.title}
							</Subtitle>
							{item.rows.map((row, index) => (
								<Box
									key={index}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										gap: '10px',
										flexWrap: 'wrap',
										borderBottom: '2px solid rgba(197, 197, 197, 0.5)',
									}}
								>
									<Text20 sx={{
										fontWeight: 300,
									}}>
										{row.label}
									</Text20>
									<Text20 sx={{
										color: row.label === 'Электронная почта' ? '#1F89DB' : '#000',
										fontWeight: 300,
										mb: 2.6
									}}>
										{row.text}
									</Text20>
								</Box>
							))}
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	)
}

export default Contacts;