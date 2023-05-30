import EventForm from '../components/EventForm/EventForm';
import { useRouteLoaderData } from 'react-router';
export default function EditEvent() {
    const data = useRouteLoaderData('event-detail');
    return (
        <EventForm event={data.event} /> 
    )
};