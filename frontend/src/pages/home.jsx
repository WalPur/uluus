import {
	HomeAd,
	HomeGold,
	HomeSlider,
} from '../components';

import {Helmet} from "react-helmet";

function Home() {
	return (
		<div style={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			<Helmet>
                <meta charSet="utf-8" />
                <title>Uluus.ru - сайт объявлений по Якутии</title>
                <meta name="description" content="Доска бесплатных объявлений Якутска и улусов Республики Саха (Якутия). Все объявления Республики Саха (Якутия) в одном месте. Вы можете подать объявление по РС(Я) совершенно бесплатно!" />
            </Helmet>
			{/* <HomeSlider /> */}
			{/* <HomeGold /> */}
			<HomeAd />
		</div>
	)
}

export default Home;
