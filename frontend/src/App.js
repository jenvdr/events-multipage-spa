import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import './index.scss';
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import NewEvent from "./pages/NewEvent";
import MainNavigation from "./components/Layout/MainNavigation/MainNavigation";

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/events', element: <Events/> },
  { path: '/events/:eventId', element: <EventDetail/> },
  { path: '/events/new', element: <NewEvent/> },
  { path: '/events/:eventId/edit', element: <EditEvent /> },
])

function App() {
  return (
    <>
        <MainNavigation />
        <main>
            <RouterProvider router={router} />
        </main>
    </>
  )
}

export default App;
