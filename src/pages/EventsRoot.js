import { Outlet } from 'react-router';
import EventsNavigation from '../components/EventsNavigation/EventsNavigation';
export default function EventsRoot() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}