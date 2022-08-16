import {
	AdDetail,
} from '../components';

function Detail(props) {
	const category = props.category;
	return (
		<div style={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			<AdDetail category={category} />
		</div>
	)
}

export default Detail;
