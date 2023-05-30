import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList/EventsList";

export default function Events() {
    const events = useLoaderData();
    return <EventsList events={events} />;
};