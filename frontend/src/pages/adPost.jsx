import {
	AdForm,
} from '../components';
import {Helmet} from "react-helmet";

function AdPost() {
	return (
		<div style={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			<Helmet>
                <meta charSet="utf-8" />
                <title>Uluus.ru - новое объявление</title>
                <meta name="description" content="Создать новое объявление" />
            </Helmet>
			<AdForm />
		</div>
	)
}

export default AdPost;
