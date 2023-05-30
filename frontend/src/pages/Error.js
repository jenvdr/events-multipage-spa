import { Container } from "react-bootstrap";
import MainNavigation from "../components/Layout/MainNavigation/MainNavigation";
import Footer from "../components/Layout/Footer/Footer";

export default function Error() {
    return (
        <>
            <MainNavigation />
            <main>
                <Container>
                    <h1>An error has occured.</h1>
                </Container>
            </main>
            <Footer />
        </>
    )
}