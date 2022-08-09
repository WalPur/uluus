import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, SwipeableDrawer, Divider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

import { Text16 } from '../../global-styles';

const CustomLink = styled(Link)(({ theme }) => ({
	display: 'flex',
	textDecoration: 'none',
	alignItems: 'center',
	gap: '10px',
	padding: '10px 12px',
	'&:hover': {
		background: '#0D6EFD',
	},
	'&:hover p': {
		color: '#FFFFFF',
	},
	'&:hover .drawer-img': {
		display: 'none'
	},
	'&:hover .drawer-img-hovered': {
		display: 'block'
	},
}));
const CustomButton = styled(Link)(({ theme }) => ({
	margin: '32px 12px',
	padding: '3px 15px',
	justifySelf: 'flex-end',
	display: 'inline-block',
	borderRadius: '4.8px',
	textDecoration: 'none',
	background: '#0D6EFD',
	'&:hover': {
		background: '#589CFF',
	},
	'&:active': {
		background: '#004FC4',
	}
}));

const Drawer = (props) => {
	const data = props.data;
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setOpen(open);
	};

	const list = (data) => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
		>
			<Box sx={{
				padding: '10px 12px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
				<Box sx={{
					display: 'flex',
					gap: '5px',
					alignItems: 'center',
				}}>
					<img src='images/uluusru_logo.svg' />
					<Typography sx={{
						fontFamily: 'ArciformSansRegular',
						fontSize: '20px',
						lineHeight: '20px',
						color: '#2C318F',
					}}>
						Uluus.ru
					</Typography>
				</Box>
				<CloseIcon fontSize='large' onClick={toggleDrawer(false)} />
			</Box>
			<Divider />
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
			}}>
				{data.map((item, index) => (
					<Box key={index}>
						<CustomLink
							to={item.path}
							onClick={toggleDrawer(false)}
						>
							<Box
								sx={{ maxWidth: '29px', maxHeight: '29px', }}
								className='drawer-img'
							>
								<img style={{ width: '100%', height: '100%' }} src={item.img} />
							</Box>
							<Box
								sx={{ maxWidth: '29px', maxHeight: '29px', display: 'none' }}
								className='drawer-img-hovered'
							>
								<img style={{ width: '100%', height: '100%' }} src={item.img_hovered} />
							</Box>
							<Text16>
								{item.label}
							</Text16>
						</CustomLink>
						<Divider />
					</Box>
				))}
			</Box >
			<CustomButton
				to='/'
			>
				<Text16 sx={{
					color: '#FFF',
				}}>
					Подать объявление
				</Text16>
			</CustomButton>
		</Box >
	);

	return (
		<React.Fragment>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
				<MenuIcon fontSize='large' sx={{ cursor: 'pointer', color: '#0D6EFD' }} onClick={toggleDrawer(true)} />
				<Box>
					<Link
						to='/'
						style={{
							display: 'flex',
							gap: 6,
							textDecoration: 'none',
							color: '#000',
						}}
					>
						<img src='images/placemark.svg' />
						<Text16>
							Выберите ваш улус
						</Text16>
					</Link>
				</Box>
			</Box>
			<SwipeableDrawer
				anchor='left'
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				{list(data)}
			</SwipeableDrawer>
		</React.Fragment>
	);
}

export default Drawer;

// export { toggleDrawer }