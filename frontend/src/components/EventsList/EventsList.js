import classes from './EventsList.module.scss';
import { Col, Row } from 'react-bootstrap';

function EventsList({ events }) {
    return (
        <Row className={classes.events}>
            <Col lg={8} className={`mx-auto`}>
                <h1>All Events</h1>
                <Row className={classes.list}>
                {events.map((event) => (
                    <Col key={event.id} className={classes.item}>
                    <a href="...">
                        <img src={event.image} alt={event.title} />
                        <div className={classes.content}>
                        <h2>{event.title}</h2>
                        <time>{event.date}</time>
                        </div>
                    </a>
                    </Col>
                ))}
                </Row>
            </Col>
        </Row>
    );
}

export default EventsList;
