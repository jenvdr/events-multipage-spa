import { Container } from "react-bootstrap";
import MainNavigation from "../components/Layout/MainNavigation/MainNavigation";
import Footer from "../components/Layout/Footer/Footer";
import PageContent from "../components/PageContent/PageContent";
import { useRouteError } from "react-router";

export default function Error() {
    const error = useRouteError();
    const status = error.status;
    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (status === 500) {
        title = JSON.parse(error.data).message;
    } else if (status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.'
    }

    return (
        <>
            <MainNavigation />
            <main>
                <Container>
                    <PageContent title={title}><p>{message}</p></PageContent>
                </Container>
            </main>
            <Footer />
        </>
    )
}