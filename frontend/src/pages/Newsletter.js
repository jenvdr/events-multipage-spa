import NewsletterSignup from '../components/NewsletterSignup/NewsletterSignup';
import PageContent from '../components/PageContent/PageContent';

function Newsletter() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default Newsletter;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}