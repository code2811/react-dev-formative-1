import { withLogger } from '../hoc/withLogger';
import './Header.css';

// Just a presentational component, so a function is enough.
function Header() {
  return (
    <header className="header">
      <span className="header__logo">Dev Insights</span>
      <nav>
        {/* Placeholder link for the assessment. */}
        <a href="#" className="header__nav-link">
          New Post
        </a>
      </nav>
    </header>
  );
}

// Wrap Header so the mount/unmount logs are easy to see.
export default withLogger(Header, 'Header');
