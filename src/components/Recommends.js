import { Row, Col, Container } from 'react-bootstrap';

const places = ['aldi', 'festivalfood', 'woodmans'];
const Recommends = () => {
	return (
		<Container fluid>
			<Row>
				{places.map((place) => (
					<Col>
						<h1>{place}</h1>
					</Col>
				))}
				<h9>
					add geo locate api and stuff see map app you made for starting point
				</h9>
			</Row>
		</Container>
	);
};
export default Recommends;
