import { useEffect, useRef } from 'react';
import classes from './NewsletterSignup.module.scss';
import { useFetcher } from 'react-router-dom';

function NewsletterSignup() {
  const ref = useRef();
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
      ref.current.value = '';
    }
  }, [data, state])

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        ref={ref}
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;