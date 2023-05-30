import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import MainNavigation from "../components/Layout/MainNavigation/MainNavigation";

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    )
}