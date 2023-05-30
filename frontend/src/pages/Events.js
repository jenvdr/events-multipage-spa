import { Link } from "react-router-dom"

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'First event'
    },
    {
        id: 'e2',
        title: 'Second event'
    },
    {
        id: 'e3',
        title: 'Third event'
    }
]

export default function Events() {
    return (
        <>
            <h1>Events</h1>
            <ul>
                {
                DUMMY_EVENTS.map(
                    event => (
                        <li key={event.id}>
                            <Link to={event.id} >{event.title}</Link>
                        </li>
                    )
                )}
            </ul>
        </>
    )
};