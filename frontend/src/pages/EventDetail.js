import { json, redirect, useRouteLoaderData } from "react-router"
import EventItem from "../components/EventsList/EventItem";

export default function EventDetail() {
    const data = useRouteLoaderData('event-detail');
    return (
        <EventItem event={data.event} />
    )
};

export async function loader({request, params}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: 'Could not fetch details for selected event'}, { status: 500 })
    } else {
        console.log(`response inside eventdetail.js: ${JSON.stringify(response)}`)
        return response;
    }
}

export async function action({ params, request }) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method,
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete event.'},
            {
                status: 500,
            }
        );
    }

    return redirect('/events');
}