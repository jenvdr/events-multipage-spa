import { Link, NavLink } from 'react-router-dom'
import classes from './Footer.module.scss'
import NewsletterSignup from '../../NewsletterSignup/NewsletterSignup'

export default function Footer() {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Content}>
                <nav>
                    <ul className={classes.List}>
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? classes.Active : undefined} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events" className={({isActive}) => isActive ? classes.Active : undefined} end>Events</NavLink>
                        </li>
                        <li>
                            <NavLink to="/newsletter" className={({ isActive }) => isActive ? classes.active : undefined }>Newsletter</NavLink>
                        </li>
                    </ul>
                </nav>
                <NewsletterSignup />
            </div>
            <div className={classes.Credits}>
                <p>Built by Jennifer Vobis, view <Link to="https://thepaperrocket.netlify.app/" target="_blank" title="Jennifer's portfolio">my portfolio</Link> and connect with me on <Link to="https://github.com/jenvdr" target="_blank" title="Jennifer's github">GitHub</Link>.</p>
            </div>
        </footer>
    )
};