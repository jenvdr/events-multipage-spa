import { json, useLoaderData } from "react-router";
import EventsList from "../components/EventsList/EventsList";

export default function Events() {
    const data = useLoaderData();

    const events = data.events;
    return <EventsList events={events} />;
};

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json(
            { message: "Could not fetch events.", },
            { status: 500 }
        );
    } else {
        return response;
    }
}