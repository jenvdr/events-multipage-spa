import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import './styles/globals.scss';
import Events, { loader } from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import NewEvent from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path : '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { index: true,  element: <Home />},
            { path: 'events', element: <EventsRoot />, children: [
                { index: true, element: <Events/>, loader: loader},
                { path: ':eventId', element: <EventDetail/> },
                { path: 'new', element: <NewEvent/> },
                { path: ':eventId/edit', element: <EditEvent /> },
            ]}
    ]},
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;
