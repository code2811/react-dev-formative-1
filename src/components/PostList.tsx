import type { Post as PostType } from '../types/Post';
import Post from './Post';
import './PostList.css';

// Hardcoded sample data for this formative assessment. One post is dated
// "now" so the "New!" badge has something to show, and one is by Jane Doe
// so the highlighted-author styling has something to show.
const samplePosts: PostType[] = [
  {
    id: 1,
    title: 'Getting Started with Vite + TypeScript',
    author: 'Jane Doe',
    content:
      'Vite gives you a lightning-fast dev server and a build setup that just works out of the box for React and TypeScript projects.',
    datePosted: new Date().toISOString(), // right now -> triggers "New!" badge
  },
  {
    id: 2,
    title: 'Why We Chose Functional Components',
    author: 'Marcus Lee',
    content:
      'Hooks made functional components powerful enough to replace class components for almost everything we build day to day.',
    datePosted: '2026-09-10T09:00:00.000Z',
  },
  {
    id: 3,
    title: 'A Quick Guide to Conditional Styling',
    author: 'Aline Uwase',
    content:
      'Whether it is an inline style object or a toggled class name, conditional styling is how your UI reacts to data.',
    datePosted: '2026-09-05T14:30:00.000Z',
  },
];

function PostList() {
  return (
    <section className="post-list">
      {samplePosts.map((post) => (
        // Unique key prop per item, required for efficient list
        // reconciliation and to avoid React key warnings.
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
