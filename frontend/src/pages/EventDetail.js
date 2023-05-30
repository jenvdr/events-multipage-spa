import { useParams } from "react-router"

export default function EventDetail() {
    const params = useParams();
    return (
        <>
            <h1>EventDetail</h1>
            <p>Event id: {params.eventId}</p>
        </>

    )
};