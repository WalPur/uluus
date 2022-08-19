import {
	HomeSlider,
	HomeGold,
	HomeAd,
} from '../components';

function Home() {
	return (
		<div style={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			{/* <HomeSlider /> */}
			{/* <HomeGold /> */}
			<HomeAd />
		</div>
	)
}

export default Home;
