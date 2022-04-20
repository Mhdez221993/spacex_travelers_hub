// eslint-disable import/no-extraneous-dependencies
import { useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { bookDragon, cancelBooking, fetchDragons } from '../../redux/dragons ';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector(state => state.dragons);

  useEffect(() => {
    if (!dragons.length) {
      dispatch(fetchDragons);
    }
  }, []);
  const handleBooking = id => dispatch(bookDragon(id));
  const handleCancellation = id => dispatch(cancelBooking(id));
  return (
    <Container>
      {dragons.map(({
        id, name, description, images, reserved,
      }) => (
        <Row key={id} className="mb-4">
          <Col xs={3} className="mb-5">
            <Image src={images[0]} thumbnail />
          </Col>
          <Col>
            <h3>{name}</h3>
            <p>
              {reserved && <Badge bg="info">Reserved</Badge>}
              {description}
            </p>
            {reserved && (
              <Button variant="outline-secondary" onClick={() => handleCancellation(id)}>
                Cancel reservation
              </Button>
            )}
            {!reserved && (
              <Button variant="primary" onClick={() => handleBooking(id)}>
                Reserve dragon
              </Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Dragons;
