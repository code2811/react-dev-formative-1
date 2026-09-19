import { withLogger } from '../hoc/withLogger';
import './Header.css';

// Header is a functional component: it's presentation-only, has no internal
// state or lifecycle needs of its own, so a function component keeps it
// simple (see README for the functional-vs-class discussion).
function Header() {
  return (
    <header className="header">
      <span className="header__logo">Dev Insights</span>
      <nav>
        {/* Intentionally non-functional for this formative assessment */}
        <a href="#" className="header__nav-link">
          New Post
        </a>
      </nav>
    </header>
  );
}

// Applying the withLogger HOC here satisfies the "apply the HOC to at least
// one component" requirement and lets us see mount/unmount logs in the
// console as the app renders.
export default withLogger(Header, 'Header');
