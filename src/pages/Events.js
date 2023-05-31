import { defer, json, useLoaderData, Await } from "react-router";
import EventsList from "../components/EventsList/EventsList";
import { Suspense } from "react";

export default function Events() {
    const { events } = useLoaderData();
    
    return (
        <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
};

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json(
            { message: "Could not fetch events.", },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents(),
    })
}