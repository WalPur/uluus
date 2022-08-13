import {
	AdForm,
} from '../components';

function AdPost() {
	return (
		<div style={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			<AdForm />
		</div>
	)
}

export default AdPost;
