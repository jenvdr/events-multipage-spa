import classes from './PageContent.module.scss';

function PageContent({ title, children }) {
    return (
        <div className={classes.Content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageContent;